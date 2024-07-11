import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { TbSquareChevronRightFilled } from "react-icons/tb";
import { TbSquareChevronLeftFilled } from "react-icons/tb";
import data from "./data";
import { useEffect, useRef, useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  const refElement = useRef();
  console.log(value);

  if (value < 0) {
    setValue(people.length - 1);
  }
  if (value > people.length - 1) {
    setValue(0);
  }

  const slider = () => {
    refElement.current.style.transform = `translateX(-${value * 100}%)`;
    console.log(value);
  };

  useEffect(() => {
    slider();
    console.log(value);

    const Timeout = setTimeout(() => {
      setValue(value + 1);
    }, 5000);

    return () => {
      clearTimeout(Timeout);
    };
  }, [value]);

  const decrement = () => {
    setValue(value - 1);
    // slider();
  };

  const increment = () => {
    setValue(value + 1);
    // slider();
  };

  return (
    <div className="flex flex-col items-center gap-10 ">
      <h1 className="text-5xl font-medium">Reviews</h1>
      <section className="flex items-center">
        <TbSquareChevronLeftFilled
          className="text-4xl  overflow-hidden"
          onClick={decrement}
        />
        <div className="w-[600px] overflow-hidden ">
          <div className="flex slider" ref={refElement}>
            {people.map((item) => {
              const { id, image, name, title, quote } = item;

              return (
                <article
                  key={id}
                  className="flex flex-col items-center gap-5 min-w-[600px] text-center"
                >
                  <img
                    className="w-[150px] h-[150px]  object-cover rounded-full border-4 border-slate-200 shadow-xl"
                    src={image}
                    alt=""
                  />
                  <div>
                    <h1 className="uppercase font-bold tracking-wider text-xl ">
                      {name}
                    </h1>
                    <p className="capitalize text-slate-500 font-medium">
                      {title}
                    </p>
                  </div>
                  <p className="text-slate-500">{quote}</p>
                </article>
              );
            })}
          </div>
        </div>

        <TbSquareChevronRightFilled className="text-4xl" onClick={increment} />
      </section>
      <FaQuoteRight className="text-6xl" />
    </div>
  );
}

export default App;
