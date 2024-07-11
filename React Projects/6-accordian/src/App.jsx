import Questions from "./Questions";

function App() {
  return (
    <main>
      <section className="bg-white w-[1000px] flex p-10 gap-16 rounded">
        <h1 className="text-3xl font-medium w-96">
          Questions and Answers about login
        </h1>
        <Questions />
      </section>
    </main>
  );
}

export default App;
