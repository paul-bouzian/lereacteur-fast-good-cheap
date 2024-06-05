import React, { useState } from "react";

const ButtonToggle = ({
  category,
  setCategory,
  circleColor,
  buttonBackgroundColor,
  text,
}) => {
  return (
    <div className="flex items-center justify-center gap-6 ">
      <div
        onClick={setCategory}
        className={`w-20 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-700 ${
          category ? buttonBackgroundColor : "bg-gray-500"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full shadow-md transform transition duration-700 bg-slate-300 ${
            category ? "translate-x-11 " + circleColor : "translate-x-0"
          }`}
        ></div>
      </div>
      <h1 className=" uppercase font-bold text-3xl">{text}</h1>
    </div>
  );
};

export default ButtonToggle;
