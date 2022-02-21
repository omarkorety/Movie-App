import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addFavorite } from "./reducers/reducers";

const store = createStore(addFavorite, composeWithDevTools());

export default store;
