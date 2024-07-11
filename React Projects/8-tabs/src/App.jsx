import { FaAnglesRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [value, setValue] = useState(0);

  const fetchedData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  //   console.log(list[value].company);
  const { company, dates, duties, title } = list[value];

  return (
    <div className="flex flex-col gap-20 items-center">
      <header className="flex flex-col items-center gap-2 ">
        <h1 className="text-4xl font-bold">Experience</h1>
        <div className="h-1 bg-teal-500 w-20 rounded-full"></div>
      </header>

      <section className="flex gap-10">
        <aside className="min-w-52 flex flex-col text-center uppercase font-medium gap-2 ">
          {list.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setValue(index);
                }}
                className={`p-2 button tracking-widest  ${index === value && "activeBtn"} `}
              >
                {item.company}
              </button>
            );
          })}
        </aside>

        <main className="flex flex-col gap-6 ">
          <section className="flex flex-col gap-2 items-start">
            <h1 className="text-3xl font-medium">{title}</h1>
            <p className="bg-slate-300 py-1 px-2 rounded font-bold text-slate-500 uppercase text-sm tracking-widest">
              {company}
            </p>
            <p className="text-slate-500 font-medium tracking-widest">
              {dates}
            </p>
          </section>
          <ul className="flex flex-col gap-4">
            {duties.map((duty, index) => {
              return (
                <li className="flex items-center gap-8" key={index}>
                  <div>
                    <FaAnglesRight className="text-teal-600" />
                  </div>
                  <p>{duty}</p>
                </li>
              );
            })}
          </ul>
        </main>
      </section>

      <footer>
        <button
          type="button"
          className="bg-teal-500 py-1 px-10 rounded text-white uppercase font-medium text-sm tracking-widest shadow-lg"
        >
          More Info
        </button>
      </footer>
    </div>
  );
}

export default App;
