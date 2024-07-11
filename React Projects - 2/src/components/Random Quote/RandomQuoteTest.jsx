import RandomQuote from "./RandomQuote";
import { useEffect, useState } from "react";

function RandomQuoteTest() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch("https://api.quotable.io/random");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setQuote(data);
      setError(null);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log("ok");
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleGenerateQuote() {
    fetchData();
  }
  return (
    <main className="flex h-screen items-center justify-center bg-amber-600 bg-gradient-to-b from-amber-500 font-poppins text-neutral-800">
      <section className="flex w-[650px] flex-col items-center  gap-10 rounded-xl bg-white p-10 shadow-xl">
        <h1 className="text-3xl font-semibold">Random Quote Generator</h1>

        <RandomQuote props={{ handleGenerateQuote, loading, quote, error }} />

        <button
          className="to rounded-full bg-amber-600 bg-gradient-to-b from-amber-500 px-5 py-2.5 text-white transition-all active:scale-95"
          onClick={handleGenerateQuote}
        >
          Generate Quote
        </button>
      </section>
    </main>
  );
}

export default RandomQuoteTest;
