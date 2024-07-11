import { useEffect, useRef, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Accordian({ item, toggle, setShowInfo, showInfo }) {
  const refElement = useRef();

  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    setMaxHeight(
      showInfo === item.id ? `${refElement.current.scrollHeight}px` : "0px"
    );
  }, [showInfo]);

  return (
    <article
      className="border-2 border-neutral-200 shadow-md p-5 rounded"
      key={item.id}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">{item.title}</h1>
        <div
          className=" cursor-pointer"
          onClick={() => {
            toggle(item.id);
          }}
        >
          {showInfo !== item.id ? (
            <FaPlus className="bg-neutral-300 text-fuchsia-700 rounded-full  text-3xl p-2" />
          ) : (
            <FaMinus className="bg-neutral-300 text-fuchsia-700 rounded-full  text-3xl p-2" />
          )}
        </div>
      </div>

      <div
        className="max-h-0 overflow-hidden transition-all duration-300"
        ref={refElement}
        style={{
          maxHeight: maxHeight,
        }}
      >
        <p className="text-neutral-600 pt-4">{item.info}</p>
      </div>
    </article>
  );
}

export default Accordian;
