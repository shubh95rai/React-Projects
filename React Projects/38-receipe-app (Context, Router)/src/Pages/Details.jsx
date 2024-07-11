import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/context";
import Favourites from "./Favourites";

function Details() {
  const { id } = useParams();
  //   console.log(id);
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavourites,
    favouriteList,
  } = useGlobalContext();

  async function getRecipeDetails() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
    );
    const data = await response.json();
    setRecipeDetails(data.data.recipe);
    // console.log(recipeDetails);
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <section className="flex justify-center mt-10">
      <article className=" bg-white rounded p-5 flex flex-col gap-5">
        <img src={recipeDetails.image_url} alt="" />
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{recipeDetails.title}</h1>
            <p>{recipeDetails.publisher}</p>
          </div>
          <button
            className="bg-secondary text-primary px-5 py-2 rounded"
            onClick={() => {
              handleAddToFavourites(recipeDetails);
            }}>
            {favouriteList &&
            favouriteList.length &&
            favouriteList.findIndex((item) => {
              return item.id === recipeDetails.id;
            }) !== -1
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>
      </article>
    </section>
  );
}

export default Details;
