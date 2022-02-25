import { axiosInstance } from "../../network/axiosInstance";

export const getMovies = () => (dispatch) => {
  axiosInstance
    .get("/3/movie/popular?api_key=9561f159ab183a0ab18d48771e8798c8")
    .then((res) => {
      console.log(res.data.results);
      dispatch({
        type: "GET_MOIVE_LIST",
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};
