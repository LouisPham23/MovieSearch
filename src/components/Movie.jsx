import React from "react";

const MOVIE_PLACEHOLDER =
  "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg";

const Movie = ({ title, year, poster, showDetails }) => {
  const moviePoster = poster === "N/A" ? MOVIE_PLACEHOLDER : poster;
  return (
    <div className="movie">
      <img src={moviePoster} alt={title} />
      <div className="details">
        <h1>{title}</h1>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default Movie;
