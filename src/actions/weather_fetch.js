// fetchWeather ia an ActionCreator, it needs to return an action,
// an object with a type property.
import axios from "axios";
const API_KEY = "0825529156241062bb2d13ce668e43e4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

// make an API request using axios and return an request promise to reducer_weather
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log("Request", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
