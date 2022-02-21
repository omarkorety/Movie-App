import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../network/axiosInstance";

function MovieDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/3/movie/${params.id}?api_key=9561f159ab183a0ab18d48771e8798c8`)
      .then((res) => setDetails(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(details);
  return (
    <div className="page-container">
      <div className="container card-detail ">
        <div className="row ">
          <div className="card shadow px-0">
            <div className="row g-0">
              <div className="col-lg-4 col-md-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  className="img-fluid rounded-start"
                  alt={details.title}
                />
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h3 className="card-title">{details.title}</h3>
                  <p className="card-text">
                    <span className="movieDetail">Movie Overview : </span>
                    {details.overview}
                  </p>
                  <p className="card-text">
                    <span className="movieDetail">Release Date : </span>
                    {details.release_date}
                  </p>
                  <p className="card-text">
                    <span className="movieDetail">Status : </span>
                    {details.status}
                  </p>
                  {/*  <p className="card-text">
                  <span className="movieDetail">Genres : </span>
                  {details.genres.map((genre) => {
                    return { genre };
                  })}
                </p> */}
                  <p className="card-text">{details.overview}</p>
                  <a href={details.homepage} className="card-text">
                    {details.homepage}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
