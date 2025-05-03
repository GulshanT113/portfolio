import React from "react";

const About = () => {
  return (
    // <div className="min-h-screen flex justify-center  border-4 border-red-900">
    <div className="flex flex-col justify-center p-2">
      {/* <div className="bg-gray-900 m-8 p-8 w-full max-w-7xl shadow-xl border-2"> */}
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl border-gray-500 border-4 w-56 rounded-xl p-4 font-bold mb-10 text-center text-orange-400">
        About Me
      </h1>
      <h2 className="text-xl text-gray-300 font-bold mb-10 text-center p-4 rounded-xl bg-[rgb(12,12,12)]">
        As a passionate React developer with strong hands-on experience in
        front-end technologies, I thrive on building clean, scalable interfaces
        and continuously expanding my skill set. I’m driven by curiosity and a
        love for learning, always eager to explore emerging trends in tech and
        embrace new challenges that push me to grow professionally.
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="p-4 rounded-xl bg-[rgb(12,12,12)]">
          <h2 className="text-2xl font-semibold text-white mb-3">Name</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">Gulshan Kumar</p>

          <h2 className="text-2xl font-semibold text-white mb-3">Email</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">
            Gulshant113@gmail.com
          </p>

          <h2 className="text-2xl font-semibold text-white mb-3">Phone</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">
            +91 8218409705
          </p>
          
          <h2 className="text-2xl font-semibold text-white mb-3">Address</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">
            Post-MIET Meerut, Village Khadoli Bhola Road, Bypass NH-58, Meerut, UP 250001
          </p>
        </div>

        {/* Right Side */}
        <div className="p-4 rounded-xl bg-[rgb(12,12,12)]">
        <h2 className="text-2xl font-semibold text-white mb-3">Education</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">
            B.Tech CSE (2022)
          </p>

          <h2 className="text-2xl font-semibold text-white mb-3">Job Role</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">
            React Developer
          </p>

          <h2 className="text-2xl font-semibold text-white mb-3">Languages</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">Hindi, English</p>

          <h2 className="text-2xl font-semibold text-white mb-3">Interests</h2>
          <p className="text-lg text-gray-400 mb-6 font-bold">
            Travelling, Sports (Basketball)
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
