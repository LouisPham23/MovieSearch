import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <>
      {movies.map(item => (
        <Movie
          title={item.Title}
          year={item.Year}
          poster={item.Poster}
          key={item.imdbID}
        />
      ))}
    </>
  );
};

export default Movies;
