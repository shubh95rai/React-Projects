import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [value, SetValue] = useState("");

  function handleGenerate() {
    if (input) {
      SetValue(input);
      setInput("");
    } else {
      SetValue("");
    }
  }

  return (
    <main className="flex flex-col gap-10 items-center">
      <section>
        <input
          type="text"
          placeholder="Enter value"
          spellCheck="false"
          className="bg-white px-5 py-2.5 rounded-s outline-none focus:ring-1 ring-slate-700 ring-inset"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className=" py-2.5 px-5 bg-slate-700 text-white rounded-e"
          onClick={handleGenerate}>
          Generate
        </button>
      </section>
      {value && <QRCode value={value} className="rounded" />}
    </main>
  );
}

export default App;
