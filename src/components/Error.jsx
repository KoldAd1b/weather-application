import React from "react";

const Error = ({ message }) => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col justify-center p-4 text-center rounded-lg bg-[#ffcccb] shadow-xl">
        <div className="bg-red-600 text-lg px-3 py-2 rounded-md text-white  ">
          Oops something went wrong
        </div>
        <h3 className="font-bold text-lg">{message}</h3>
        <button
          className="mt-4 bg-blue-600 w-1/2 self-center px-3 py-2 ronded-lg text-white hover:text-blue-600 hover:bg-white trasnition duration-200"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Error;
