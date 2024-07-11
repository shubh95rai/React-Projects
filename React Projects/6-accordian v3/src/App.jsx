import data from "./data";
import { useState } from "react";
import Accordian from "./Accordian";

function App() {
  const [selected, setSelected] = useState(null);

  function handleSelected(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <main className="flex flex-col gap-5 items-center w-[600px]">
      <h1 className="text-neutral-300 font-semibold text-3xl">Accordian</h1>
      <section className="flex flex-col gap-5">
        {data.map((item) => {
          return (
            <Accordian
              item={item}
              key={item.id}
              handleSelected={handleSelected}
              selected={selected}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
