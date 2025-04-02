import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import boot1 from "../assets/boot1.png";
import SportsWomen from "../assets/Sports women.png";
import CartComponent from "../Components/CartComponent";
import { FiShoppingCart } from "react-icons/fi";

function Dashboard() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (!user) {

      navigate("/");
    }
  }, [navigate]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setApiData(data.slice(0, 5)); // Limit to 5 items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="pb-10">
      <div className="flex pb-5 h-[50vh]">
        <div className="w-[70%] bg-[linear-gradient(to_right,_#000_25%,_#89089f_25%,_#89089f_42%,_#000_42%,_#000_90%,_#000)] rounded-2xl flex p-10">
          <div className="flex-none flex justify-center items-center w-[70%]">
            <img
              src={boot1}
              alt="Boot"
              className="w-3/5 max-h-auto rounded-xl"
            />
          </div>
          <div className="flex-1 mr-12">
            <h1 className="text-xl font-bold mb-1 text-amber-50">
              ESSENTIAL <br /> ITEMS FOR
            </h1>
            <button className="text-xl font-bold text-amber-50 bg-fuchsia-900 rounded-md px-6 py-1">
              $99
            </button>

            <p className="my-2 text-amber-50 font-light text-xs">
              Nulla accumsan malesuada egestas nam dignissim. Quis vulputate
              blandit duis
            </p>

            <button className="bg-amber-50 text-black font-bold text-xs/relaxed py-2 px-4 rounded-md flex items-center justify-center hover:bg-[#89089f] hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-[30%] h-full ml-5 rounded-2xl overflow-hidden">
          <img
            src={SportsWomen}
            alt="sports woman"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apiData.map((item) => {
          const props = {
            img: item.image,
            price: item.price,
            title: item.title,
            category: item.category,
          };
          return (
            <div
              key={item.id}
              className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-between"
            >
              <CartComponent item={props} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
