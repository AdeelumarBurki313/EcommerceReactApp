import React, { useState } from "react";
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartComponent({ item }) {
  const { img, price, title, category, key: itemKey } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const handleQuickView = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fixed add to cart function with proper syntax
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const uniqueKey = itemKey || `${title}-${category}-${Date.now()}`;

    const existingItem = existingCart.find(cartItem => cartItem.key === uniqueKey);

    if (existingItem) {
      const updatedCart = existingCart.map(cartItem => 
        cartItem.key === uniqueKey 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newItem = { 
        ...item, 
        quantity: 1, 
        key: uniqueKey 
      };
      localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
    }

    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 2000,
      style: { backgroundColor: 'green', color: 'white', fontWeight: 'bold' },
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="w-52 bg-white pt-4 rounded-lg shadow-md relative overflow-hidden">
        <img
          src={img || Boot2}
          alt="Product"
          className="w-full h-auto object-contain max-h-40 rounded-t-lg"
        />
        <div className="flex w-full mt-3 px-2">
          <button
            onClick={handleAddToCart}
            className="text-xs h-8 w-[50%] bg-black text-white py-1 px-2 hover:bg-amber-600"
          >
            Add to Cart
          </button>
          <button
            onClick={handleQuickView}
            className="text-xs w-[50%] bg-[#89089f] text-white py-1 px-2 hover:bg-white hover:border-1 hover:border-[#89089f] hover:text-[#89089f]"
          >
            Quick View
          </button>
        </div>
        <div className="px-3 py-2">
          <h2 className="text-sm font-bold text-center mb-1 truncate">
            {title || "SNEAKER"}
          </h2>
          <div className="flex justify-center items-center space-x-1">
            <HiHeart className="mr-1 mt-1" color="purple" />
            <p className="text-base font-bold text-black">{price || "$65.00"}</p>
          </div>
        </div>
        <div className="flex justify-between pl-3 pb-1 border-t border-neutral-700 px-2">
          <p className="text-xs text-gray-500">{category || "Running"}</p>
          <div className="flex items-center space-x-1 pr-2">
            <AiFillStar color="purple" size={16} />
            <AiFillStar color="purple" size={16} />
            <AiFillStar color="purple" size={16} />
            <AiFillStar color="purple" size={16} />
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-lg z-40 flex items-center justify-center overflow-auto"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-0 right-0 p-2 text-black"
                onClick={closeModal}
              >
                X
              </button>
              <img
                src={img || Boot2}
                alt="Zoomed Product"
                className="max-w-[80vw] max-h-[80vh] object-contain transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartComponent;