import React from "react";
import PRODUCTS from "../data";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

function Products() {
  return (
    <main>
      <section className="flex items-center px-32 py-10 bg-neutral-200 text-neutral-800">
        <h1 className="text-3xl font-semibold uppercase">Products</h1>
      </section>
      <section className="grid grid-cols-3 gap-5 px-32 bg-white py-10">
        {PRODUCTS.map((product, index) => {
          return (
            <article
              key={product.id}
              className="text-black bg-neutral-200 shadow-md">
              <img
                src={product.image}
                alt=""
                className="w-full h-72 object-cover"
              />
              <div className="text-center flex flex-col gap-2 p-5  pb justify-between h-60">
                <h1 className="text-xl font-medium">{product.name}</h1>
                <p>{product.details}</p>
                <div className="flex justify-between items-center">
                  <span>
                    Price: <b>{product.price}</b>
                  </span>
                  <NavLink
                    to={`/products/${index}`}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
                    Details <FaChevronRight />
                  </NavLink>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Products;
