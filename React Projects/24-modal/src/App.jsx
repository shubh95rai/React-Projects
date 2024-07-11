import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";

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

      <article
        className={`${showModal && "!opacity-100 !visible !scale-100"} bg-slate-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-56 flex justify-center items-center text-white opacity-0 invisible scale-0 transition-all`}>
        <h1 className=" text-2xl">Modal Content</h1>
        <AiOutlineCloseSquare
          className="fixed  text-3xl right-1 top-1"
          onClick={() => {
            setShowModal(false);
          }}
        />
      </article>
    </main>
  );
}

export default App;
