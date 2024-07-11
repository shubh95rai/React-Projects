import { useState } from "react";
const tabs = [
  {
    label: "Tab 1",
    content: "HTML",
  },
  {
    label: "Tab 2",
    content: "CSS",
  },
  {
    label: "Tab 3",
    content: "Javascript",
  },
];

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <main>
      <section className="flex gap-5 ">
        {tabs.map((item, index) => {
          return (
            <button
              key={index}
              className={`${selected === index && "activeBtn"} py-2.5 px-5 bg-slate-700 text-slate-200 `}
              onClick={() => {
                setSelected(index);
              }}>
              {item.label}
            </button>
          );
        })}
      </section>

      <section className="text-center mt-10">
        {tabs.map((item, index) => {
          return (
            <div
              key={index}
              className={`${selected === index && "activeContent"} text-xl font-bold hidden`}>
              {item.content}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
