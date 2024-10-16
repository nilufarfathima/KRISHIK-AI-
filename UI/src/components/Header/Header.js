import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#304D30] inPhone header">
      <div className="flex content-center">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-16">
          <img
            onClick={() => navigate("/")}
            src={logo}
            className="logoWeb"
            alt=""
          />
          <h3 className="text-md text-white font-bold opacity-[.70]">KRISHIK.AI.KVGCE</h3>
        </div>
        <div className="flex-2 w-6/12 mx-auto">
          <ul className="flex items-around test">
            <li
              onClick={() => navigate("/")}
              className="testli text-sm cursor-pointer font-semibold test-white hover:opacity-90 lg:ml-7 ml-6 mr-1.5"
            >
              Home
            </li>
            <li
              className="text-sm cursor-pointer font-semibold test-white hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              className="text-sm cursor-pointer font-semibold test-white hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/voice")}
            >
              Voice Help
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold test-white hover:opacity-90 ml-6 mr-1.5"
            >
              Fertilizer Recommendation
            </li>
            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold test-white hover:opacity-90 ml-6 mr-1.5"
            >
              Disease Prediction
            </li>
            <li
              onClick={() => navigate("/chat")}
              className="text-sm cursor-pointer font-semibold test-white hover:opacity-90 ml-6 mr-1.5"
            >
              ChatBot
            </li>
            <li
              onClick={() => navigate("/sms")}
              className="text-sm cursor-pointer font-semibold test-white hover:opacity-90 ml-6 mr-1.5"
            >
              SMS Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
