import React from "react";
import TypingEffect from "../components/TypingEffect";
import portfolio from "../assets/portfolio.png";

const Home = () => {
  return (
    // <div className="min-h-screen w-full p-4 md:p-8 border-4 border-blue-900 bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 h-full items-center">
      {/* Intro Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 ">Hello,</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          I'm Gulshan Kumar
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-800">
          <TypingEffect />
        </h1>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src={portfolio}
          alt="My Profile"
          className="w-2/3 md:w-1/2 h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
