import useFetch from "./Hooks/useFetch";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { useRef } from "react";

function App() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
  );

  // console.log(data);

  const objRef = useRef();

  function scrollToBottom() {
    console.dir(objRef.current);
    window.scrollTo({ top: document.body.scrollHeight });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }

  function scrollToElement() {
    window.scrollTo({ top: objRef.current.offsetTop });
  }

  if (loading) {
    return (
      <main>
        <span className="loading loading-dots loading-lg"></span>
      </main>
    );
  }

  if (error) {
    return <main className="italic">{error}</main>;
  }
  return (
    <main className="flex flex-col gap-10  items-center">
      <h1 className="text-4xl font-bold">Scroll to top and bottom</h1>
      <FaArrowCircleDown className="text-4xl" onClick={scrollToBottom} />
      <button
        className="py-2 px-5 rounded bg-slate-700 text-slate-200 capitalize"
        onClick={scrollToElement}>
        particular element
      </button>
      <ul className="flex flex-col gap-5 items-center">
        {data.map((product, index) => {
          return <li key={index}>{product.title}</li>;
        })}
      </ul>
      <ul className="flex flex-col gap-10 w-full text-center ">
        <li className="py-40 bg-white w-full">1</li>
        <li className="py-40 bg-white w-full" ref={objRef}>
          2
        </li>
        <li className="py-40 bg-white w-full">3</li>
        <li className="py-40 bg-white w-full">4</li>
        <li className="py-40 bg-white w-full">5</li>
      </ul>
      <FaArrowCircleUp className="text-4xl" onClick={scrollToTop} />
    </main>
  );
}

export default App;
