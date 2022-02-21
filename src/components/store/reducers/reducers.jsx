const INITIAL_VALUE = {
  favoriteMovies: [],
};

const addFavorite = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favoriteMovies: action.payload,
      };
      break;
    default:
      return state;
  }
};

export { addFavorite };
