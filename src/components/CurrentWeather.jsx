import React from "react";
import LogoToRender from "./LogoToRender";

const dateFormatter = (date, mode) => {
  const dateToFormat = new Date(date * 1000).toDateString().split(" ");

  if (mode === "3h") return new Date(date * 1000).toLocaleTimeString();

  return `${dateToFormat[0]},${dateToFormat[1]} ${dateToFormat[2]}`;
};

const CurrentWeather = ({ weatherData, mode }) => {
  const { temp, weatherId: id, windSpeed, currentDate, humidity } = weatherData;

  return (
    <>
      <div className="flex-col lg:flex-row justify-center flex-1  flex h-full lg:p-4 py-8 items-center gap-y-2 lg:gap-x-6">
        <div className="w-full flex justify-around items-center px-4 lg:flex-col lg:w-auto lg:gap-y-4">
          <div className=" text-4xl lg:text-5xl xl:text-[4em]  text-white">
            {temp}°
          </div>
          <div className="px-2 py-1 bg-black/70 rounded-lg text-center text-gray-200 text-xl">
            {dateFormatter(currentDate, mode)}
          </div>
        </div>
        <div className="flex flex-col items-center lg:gap-y-4">
          <p className="text-gray-300 lg:order-1 lg:flex-col xl:flex-row flex items-center flex-row gap-x-4  ">
            <span>{windSpeed} m/s</span>
            <span>|</span>
            <span> Humidity: {humidity}%</span>
          </p>
          <LogoToRender
            id={id}
            iconStyles={`h-20 xl:w-26 xl:h-26 w-20 text-white `}
          />
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
