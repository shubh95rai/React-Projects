import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";
import MovieCard from "../components/MovieCard";

function Home() {
  const { movieSearchResult, loading, error } = useContext(GlobalContext);

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-81.6px)] items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }
  if (error) {
    return (
      <main className="flex min-h-[calc(100vh-81.6px)] items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }
  return (
    <main>
      <section className="grid grid-cols-2 place-items-center gap-10 p-5 md:grid-cols-3 lg:grid-cols-4">
        {movieSearchResult.length > 0 &&
          movieSearchResult.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
      </section>
    </main>
  );
}

export default Home;
