import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    const value = e.target.textContent;
    setInput(input + value);
  }

  function handleClear() {
    setInput("");
    setResult("");
  }

  function handleDelete() {
    setInput(input.slice(0, -1));
  }

  function handleEquals() {
    try {
      setResult(eval(input) + "");
    } catch (error) {
      setResult(error);
    }

    // setInput(eval(input) + "");
  }

  // console.log(input);

  return (
    <main className="bg-indigo-900 p-5 rounded-xl flex flex-col gap-6 w-[400px] text-white shadow-2xl">
      <section>
        <input
          type="text"
          className="w-full bg-transparent text-4xl text-right px-5"
          value={input}
          disabled
        />
        <input
          type="text"
          name=""
          id=""
          className="rounded py-2.5 px-5 w-full text-6xl text-right bg-transparent"
          disabled
          value={result}
        />
      </section>
      <section className="grid grid-cols-4 text-3xl gap-3">
        <button
          className="h-20 w-20 bg-orange-500 rounded-full"
          onClick={handleClear}>
          C
        </button>
        <button
          className="h-20 w-20 bg-orange-500 rounded-full"
          onClick={handleClick}>
          %
        </button>
        <button
          className="h-20 w-20 bg-orange-500 rounded-full"
          onClick={handleClick}>
          /
        </button>
        <button
          className="h-20 w-20 bg-orange-500 rounded-full"
          onClick={handleClick}>
          *
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          1
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          2
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          3
        </button>
        <button
          className="h-20 w-20 bg-orange-500 rounded-full"
          onClick={handleClick}>
          +
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          4
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          5
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          6
        </button>
        <button
          className="h-20 w-20 bg-orange-500 rounded-full"
          onClick={handleClick}>
          -
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          7
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          8
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          9
        </button>
        <button
          className="row-span-2 bg-pink-600 rounded-full"
          onClick={handleEquals}>
          =
        </button>
        <button
          className="h-20 w-20 flex justify-center items-center bg-white rounded-full bg-opacity-10"
          onClick={handleDelete}>
          del
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          0
        </button>
        <button className="h-20 w-20" onClick={handleClick}>
          .
        </button>
      </section>
    </main>
  );
}

export default App;
