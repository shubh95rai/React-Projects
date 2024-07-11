import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex flex-col gap-5 items-center">
      <h1 className="text-4xl">Modal Project</h1>

      <button
        type="button"
        className="bg-slate-700 text-slate-200 py-2 px-5 shadow-xl hover:bg-slate-800 active:scale-95 transition-all"
        onClick={() => {
          setShowModal(true);
        }}>
        Open Modal
      </button>

      <Modal modal={{ showModal, setShowModal, content: "" }} />
    </main>
  );
}

export default App;
