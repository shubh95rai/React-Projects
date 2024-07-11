import data from "./data";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Questions() {
  const [showInfo, setShowInfo] = useState(null);

  const toggle = (index) => {
    if (showInfo === index) {
      return setShowInfo(null);
    }
    setShowInfo(index);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {data.map((item) => {
        return (
          <article
            className="border-2 border-neutral-200 shadow-md p-5 rounded"
            key={item.id}
          >
            <div
              className="flex items-center justify-between"
              onClick={() => {
                toggle(item.id);
              }}
            >
              <h1 className="text-xl font-medium">{item.title}</h1>
              {showInfo !== item.id ? (
                <FaPlus className="bg-neutral-300 text-fuchsia-700 rounded-full  text-3xl p-2" />
              ) : (
                <FaMinus className="bg-neutral-300 text-fuchsia-700 rounded-full  text-3xl p-2" />
              )}
            </div>
            {showInfo === item.id && (
              <div className="mt-5 ">
                <p className="text-neutral-600 ">{item.info}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default Questions;
