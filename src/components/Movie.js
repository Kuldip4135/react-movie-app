import React from "react";
import ImgSrc from "./movie-img.webp";
const IMGPATH = "https://image.tmdb.org/t/p/original/";

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img
        className="movie-img"
        src={poster_path ? IMGPATH + poster_path : ImgSrc}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>

      <div className="movie-overview">
        <h2>Overview : </h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
