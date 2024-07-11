import { lazy } from "react";
import { useState } from "react";

function LazyLoading() {
  const [data, setData] = useState([]);
//   console.log(data);
  return (
    <main className="flex flex-col justify-center  gap-2 p-20 items-center text-center">
      <button
        className="rounded border px-5 py-2.5"
        onClick={() => {
          import("./data").then((module) => {
            setData(module.default);
          });
        }}
      >
        {" "}
        Load File
      </button>
      <div>
        {data.map((data, index) => {
          return <p key={index}>{data.title}</p>;
        })}
      </div>

      
    </main>
  );
}

export default LazyLoading;
