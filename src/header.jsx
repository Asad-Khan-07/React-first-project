import React, { useContext } from "react";
import { themeContext } from "./mode";
import { motion } from "framer-motion";

const Header = () => {
  const { mode } = useContext(themeContext);

  return (
    <div
      className={`relative overflow-hidden ${
        mode ? "bg-[#040724]" : "bg-white"
      } min-h-[100vh] flex items-center justify-center transition duration-500 ease-in-out`}
    >
      {/* Background SVG - Right */}
      <div className="absolute right-0 top-0 opacity-30 lg:opacity-100 z-0 max-w-[70%] sm:max-w-[50%] md:max-w-[40%]">
        {/* SVG 1 */}
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* SVG content unchanged */}
        </svg>
      </div>

      {/* Background SVG - Left Bottom */}
      <div className="absolute left-0 bottom-0 opacity-30 lg:opacity-100 z-0 max-w-[70%] sm:max-w-[50%] md:max-w-[40%]">
        {/* SVG 2 */}
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* SVG content unchanged */}
        </svg>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, translateY: "40px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center flex flex-col items-center justify-center mb:px-4 sm:px-8 md:px-12"
      >
        <h1
          className={`font-bold mb:text-[22px] sm:text-[32px] md:text-[42px] lg:text-[50px] ${
            mode ? "text-amber-100" : "text-gray-900"
          } leading-tight transition duration-500 ease-in-out`}
        >
          Free and Open-Source Next.js Template for Startup & SaaS
        </h1>

        <p
          className={`mt-5 mb:text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] ${
            mode ? "text-amber-100" : "text-gray-600"
          } max-w-[90%] sm:max-w-[80%] md:max-w-[60%] leading-relaxed mx-auto transition duration-500 ease-in-out`}
        >
          Startup is a free Next.js template for startups and SaaS business
          websites. It comes with all the essential pages, components, and
          sections you need to launch a complete business website — built with
          Next 13.x and Tailwind CSS.
        </p>

        <button
          className={`mt-8 mb:text-sm sm:text-base px-5 py-3 rounded-xl font-medium shadow-md ${
            mode ? "bg-amber-100 text-gray-700" : "bg-gray-700 text-amber-100"
          } hover:-translate-y-1 transform transition duration-300 ease-in-out`}
        >
          ⭐ Star on GitHub
        </button>
      </motion.div>
    </div>
  );
};

export default Header;
