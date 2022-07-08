import { useEffect, useState } from "react";
import { fetchWeather, formatData } from "./api/openWeather";
import backgroundImage from "./assets/images/bgWallpaper.jpg";

import FormAndLocation from "./components/FormAndLocation";
import CurrentWeather from "./components/CurrentWeather";
import TypePicker from "./components/TypePicker";
import ImageToRender from "./components/ImageToRender";
import OtherTimes from "./components/OtherTimes";
import { default as ErrorComponent } from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("3h"); //Can be 3h or 7d
  const [data, setData] = useState({
    items: [],
    baseWeatherId: "",
    city: "",
    country: "",
    population: "",
    sunrise: "",
    sunset: "",
  });
  const [respData, setRespData] = useState();

  useEffect(() => {
    const getWeatherInNewYork = async () => {
      try {
        const data = await fetchWeather("forecast", {
          q: "new york",
        });
        setRespData(data);
        setData(formatData(data, "7d"));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };
    getWeatherInNewYork();
  }, []);

  useEffect(() => {
    setData(formatData(respData, mode));
  }, [mode, respData]);

  const handleSubmit = async (city) => {
    setLoading(true);
    try {
      const data = await fetchWeather("forecast", {
        q: city.trim().toLowerCase(),
      });

      if (data?.response?.status === 404) {
        throw new Error("The requested city does not exist");
      }
      setRespData(data);
      setData(formatData(data, "7d"));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const getLocationData = async () => {
    // eslint-disable-next-line
    const position = window.navigator.geolocation.getCurrentPosition(
      async (data) => {
        const long = data.coords.longitude;
        const lat = data.coords.latitude;

        if (lat && long) {
          try {
            setLoading(true);
            const data = await fetchWeather("forecast", {
              lat,
              lon: long,
            });

            if (data?.response?.status === 404) {
              throw new Error("The requested city does not exist");
            }
            setRespData(data);
            setData(formatData(data, mode));
            setLoading(false);
          } catch (err) {
            setError(err);
          }
        }
      }
    );
    return;
  };

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
      <div
        className={`absolute z-30 h-[85vh]  -translate-x-1/2 bg-gradient-to-br from-slate-50/10 to-white/10 -translate-y-1/2 left-1/2 top-1/2  shadow-xl rounded-xl rounded-b-none lg:w-[80%] flex flex-col `}
      >
        <div className={`h-[70%] relative  "}`}>
          <div className="h-full w-full z-0 absolute overflow-hidden flex flex-col justify-between">
            <ImageToRender id={data?.baseWeatherId} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-black/20 "></div>
          </div>

          <FormAndLocation
            handleSubmit={handleSubmit}
            country={data?.country}
            city={data?.city}
            getLocation={getLocationData}
          />
          <div className="absolute z-10 bottom-0">
            <TypePicker activeMode={mode} setMode={setMode} />
          </div>
        </div>

        {!loading ? (
          <div className="h-[30%] overflow-auto glass-morph-card rounded-b-xl ">
            <div
              className={`flex flex-col lg:flex-row  lg:justify-between h-full px-0 overflow-y-scroll w-full scrollbar-track-black transition duration-300 scrollbar-thin lg:scrollbar-none   ${
                mode === "3h"
                  ? "scrollbar-thumb-yellow-400"
                  : "scrollbar-thumb-cyan-400"
              } `}
            >
              {data?.items.length > 0 && (
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
        ) : error ? (
          <ErrorComponent message={error} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
