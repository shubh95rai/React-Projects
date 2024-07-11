import text from "./data";
import { useState, useRef } from "react";

function App() {
  const [value, setValue] = useState([]);
  const [data, setData] = useState(text);

  const inputElement = useRef(0);

  const generate = () => {
    const inputValue = inputElement.current.valueAsNumber;
    let newText = [];

    if (isNaN(inputValue) || inputValue <= 0) {
      const random = Math.floor(Math.random() * text.length);
      newText = [data[random]];
      setValue(newText);
      return;
    }

    newText = data.slice(0, inputValue);
    setValue(newText);
  };

  const copy = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    console.log(e.target.textContent);
  };

  return (
    <main className="flex flex-col gap-10 items-center">
      <h1 className="text-4xl font-bold">Lorem Ipsum</h1>
      <section className="text-xl flex gap-5">
        <div>
          <label htmlFor="number">Paragraphs: </label>
          <input
            ref={inputElement}
            type="number"
            id="number"
            placeholder="0"
            className="bg-white rounded w-16 p-2 border-2 border-slate-600 outline-none"
          />
        </div>
        <button
          type="button"
          className="bg-slate-600 text-slate-200 rounded px-4"
          onClick={generate}
        >
          Generate
        </button>
      </section>
      <article className="w-[600px] text-center flex flex-col gap-10">
        {value.map((text, index) => {
          return (
            <p key={index} className="cursor-pointer" onClick={copy}>
              {text}
            </p>
          );
        })}
      </article>
    </main>
  );
}

export default App;
