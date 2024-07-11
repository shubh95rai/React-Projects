import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";
import MovieCard from "../components/MovieCard";
import WatchlistCard from "../components/WatchlistCard";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <main>
      <section className="grid grid-cols-2 place-items-center gap-10 p-5 md:grid-cols-3 lg:grid-cols-4">
        {watchlist.length > 0 &&
          watchlist.map((movie, index) => {
            return <WatchlistCard movie={movie} key={index} />;
          })}
      </section>
    </main>
  );
}

export default Watchlist;
