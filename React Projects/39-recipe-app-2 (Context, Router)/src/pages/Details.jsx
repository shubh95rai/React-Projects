import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";

function Details() {
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavList,
    favList,
    loading,
    setLoading,
  } = useGlobalContext();

  const { id } = useParams();

  async function getRecipeDetails() {
    setLoading(true);
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
    );

    const data = await response.json();

    setRecipeDetails(data.data.recipe);
    setLoading(false);
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);

  //   console.log(recipeDetails);

  if (loading) {
    return (
      <section className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </section>
    );
  }

  return (
    <section className="flex flex-wrap gap-10 justify-center">
      <div className="w-80 p-5 bg-neutral-900 flex flex-col gap-5 items-center">
        <img
          src={recipeDetails.image_url}
          alt=""
          className="h-40  object-cover w-full"
        />
        <div className="text-center">
          <h1 className="capitalize text-lg mb-2">{recipeDetails.title}</h1>
          <p className="text-sm text-center text-neutral-500">
            Ingredients :
            {recipeDetails?.ingredients?.map((item, index) => {
              return (
                <span key={index} className="capitalize">
                  {index ? ", " : " "}
                  {item.description}
                </span>
              );
            })}
          </p>
        </div>
        <button
          type="button"
          className="bg-neutral-400 text-neutral-800 px-5 py-2 w-full text-center"
          onClick={() => {
            handleAddToFavList(recipeDetails);
          }}>
          {favList.findIndex((item) => {
            return item.id === recipeDetails.id;
          }) !== -1
            ? "Remove from favourites"
            : "Add to favourites"}
        </button>
      </div>
    </section>
  );
}

export default Details;
