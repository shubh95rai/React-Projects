import { useLoaderData, useParams } from "react-router-dom";

function Contact() {
  const data = useLoaderData();
  // console.log(res);
  return (
    <section className="flex flex-col text-center items-center py-20 gap-2">
      {data.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </section>
  );
}

async function fetchData() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const data = await response.json();

  return data.products;
}

export { fetchData };

export default Contact;
