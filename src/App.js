import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

const API_KEY = process.env.REACT_APP_API_KEY;

const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const getMovies = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchMovie) {
      getMovies(SEARCHAPI + searchMovie);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <a href="/" className="app-logo">
          <MovieFilterIcon /> Movie Mania
        </a>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="app-headerSearch"
            autoComplete="off"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            placeholder="Search Any Movie"
          />
        </form>
      </div>
      <div className="app-container">
        {movies?.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
