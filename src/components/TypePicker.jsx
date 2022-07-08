import React from "react";

const TypePicker = ({ activeMode, setMode }) => {
  const handleClick = (e) => {
    setMode(e.target.name);
  };

  return (
    <div className="flex ">
      <button
        className={`text-xl px-4  py-3 text-white border-b-4 border-cyan-500   ${
          activeMode === "7d" && "bg-black/40 text-white"
        }`}
        name="7d"
        onClick={handleClick}
      >
        7d Forecast
      </button>
      <button
        className={`text-xl px-4  py-3 text-white border-b-4 border-yellow-500   hover transition duration-500 font ${
          activeMode === "3h" && "bg-black/40 text-white"
        }`}
        name="3h"
        onClick={handleClick}
      >
        3h Forecast
      </button>
    </div>
  );
};

export default TypePicker;
