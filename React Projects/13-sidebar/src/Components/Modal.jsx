import { IoIosCloseCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../context";

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <section
      className="bg-black bg-opacity-50 z-10 fixed top-0 left-0 w-screen h-screen "
    >
      <div className=" absolute shadow-lg top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
        <h1 className="bg-white items-center rounded-lg flex justify-center w-96 font-semibold text-3xl h-52">
          Modal Content
        </h1>
        <IoClose
          className="absolute right-2 top-2 text-3xl cursor-pointer rounded transition hover:bg-slate-300 "
          onClick={closeModal}
        />
      </div>
    </section>
  );
}

export default Modal;
