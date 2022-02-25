const INITIAL_VALUE = {
  movieList: [],
};

export default function getMovieList(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "GET_MOIVE_LIST":
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
}
