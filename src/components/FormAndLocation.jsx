import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";

const FormAndLocation = ({ handleSubmit, city, country, getLocation }) => {
  const [enteredCity, setEnteredCity] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(enteredCity);
  };

  return (
    <div className="flex justify-between items-center w-full flex-col lg:flex-row z-10 relative p-8">
      <form onSubmit={submitForm} className="flex flex-col lg:flex-row gap-4 ">
        <input
          type="text"
          onChange={(e) => setEnteredCity(e.target.value)}
          name="city"
          value={enteredCity}
          placeholder="Enter a city"
          className="text-2xl md:text-3xl lg:text-4xl focus:outline-none rounded-xl py-4 px-3  bg-white text-black capitalize transition duration-300 hover:shadow-2xl hover:-translate-y-1 focus:translate-y-0 focus:scale-x-105 hover:shadow-white/50 placeholder:text-black/60 focus:bg-black focus:text-white focus:placeholder:text-white"
        />
        <button
          type="submit  "
          className="bg-gradient-to-br mx-6 py-3 px-4 lg:self-center  shadow-md  rounded-2xl text-white glass-morph hover:text-black hover:bg-white  hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl active:scale-90"
        >
          Confirm
        </button>
      </form>

      <div className="flex flex-col text-white my-4 gap-3 items-center">
        <ImLocation2 className="h-10 w-10 lg:ml-auto bg-white text-yellow-500 rounded-full lg:rounded-none lg:bg-transparent lg:text-white" />
        <div className="font-bold text-xl bg-gray-400  px-4 py-2 rounded-lg">
          {city}, <span>{country}</span>
        </div>
        <button
          className="bg-black/70  px-3 py-2 mt-2 text-white"
          onClick={getLocation}
        >
          Get your own Location
        </button>
      </div>
    </div>
  );
};

export default FormAndLocation;
