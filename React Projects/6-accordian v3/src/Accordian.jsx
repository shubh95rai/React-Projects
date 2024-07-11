import { useEffect, useRef, useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

function Accordian({ item, handleSelected, selected }) {
  const [height, setHeight] = useState("0px");

  const refElement = useRef();

  useEffect(() => {
    setHeight(
      selected === item.id ? `${refElement.current.scrollHeight}px` : "0px"
    );
  }, [selected]);

  console.log(height);

  return (
    <article className="bg-neutral-300 p-5 rounded">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          handleSelected(item.id);
        }}
      >
        <p className="text-xl font-medium">{item.title}</p>
        <FaCircleChevronDown
          className={` text-2xl transition-all duration-300 text-fuchsia-950 ${selected === item.id ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className={`text-neutral-700 overflow-hidden transition-all duration-300 ${selected === item.id ? "mt-" : ""}`}
        style={{ maxHeight: height }}
        ref={refElement}
      >
        <p className="pt-2">{item.info}</p>
      </div>
    </article>
  );
}

export default Accordian;
