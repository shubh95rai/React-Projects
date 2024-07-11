import { AiOutlineCloseSquare } from "react-icons/ai";

function Modal({ modal }) {
  const { showModal, setShowModal, content } = modal;
  return (
    <article
      className={`${showModal && "!opacity-100 !visible !scale-100"} bg-slate-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-96 min-h-56 flex justify-center items-center p-5 text-center text-white opacity-0 invisible scale-0 transition-all`}>
      <h1 className=" text-2xl">{`${content ? content : "Modal Content"}`}</h1>
      <AiOutlineCloseSquare
        className="fixed  text-3xl right-1 top-1"
        onClick={() => {
          setShowModal(false);
        }}
      />
    </article>
  );
}

export default Modal;
