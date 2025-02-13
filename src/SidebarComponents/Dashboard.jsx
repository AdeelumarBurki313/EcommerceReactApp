import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import boot1 from "../assets/boot1.png";
import SportsWomen from "../assets/Sports women.png";
import CartComponent from "../Components/CartComponent";
import { FiShoppingCart } from "react-icons/fi";
import { myData } from "../Data";

function Dashboard() {
  const navigate = useNavigate();
  // Check if the user is 
  // logged in by checking localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users")); // Get user from localStorage
    if (!user) {
      // If user is not logged in, redirect to login page
      navigate("/"); // Redirect to login
    }
  }, [navigate]);  // Run the effect only once when the component mounts

  return (
    <div className="pb-10">
      <div className="flex flex-wrap-reverse justify-end">
        <Link to={"/Mycart"}>
  <button   className="text-white size-6 font-light animate-bounce w-25 h-10 rounded-2xl bg-fuchsia-900 flex items-center">
    <FiShoppingCart className="text-2xl pb-2 mr-1" />
    My Cart
  </button>
  </Link>
</div>

      <div className="flex pb-5 h-[50vh]">
        {/* Div 1 (70% width) */}
        <div className="w-[70%] bg-[linear-gradient(to_right,_#000_25%,_#89089f_25%,_#89089f_42%,_#000_42%,_#000_90%,_#000)] rounded-2xl flex p-10">
          {/* Image */}
          <div className="flex-none flex justify-center items-center w-[70%]">
            <img
              src={boot1}
              alt="Boot"
              className="w-3/5 max-h-auto rounded-xl "
            />
          </div>
          {/* Text Content */}
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

        {/* Div 2 (30% width) */}
        <div className="w-[30%] h-full ml-5 rounded-2xl overflow-hidden">
          <img
            src={SportsWomen}
            alt="sports woman"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex gap-4 flex-row w-full h-full ">
        {myData.map((item) => {
          const props = {
            img: item.img,
            price: item.price,
            title: item.title,
            category: item.category,
          };
          return <CartComponent key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
