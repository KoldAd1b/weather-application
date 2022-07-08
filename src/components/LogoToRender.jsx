import React from "react";
import { BsFillCloudRainFill, BsSnow } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { AiFillCloud } from "react-icons/ai";

const LogoToRender = ({ id, iconStyles }) => {
  if (id >= 200 && id < 600) {
    return <BsFillCloudRainFill className={iconStyles} />;
  }
  if (id >= 700 && id < 800) {
    return <BsSnow className={iconStyles} />;
  }
  if (id >= 800) {
    return <MdWbSunny className={iconStyles} />;
  }
  if (id > 800) {
    return <AiFillCloud className={iconStyles} />;
  }
};

export default LogoToRender;
