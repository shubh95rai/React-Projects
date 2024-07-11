import React from "react";
import PRODUCTS from "../data";
import { NavLink, useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const { name, id, image, details, price } = PRODUCTS[productId];
  return (
    <main>
      <section className="flex items-center px-32 py-10 bg-neutral-200 text-neutral-800">
        <h1 className="text-3xl font-semibold uppercase">{name}</h1>
      </section>
      <section className="  px-32 bg-white py-20">
        <article className="text-black flex bg-neutral-200 shadow-md">
          <img src={image} alt="" className="w-[408px] h-72 object-cover" />
          <div className=" flex flex-col gap-5 justify-center px-10">
            <h1 className="text-xl font-medium">{name}</h1>
            <span>
              Price: <b>{price}</b>
            </span>
            <p>{details}</p>
            <div className="flex gap-5">
              <NavLink
                to={"/products"}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
                Back
              </NavLink>
              
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Product;
