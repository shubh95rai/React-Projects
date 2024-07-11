import useWindowResize from "./Hooks/useWindowResize";

function App() {
  const { width, height } = useWindowResize();

  return (
    <main className="flex flex-col gap-10 text-xl items-center">
      <h1>
        Width : <span className="font-bold">{width}px</span>
      </h1>
      <h1>
        Height : <span className="font-bold">{height}px</span>
      </h1>
    </main>
  );
}

export default App;
