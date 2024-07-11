import { useEffect, useState } from "react";

let url = "https://dummyjson.com/products?limit=100";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("false");
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollWidth, setScrollWidth] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage("Something went wrong!");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  window.addEventListener("scroll", () => {
    let width =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    setScrollWidth(width);
  });

  if (loading) {
    return (
      <main>
        <span className="loading loading-spinner text-neutral w-10"></span>
      </main>
    );
  }

  if (errorMessage) {
    return <main className="italic text-xl">{errorMessage}</main>;
  }
  return (
    <main>
      <div className="bg-slate-300 w-full fixed top-0 left-0">
        <h1 className="text-4xl font-bold bg-slate-400 py-2 text-center">
          Scroll Indicator
        </h1>
        <div
          className="bg-slate-700 h-5"
          style={{ width: `${scrollWidth}%` }}></div>
      </div>
      <article className="flex flex-col gap-5 items-center pt-20 pb-10">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="capitalize bg-slate-400 text-slate-700 font-bold px-5 py-2.5 rounded">
              {item.title}
            </div>
          );
        })}
      </article>
    </main>
  );
}

export default App;
