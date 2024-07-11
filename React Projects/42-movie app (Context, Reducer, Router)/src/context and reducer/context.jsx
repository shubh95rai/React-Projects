import { createContext, useEffect, useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import useDebounceValue from "../hooks/useDebouceValue";
import {
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
} from "./type";

const GlobalContext = createContext();

function GlobalState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieSearchResult, setMoviesSearchResult] = useState([]);

  const debounceValue = useDebounceValue(search, 500);

  function addToWatchlist(movie) {
    const updatedWatchlist = state.watchlist;
    updatedWatchlist.unshift(movie);

    const updatedWatched = state.watched;
    updatedWatched.some((movieItem) => {
      return movieItem.imdbID === movie.imdbID;
    });

    if (updatedWatched) {
      removeFromWatched(movie);
    }

    dispatch({
      type: ADD_TO_WATCHLIST,
      payload: updatedWatchlist,
    });
  }
  function removeFromWatchlist(movie) {
    const updatedWatchlist = state.watchlist.filter((movieItem) => {
      return movieItem.imdbID !== movie.imdbID;
    });

    dispatch({
      type: REMOVE_FROM_WATCHLIST,
      payload: updatedWatchlist,
    });
  }
  function addToWatched(movie) {
    const updatedWatched = state.watched;
    updatedWatched.unshift(movie);

    const updatedWatchlist = state.watchlist;
    updatedWatchlist.some((movieItem) => {
      return movieItem.imdbID === movie.imdbID;
    });

    if (updatedWatchlist) {
      removeFromWatchlist(movie);
    }

    dispatch({
      type: ADD_TO_WATCHED,
      payload: updatedWatched,
    });
  }
  function removeFromWatched(movie) {
    const updatedWatched = state.watched.filter((movieItem) => {
      return movieItem.imdbID !== movie.imdbID;
    });

    dispatch({
      type: REMOVE_FROM_WATCHED,
      payload: updatedWatched,
    });
  }
  function moveToWatched(movie) {
    removeFromWatchlist(movie);
    addToWatched(movie);
  }
  function moveToWatchlist(movie) {
    removeFromWatched(movie);
    addToWatchlist(movie);
  }

  console.log(movieSearchResult);

  async function fetchMovies() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=17ded6c8&s=${debounceValue}`,
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMoviesSearchResult(data.Search);
        setError("");
        setLoading(false);
      } else {
        setError("No movies found.");
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (debounceValue) {
      fetchMovies();
    }
  }, [debounceValue]);

  const value = {
    search,
    setSearch,
    loading,
    movieSearchResult,
    error,
    addToWatchlist,
    removeFromWatchlist,
    addToWatched,
    removeFromWatched,
    moveToWatchlist,
    moveToWatched,
    watchlist: state.watchlist,
    watched: state.watched,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalState, GlobalContext };
