import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

function Mycart() {
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cart items from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveFromCart = (key) => {
  
    const updatedCart = cartItems.filter((item) => item.key !== key);
    setCartItems(updatedCart);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));

   
    toast.error("Item removed from cart", {
      position: "top-center",
      autoClose: 2000,  
      style: { backgroundColor: 'orange', color: 'white', fontWeight: 'bold' },
    });
  };

  const handleQuantityChange = (key, operation) => {
    // Update item quantity
    const updatedCart = cartItems.map((item) => {
      if (item.key === key) {
        let updatedQuantity = item.quantity;
        if (operation === "increment") {
          updatedQuantity += 1;
        } else if (operation === "decrement" && item.quantity > 1) {
          updatedQuantity -= 1;
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">

      <ToastContainer />

      <h1 className="text-4xl font-bold mb-2 flex gap-2 ">
        <FaShoppingCart className="text-5xl min-w-[1.25rem]" /> My Cart
      </h1>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.key}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1 mx-4">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-semibold">{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.key, "decrement")}
                  className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.key, "increment")}
                  className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.key)}
                className="text-red-500 text-sm"
              >
                <RiDeleteBin6Line className="text-xl min-w-[1.25rem]" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-2xl">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Mycart;
