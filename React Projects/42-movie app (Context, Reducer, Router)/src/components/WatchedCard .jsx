import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";

function WatchedCard({ movie }) {
  const { removeFromWatched, moveToWatchlist } = useContext(GlobalContext);

  function handleRemoveFromWatched() {
    removeFromWatched(movie);
  }
  function handleMoveToWatchlist() {
    moveToWatchlist(movie);
  }
  return (
    <div className="flex w-72 flex-col items-center gap-4 rounded bg-neutral-400 p-5">
      {movie.Poster === "N/A" ? (
        <div className="flex h-[300px] w-full items-center justify-center rounded bg-neutral-600 text-white">
          no image available
        </div>
      ) : (
        <img
          src={movie.Poster}
          className="h-[300px] w-full rounded object-cover"
        />
      )}
      <div className="flex flex-col items-center text-center font-medium">
        <h3 className="text-lg">
          {movie.Title.length > 20 ? (
            <abbr className="decoration-transparent" title={movie.Title}>
              {movie.Title.substring(0, 20)}...
            </abbr>
          ) : (
            movie.Title
          )}
        </h3>
        <p>{movie.Year}</p>
      </div>
      <div className="flex w-full flex-col gap-2">
        <button
          className="rounded bg-neutral-200 px-4 py-2"
          onClick={handleRemoveFromWatched}
        >
          Remove from Watched
        </button>

        <button
          className="rounded bg-neutral-200 px-4 py-2"
          onClick={handleMoveToWatchlist}
        >
          Move to Watchlist
        </button>
      </div>
    </div>
  );
}

export default WatchedCard;
