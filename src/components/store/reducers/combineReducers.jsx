import { addFavorite } from "./reducers";
import getMovieList from "./movies";
import { combineReducers } from "redux";

export default combineReducers({
  movieData: getMovieList,
  favorite: addFavorite,
});
