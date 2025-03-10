import React, { useState } from "react";
import Boot2 from "../assets/Boot2.png";
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

function CartComponent({ item }) {
  const { img, price, title, category, key } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const handleQuickView = () => {
    setIsModalOpen(true);
  };

  // Close modal when clicking outside or on close button
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle adding item to cart
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = existingCart.find((cartItem) => cartItem.key === key);

    if (itemExists) {
      // If item already exists in the cart, increment its quantity
      existingCart.forEach((cartItem) => {
        if (cartItem.key === key) {
          cartItem.quantity += 1;
        }
      });
    } else {
      // Add the new item to the cart with quantity 1
      existingCart.push({ ...item, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    
    // Show the toast notification instead of alert
    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 2000,  // The toast will automatically close after 2 seconds
      style: { backgroundColor: 'green', color: 'white', fontWeight: 'bold' }, // Custom styles
    });
  };

  return (
    <>
  
      <ToastContainer />

      <div className="w-60 bg-white pt-10 rounded-lg shadow-sm relative">
        <img
          src={img ? img : Boot2}
          alt="Boot"
          className="w-full h-auto object-contain"
        />
        <div className="flex w-full">
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
        <div className="flex py-2 justify-between px-3">
          <h2 className="text-sm font-bold text-center mb-1">
            {title ? title : "SNEAKER"}
          </h2>
          <div className="flex">
            <HiHeart className="mr-1 mt-1" color="purple" />
            <p className="text-base font-bold text-black text-center">
              {price ? price : "$65.00"}
            </p>
          </div>
        </div>
        <div className="flex justify-between pl-3 pb-1 border-t border-neutral-700">
          <p>{category ? category : "Running"}</p>
          <div className="flex items-center space-x-1 pr-2">
            <AiFillStar color="purple" size={16} />
            <AiFillStar color="purple" size={16} />
            <AiFillStar color="purple" size={16} />
            <AiFillStar color="purple" size={16} />
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-lg z-40 flex items-center justify-center overflow-auto"
            onClick={closeModal} // Close on clicking outside the modal
          >
            <div
              className="relative bg-white p-4 rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
            >
              <button
                className="absolute top-0 right-0 p-2 text-black"
                onClick={closeModal} // Close button inside modal
              >
                X
              </button>
              <img
                src={img ? img : Boot2}
                alt="Zoomed Boot"
                className="w-full h-auto object-contain transition-transform duration-500 ease-in-out scale-150"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartComponent;
