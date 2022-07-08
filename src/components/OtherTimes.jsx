import React from "react";
import LogoToRender from "./LogoToRender";

const OtherTimes = ({ weatherData, mode }) => {
  return (
    <div
      className={`grid grid-cols-3 gap-x-2  p-4 lg:p-0  xl:flex-[2]  ${
        mode === "7d" ? "lg:grid-cols-5" : "lg:grid-cols-4"
      }`}
    >
      {weatherData.map((item, i) => {
        const { temp, weatherId: id, currentDate } = item;
        return (
          <div
            className={`flex flex-col items-center text-white lg:gap-y-4 gap-y-2 lg:border-r-2 lg:px-4 xl:px-8  border-white/40  ${
              i === 0 && "lg:border-l-2"
            }`}
          >
            <span
              className={`rounded-2xl px-6  lg:bg-black/50 lg:font-normal font-bold  py-2 text-white text-center mt-8  ${
                mode === "3h" && "lg:w-24 lg:text-xs  h-16 lg:h-auto "
              }`}
            >
              {mode === "7d"
                ? new Date(currentDate * 1000).toDateString().split(" ")[0]
                : new Date(currentDate * 1000).toLocaleTimeString()}
            </span>
            <LogoToRender
              id={id}
              iconStyles="h-16 w-16 text-white  xl:h-20 xl:w-20"
            />
            <span className="text-2xl  ">{temp}°</span>
          </div>
        );
      })}
    </div>
  );
};

export default OtherTimes;
