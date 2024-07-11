import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Home() {
  const { recipeList, loading } = useGlobalContext();
  // console.log(recipeList);

  if (loading) {
    return (
      <section className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </section>
    );
  }

  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {recipeList.map((item, index) => {
        return (
          <div
            key={index}
            className="w-80 p-5 bg-neutral-900 flex flex-col gap-5 items-center">
            <img
              src={item.image_url}
              alt=""
              className="h-40  object-cover w-full"
            />
            <h1 className="capitalize text-lg">
              {item.title.length > 30
                ? `${item.title.substring(0, 25)}...`
                : item.title}
            </h1>
            <NavLink
              to={`/recipe-item/${item.id}`}
              className="bg-neutral-400 text-neutral-800 px-5 py-2 w-full text-center">
              Recipe details
            </NavLink>
          </div>
        );
      })}
    </section>
  );
}

export default Home;
