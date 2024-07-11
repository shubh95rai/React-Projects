import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("theme"));
    setTheme(key);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <main className={`${theme} container trans`}>
      <h1 className="title trans">Hello World!</h1>
      <button className="button trans" onClick={handleClick}>
        Change Theme
      </button>
    </main>
  );
}

export default App;
