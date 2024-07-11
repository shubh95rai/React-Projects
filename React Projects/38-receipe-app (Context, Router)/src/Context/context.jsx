import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);

  function handleSearch(e) {
    setSearchParam(e.target.value);
  }

  function handleAddToFavourites(currentItem) {
    let copyFav = [...favouriteList];
    const index = copyFav.findIndex((item) => {
      return item.id === currentItem.id;
    });
    if (index === -1) {
      copyFav.push(currentItem);
    } else {
      copyFav.splice(index,1);
    }

    setFavouriteList(copyFav);
    console.log(favouriteList);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );

      if (!response.ok) {
        throw new Error("Error occured!");
      }

      const data = await response.json();
      setRecipeList(data.data.recipes);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        handleSearch,
        recipeList,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavourites,
        favouriteList,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalContext, GlobalState, useGlobalContext };
