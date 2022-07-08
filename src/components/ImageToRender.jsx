import React from "react";
import clear from "../assets/images/clear.jpg";
import rain from "../assets/images/rain.jpg";
import sunny from "../assets/images/sunny.jpg";
import thunderstorm from "../assets/images/thunderstorm.jpg";
import snow from "../assets/images/snow.jpg";

const ImageToRender = ({ id }) => {
  const imageStyles =
    "w-full h-full object-cover object-center  rounded-t-xl scale-110";

  if (id >= 200 && id < 300) {
    return <img src={thunderstorm} alt="img" className={imageStyles} />;
  }
  if (id >= 300 && id < 600) {
    return <img src={rain} alt="img" className={imageStyles} />;
  }
  if (id >= 700 && id < 800) {
    return <img src={snow} alt="img" className={imageStyles} />;
  }
  if (id === 800) {
    return <img src={clear} alt="img" className={imageStyles} />;
  }
  if (id > 800) {
    return <img src={sunny} alt="img" className={imageStyles} />;
  }

  return <img src={rain} alt="img" className={imageStyles} />;
};

export default ImageToRender;
