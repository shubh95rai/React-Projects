import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/context";

function Home() {
  const { recipeList } = useGlobalContext();
  console.log(recipeList);

  return (
    <section className="flex flex-wrap gap-10 justify-center mt-10">
      {recipeList &&
        recipeList.map((item, index) => {
          return (
            <article
              key={index}
              className="w-80 p-5 bg-white rounded flex flex-col gap-5 items-center">
              <img
                src={item.image_url}
                alt={item.title}
                className="rounded h-40 block w-full object-cover"
              />
              <h1 className="font-bold capitalize">{item.title}</h1>
              <Link
                to={`/recipe-item/${item.id}`}
                className="bg-secondary text-primary px-5 py-2 rounded w-full text-center">
                Recipe details
              </Link>
            </article>
          );
        })}
    </section>
  );
}

export default Home;
