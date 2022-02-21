import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
});

/* /3/movie/popular?api_key=9561f159ab183a0ab18d48771e8798c8" */
