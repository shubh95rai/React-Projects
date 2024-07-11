import { useEffect, useState } from "react";
import useDebounceValue from "./useDebounceValue";

function Debounce() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState("");

  const debounceValue = useDebounceValue(inputValue);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceValue}`,
      );
      const data = await response.json();

      if (data) {
        setRecipe(data.recipes);
        setLoading(false);
      }
    } catch (error) {
      setError("Something went wrong!");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (debounceValue) {
      fetchData();
    } else {
      setRecipe([]);
    }
  }, [debounceValue]);
  console.log(recipe);
  return (
    <main className="flex h-screen justify-center bg-neutral-800 text-neutral-300">
      <section className="flex flex-col items-center gap-5 py-20">
        <input
          type="text"
          className="rounded border bg-transparent px-5 py-2  outline-none"
          autoFocus
          spellCheck="false"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {loading ? (
          <span className="loading loading-dots loading-md"></span>
        ) : recipe.length > 0 ? (
          <div className="flex flex-col items-center">
            {recipe.map((recipe, index) => {
              return <div key={index}>{recipe.name}</div>;
            })}
          </div>
        ) : !debounceValue ? null : (
          <div>No Recipes found ! Please try with different search</div>
        )}
      </section>
    </main>
  );
}

export default Debounce;
