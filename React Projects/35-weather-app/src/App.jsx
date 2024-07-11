import { useEffect } from "react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Weather from "./Components/Weather";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  function date() {
    const newDate = new Date().toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
      weekday: "long",
    });

    return newDate;
  }

  function temp() {
    return Math.round(weatherData?.main?.temp);
  }

  async function fetchData(city) {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e9fc73a96350c55e59697ba43783312&units=metric`,
        );

        if (!response.ok) {
          throw new Error("Something went wrong! Please try again.");
        }

        const data = await response.json();

        setWeatherData(data);
        setError("");
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }, 500);
  }

  useEffect(() => {
    fetchData("bhopal");
  }, []);

  function handleSearch() {
    if (search) {
      fetchData(search);
    }
  }

  function handleSubmit(e) {
    if (search && e.code === "Enter") {
      fetchData(search);
    }
  }
  console.log(weatherData);
  return (
    <main className="bg-gradient-to-b from-indigo-950 to-indigo-800 p-10 rounded-lg shadow-xl flex flex-col gap-8 h-[408px] w-[384px]">
      <section className="flex items-center justify-center gap-2">
        <input
          type="text"
          className="bg-white px-5 py-2 rounded-full outline-none"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={handleSubmit}
          placeholder="Enter a city name"
          spellCheck="false"
        />
        <button
          type="button"
          className="p-2.5 rounded-full bg-white"
          onClick={handleSearch}>
          <IoSearch className="text-xl" />
        </button>
      </section>

      <Weather props={{ search, loading, weatherData, error, date, temp }} />
    </main>
  );
}

export default App;
