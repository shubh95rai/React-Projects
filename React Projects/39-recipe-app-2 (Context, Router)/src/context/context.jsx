import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

function useGlobalContext() {
  return useContext(GlobalContext);
}

function GlobalState({ children }) {
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [favList, setFavList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true)

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`,
    );

    const data = await response.json();

    setRecipeList(data.data.recipes);

    setLoading(false)
  }

  function handleAddToFavList(currentItem) {
    const copyFavList = [...favList];
    const index = copyFavList.findIndex((item) => {
      return item.id === currentItem.id;
    });

    if (index === -1) {
      copyFavList.push(currentItem);
    } else {
      copyFavList.splice(index, 1);
    }

    setFavList(copyFavList);
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        recipeList,
        setRecipeList,
        handleSearch,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        favList,
        setFavList,
        handleAddToFavList,
        loading,
        setLoading,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalState, useGlobalContext };
