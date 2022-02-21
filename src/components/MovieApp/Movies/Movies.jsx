import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../network/axiosInstance";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../store/actions/addToFavorite";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

function Movies() {
  const FavArr = useSelector((state) => state.favoriteMovies);
  const dispatch = useDispatch();

  const addFaveMovie = (id) => {
    if (FavArr.length !== 0 && FavArr.includes(id)) {
      const index = FavArr.indexOf(id);
      if (index >= 0) {
        FavArr.splice(index, 1);
      }
      dispatch(addToFavorite([...FavArr]));
    } else {
      dispatch(addToFavorite([id, ...FavArr]));
    }
  };
  const [movies, setMovies] = useState([]);
  const [numPages, setNumPages] = useState();
  const [paginate, setPaginate] = useState(1);

  const searchChange = (event) => {
    if (!event.target.value.length) {
      axiosInstance
        .get("/3/movie/popular?api_key=9561f159ab183a0ab18d48771e8798c8")
        .then((res) => setMovies(res.data.results))
        .catch((err) => {
          console.log(err);
        });
    }
    if (event.target.value.length)
      axiosInstance
        .get(
          `/3/search/movie?api_key=9561f159ab183a0ab18d48771e8798c8&query={${event.target.value}}`
        )
        .then(({ data }) => setMovies(data.results))
        .catch((err) => {
          console.log(err);
        });
  };

  const nextPage = () => {};

  const prevPage = () => {};

  const debouncedChangeHandler = useCallback(debounce(searchChange, 500), []);

  const paginationChange = (event) => {};

  useEffect(() => {
    axiosInstance
      .get("/3/movie/popular?api_key=9561f159ab183a0ab18d48771e8798c8")
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Search Filter

  return (
    <div className="page-container">
      <Search onChange={debouncedChangeHandler} />
      <div className="row mx-0">
        <div className="container col-md-8 col-lg-10 custom-movies">
          <div className="d-flex flex-wrap justify-content-center ">
            {movies.map((movie) => {
              return (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                  vote={movie.vote_average}
                  addFav={addFaveMovie}
                />
              );
            })}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Pagination next={nextPage} prev={prevPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
