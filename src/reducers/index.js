//  combines the reducers i.e WeatherReducer and return rootReducer
import { combineReducers } from "redux";
import WeatherReducer from "./weather/weather_reducer";

import BooksReducer from "./books/books_reducer";
import ActiveBook from "./books/active_book_reducer";

const rootReducer = combineReducers({
  weather: WeatherReducer,
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
