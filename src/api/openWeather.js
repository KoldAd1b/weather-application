import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (type, params) => {
  const url = new URL(BASE_URL + "/" + type);
  url.search = new URLSearchParams({
    ...params,
    appid: API_KEY,
    units: "metric",
  });

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (err) {
    return err;
  }
};

export const calculateDayDifference = (date1, date2) => {
  const start = new Date(date1 * 1000);
  const end = new Date(date2 * 1000);

  const diffTime = end - start;
  const diffDays = (diffTime / (3600 * 24 * 1000)).toFixed(2);

  return diffDays;
};

export const formatData = (data, type) => {
  if (!data?.list) return;
  const list = data.list;

  let returnedList = [list[0]];
  if (type === "7d") {
    // eslint-disable-next-line
    const fmt_list = list.forEach((item, index) => {
      const comp = Number(calculateDayDifference(list[0].dt, item.dt));

      if (Number.isInteger(comp) && comp > 0) {
        returnedList.push(item);
      } else if (index === list.length - 1) {
        returnedList.push(item);
      }
    });
  } else if (type === "3h") {
    returnedList = list.slice(0, 5);
  }

  return {
    items: returnedList.map((item) => {
      return {
        temp: item.main.temp,
        weatherId: item.weather[0].id,
        windSpeed: item.wind.speed,
        currentDate: item.dt,
        humidity: item.main.humidity,
      };
    }),
    baseWeatherId: list[0].weather[0].id,
    city: data.city.name,
    country: data.city.country,
    population: data.city.population,
    sunrise: data.city.sunrise,
    sunset: data.city.sunset,
  };
};
