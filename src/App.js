import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Details from "./components/Details";
import Movies from "./components/Movies";

const INITIAL_URL = "http://www.omdbapi.com/?s=man&apikey=63c247fd";

function App() {
  const [movies, setMovies] = useState([]);
  const [errorMess, setErrorMess] = useState({});
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //after mounting run the fetch onces to get initial data.
  const getInitialData = () => {
    fetch(INITIAL_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(err => setErrorMess(err));
  };
  useEffect(getInitialData, []);

  const searchHandle = searchValue => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=63c247fd`)
      .then(res => res.json())
      .then(data => {
        console.log("data response", data.Response);
        if (data.Response === "True") {
          const newMoview = data.Search;

          setMovies(newMoview);
          setLoading(false);
          setErrorMess({});
        } else {
          setErrorMess(data);
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
  };

  const showDetails = id => {
    console.log("hello");

    fetch(`http://www.omdbapi.com/?i=${id}&apikey=63c247fd`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setFeatured(data.Error);
          setLoading(false);
        } else {
          setErrorMess(data.Error);
          setLoading(false);
        }
      })
      .catch(err => setErrorMess(err));
  };

  return (
    <>
      <Header title="OMDB" />
      <Search searchClicked={searchHandle} />
      {errorMess.Error === "Movie not found!" ? (
        <div style={{ fontSize: "2rem", textAlign: "center", color: "red" }}>
          {errorMess.Error}
        </div>
      ) : loading ? (
        <div
          style={{ fontSize: "2rem", textAlign: "center", color: "#00478f" }}
        >
          Loading...
        </div>
      ) : (
        <div>
          <div className="movies">
            <Movies movies={movies} clicked={showDetails} />
          </div>
          <Details
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
          />
        </div>
      )}
    </>
  );
}

export default App;
