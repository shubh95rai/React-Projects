import data from "./data";
import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaCircleChevronUp } from "react-icons/fa6";

function App() {
  const [items, setItems] = useState(data);
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleClick(index) {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }

  function handleMultiSelection(index) {
    let array = [...multiSelection];
    if (array.indexOf(index) === -1) {
      array.push(index);
    } else {
      array = array.filter((item) => {
        return item !== index;
      });
    }
    setMultiSelection(array);
  }

  return (
    <main className="bg-white w-[600px] rounded p-10 flex flex-col gap-5 shadow-lg items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          className="mr-2 w-5 h-5 accent-amber-600"
          onClick={() => {
            setEnableMultiSelection(!enableMultiSelection);
            setSelected(null);
            setMultiSelection([]);
          }}
        />
        <label htmlFor="checkbox" className="text-xl">
          Multi Selection
        </label>
      </div>
      {items.map((item, index) => {
        const { question, answer } = item;
        return (
          <article key={index} className="bg-neutral-200 p-5 rounded">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={
                enableMultiSelection
                  ? () => {
                      handleMultiSelection(index);
                    }
                  : () => {
                      handleClick(index);
                    }
              }>
              <h1 className="text-xl">{question}</h1>
              {enableMultiSelection ? (
                <FaCircleChevronDown
                  className={`${multiSelection.indexOf(index) !== -1 && "rotate-180"} min-w-5 text-xl transition`}
                />
              ) : (
                <FaCircleChevronDown
                  className={`${selected === index && "rotate-180"} min-w-5 text-xl transition`}
                />
              )}
            </div>

            {enableMultiSelection ? (
              <div
                className={`${multiSelection.indexOf(index) !== -1 && "max-h-28"} max-h-0 overflow-hidden transition`}>
                <p className="pt-4">{answer}</p>
              </div>
            ) : (
              <div
                className={`${selected === index && "max-h-28"} max-h-0 overflow-hidden transition`}>
                <p className="pt-4">{answer}</p>
              </div>
            )}
          </article>
        );
      })}
    </main>
  );
}

export default App;
