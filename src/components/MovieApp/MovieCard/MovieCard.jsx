import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import heart from "./heart.png";
import heart2 from "./heart2.png";

function MovieCard(props) {
  const FavArr = useSelector((state) => state.favorite.favoriteMovies);
  const { id, img, title } = props;
  return (
    <div className="card movie_card">
      <Link key={id} to={`/movie-details/${id}`} className="movie-card-style">
        <img src={img} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>

        <p className="movie_info"></p>
        <div className="img-container">
          <span className="movie_info">
            {FavArr.includes(id) ? (
              <img src={heart} className="heart-icon" onClick={props.addFav.bind(this, id)} />
            ) : (
              <img src={heart2} className="heart-icon" onClick={props.addFav.bind(this, id)} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

/* <span className="movie_info">Rating: {props.vote}</span> */
