import data from "./data";
import { useState } from "react";
import List from "./List";

function App() {
  const [person, setPerson] = useState(data);
  return (
    <main className="flex justify-center items-center h-screen">
      <section className=" bg-white p-8 w-[450px] rounded shadow-lg flex flex-col gap-5 transition-all">
        <h1 className="text-2xl ">{person.length} birthdays today</h1>
        <List person={person} />
        <button
          className="bg-pink-400 text-white w-full rounded py-2"
          onClick={() => {
            setPerson([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
