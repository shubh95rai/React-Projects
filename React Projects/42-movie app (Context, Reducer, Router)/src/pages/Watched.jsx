import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";
import WatchedCard from "../components/WatchedCard ";

function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <main>
      <section className="grid grid-cols-2 place-items-center gap-10 p-5 md:grid-cols-3 lg:grid-cols-4">
        {watched.length > 0 &&
          watched.map((movie, index) => {
            return <WatchedCard movie={movie} key={index} />;
          })}
      </section>
    </main>
  );
}

export default Watched;
