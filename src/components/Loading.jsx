import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <ReactLoading type={"bars"} color={"#7393B3"} height={667} width={375} />
    </div>
  );
};

export default Loading;
