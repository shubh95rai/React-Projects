import { useState } from "react";

function Tour({ id, name, info, image, price, removeTours }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="w-[500px] bg-white rounded overflow-hidden my-10 shadow-md">
      <img src={image} alt="" className="h-[334px] w-[500px] object-cover" />
      <div className="p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{name}</p>
          <p className="bg-sky-100 rounded py-1 px-2 text-sky-500 font-bold">
            ${price}
          </p>
        </div>
        <p className="text-neutral-500 text-sm">
          {readMore ? `${info} ` : `${info.substring(0, 180)}... `}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
            className="text-sky-500"
          >
            {!readMore ? "Read More" : " See Less"}
          </button>
        </p>

        <button
          id={id}
          className="text-red-500 border border-red-500 rounded py-1 "
          onClick={(e) => {
            removeTours(e.target.id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
