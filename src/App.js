import { useEffect, useState } from "react";
import {
  calculateDayDifference,
  fetchWeather,
  formatData,
} from "./api/openWeather";
import backgroundImage from "./assets/images/bgWallpaper.jpg";
import { dailyForeCast } from "./api/exampleData";

import FormAndLocation from "./components/FormAndLocation";
import CurrentWeather from "./components/CurrentWeather";
import TypePicker from "./components/TypePicker";
import ImageToRender from "./components/ImageToRender";
import OtherTimes from "./components/OtherTimes";

function App() {
  const [error, setError] = useState("");
  const [mode, setMode] = useState("3h"); //Can be 3h or 7d
  const [data, setData] = useState({});

  calculateDayDifference(dailyForeCast.list[0].dt, dailyForeCast.list[32].dt);

  useEffect(() => {
    const getWeatherData = async () => {};
    //  fetchWeather("forecast",{q:dhaka}) eibhabe call korte hobe
    setData(formatData(dailyForeCast, mode));
  }, [mode]);

  console.log(data);

  const handleSubmit = (city) => {};

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <div className="w-full h-full z-0 ">
        <img
          src={backgroundImage}
          className="w-full h-full object-cover object-center blur-md scale-110"
          alt="backgroundImage"
        />
      </div>

      <div className="overlay h-full w-full absolute inset-0  bg-black opacity-40 "></div>
      <div className="absolute z-30 h-[85vh]  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  shadow-xl rounded-xl rounded-b-none lg:w-[80%] flex flex-col">
        <div className="h-[70%] relative ">
          <div className="h-full w-full z-0 absolute overflow-hidden flex flex-col justify-between">
            <ImageToRender id={data.baseWeatherId} />
          </div>
          <FormAndLocation
            handleSubmit={handleSubmit}
            country={data.country}
            city={data.city}
          />
          <div className="absolute z-10 bottom-0">
            <TypePicker activeMode={mode} setMode={setMode} />
          </div>
        </div>
        <div className="h-[30%] overflow-auto glass-morph-card rounded-b-xl ">
          <div className="flex flex-col lg:flex-row  lg:justify-between gap-x-4 h-full px-0">
            {data.items && (
              <>
                <CurrentWeather
                  weatherData={data.items && data.items[0]}
                  mode={mode}
                />
                <OtherTimes
                  weatherData={data.items.slice(1, data.items.length)}
                  mode={mode}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
