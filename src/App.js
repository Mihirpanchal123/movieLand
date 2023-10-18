import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=46cf41cf";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    // searchMovies("my hero");
    return () => searchMovies("my hero");
  }, []);
  return (
    <div className="app">
      <h1> MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          alt="search"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6I0ZEN0UxNDsiPgo8cGF0aCBkPSJNIDIxIDMgQyAxMS42MDE1NjMgMyA0IDEwLjYwMTU2MyA0IDIwIEMgNCAyOS4zOTg0MzggMTEuNjAxNTYzIDM3IDIxIDM3IEMgMjQuMzU1NDY5IDM3IDI3LjQ2MDkzOCAzNi4wMTU2MjUgMzAuMDkzNzUgMzQuMzQzNzUgTCA0Mi4zNzUgNDYuNjI1IEwgNDYuNjI1IDQyLjM3NSBMIDM0LjUgMzAuMjgxMjUgQyAzNi42Nzk2ODggMjcuNDIxODc1IDM4IDIzLjg3ODkwNiAzOCAyMCBDIDM4IDEwLjYwMTU2MyAzMC4zOTg0MzggMyAyMSAzIFogTSAyMSA3IEMgMjguMTk5MjE5IDcgMzQgMTIuODAwNzgxIDM0IDIwIEMgMzQgMjcuMTk5MjE5IDI4LjE5OTIxOSAzMyAyMSAzMyBDIDEzLjgwMDc4MSAzMyA4IDI3LjE5OTIxOSA4IDIwIEMgOCAxMi44MDA3ODEgMTMuODAwNzgxIDcgMjEgNyBaIj48L3BhdGg+Cjwvc3ZnPg=="
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
