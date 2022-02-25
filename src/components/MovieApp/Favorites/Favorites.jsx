import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosInstance } from "../../network/axiosInstance";
import { addToFavorite } from "../../store/actions/addToFavorite";
import MovieCard from "../MovieCard/MovieCard";

function Favorites() {
  const FavArr = useSelector((state) => state.favorite.favoriteMovies);
  const dispatch = useDispatch();
  console.log(FavArr);
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

  useEffect(() => {
    axiosInstance
      .get("/3/movie/popular?api_key=9561f159ab183a0ab18d48771e8798c8")
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const favMovies = movies.filter((movie) => {
    return FavArr.includes(movie.id);
  });
  return (
    <div className="page-container">
      <div className="row mx-0">
        <div className="container col-md-8 col-lg-10 custom-movies">
          <div className="d-flex flex-wrap justify-content-center ">
            {favMovies.map((movie) => {
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
        </div>
      </div>
    </div>
  );
}

export default Favorites;
