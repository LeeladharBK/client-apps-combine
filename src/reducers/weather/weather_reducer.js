// reducer_weather reducer is responsible for getting the weather from the action creator and
// passing it to the contianer
import { FETCH_WEATHER } from "../../actions/weather_fetch";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      // same as return state.concat[action.payload.data];
  }
  // console.log("Action Required", action);
  return state;
}
