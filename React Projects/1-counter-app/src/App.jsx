import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(counter * 0);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-8xl mb-5">{counter}</h1>
        <div className="flex gap-5 ">
          <p className="border p-2 rounded- cursor-pointer" onClick={decrease}>
            DECREASE
          </p>
          <p className="border p-2 rounded- cursor-pointer" onClick={reset}>
            RESET
          </p>
          <p className="border p-2 rounded- cursor-pointer " onClick={increase}>
            INCREASE
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
