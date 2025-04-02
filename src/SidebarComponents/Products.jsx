import React, { useEffect, useState } from 'react';
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-xl mt-8">Loading products...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
    
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

function Product({ product }) {
  const { id, title, price, description, category, image, rating } = product;

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find(item => item.id === id);

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, {
        id,
        title,
        price,
        category,
        img: image,
        quantity: 1,
        key: id.toString()
      }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));

    toast.success("Added to cart!", {
      position: "top-center",
      autoClose: 2000,
      style: { backgroundColor: '#89089f', color: 'white' },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="h-48 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="text-gray-500 text-sm mt-1 capitalize">{category}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <HiHeart className="text-red-500 mr-1" size={20} />
            <span className="text-xl font-bold text-[#89089f]">
              ${price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center">
            <AiFillStar className="text-[#89089f]" />
            <span className="ml-1 text-sm text-[#89089f]">
              {rating.rate} ({rating.count})
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex gap-2">
          <button
            className="flex-1 bg-[#89089f] text-white py-2 px-4 rounded-md hover:bg-[#6a067f] transition-colors text-sm"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;