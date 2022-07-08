import React from "react";
import LogoToRender from "./LogoToRender";

const OtherTimes = ({ weatherData, mode }) => {
  return (
    <div
      className={`grid grid-cols-3 p-4 lg:p-0   ${
        mode === "7d" ? "lg:grid-cols-5" : "lg:grid-cols-4"
      }`}
    >
      {weatherData.map((item, i) => {
        const { temp, weatherId: id, windSpeed, currentDate, humidity } = item;
        return (
          <div
            className={`flex flex-col items-center text-white lg:gap-y-4 gap-y-2 lg:border-r-2 lg:px-4 xl:px-8  border-black/40  ${
              i === 0 && "lg:border-l-2"
            }`}
          >
            <span
              className={`rounded-2xl bg-black/50 px-6 py-2 text-center mt-8 ${
                mode === "3h" && "lg:w-24 lg:text-xs "
              }`}
            >
              {mode === "7d"
                ? new Date(currentDate * 1000).toDateString().split(" ")[0]
                : new Date(currentDate * 1000).toLocaleTimeString()}
            </span>
            <LogoToRender
              id={id}
              iconStyles="h-8 w-8 text-white lg:h-16 lg:w-16"
            />
            <span className="text-xl xl:text-2xl">{temp}°</span>
          </div>
        );
      })}
    </div>
  );
};

export default OtherTimes;
