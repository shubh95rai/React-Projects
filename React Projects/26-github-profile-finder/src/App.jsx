import { useState, useEffect } from "react";
import Profile from "./Profile";

function App() {
  const [inputValue, setInputValue] = useState("sangammukherjee");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(data);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`,
      );
      const data = await response.json();

      if (data) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-10 items-center ">
      <section>
        <input
          type="text"
          className="bg-white px-5 py-2 rounded-s outline-none ring-inset focus:ring-1 ring-slate-700"
          placeholder="Enter username"
          spellCheck="false"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="button"
          className="bg-slate-700 text-white py-2 px-5 rounded-e"
          onClick={() => {
            if (inputValue !== "") {
              fetchData();
              setInputValue("");
            }
          }}>
          Search
        </button>
      </section>
      <Profile props={{ data, loading, errorMessage }} />
    </main>
  );
}

export default App;
