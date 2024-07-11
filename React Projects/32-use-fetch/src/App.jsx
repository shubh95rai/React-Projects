import useFetch from "./Hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) {
    return (
      <main>
        <span className="loading loading-dots loading-lg"></span>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1 className="text-lg italic">{error}</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-10 text-center">
      {data.map((product) => {
        return (
          <article key={product.id}>
            <h1 className="text-lg font-medium mb-2">{product.title}</h1>
            <p className="text-slate-600 text-sm">{product.description}</p>
          </article>
        );
      })}
    </main>
  );
}

export default App;
