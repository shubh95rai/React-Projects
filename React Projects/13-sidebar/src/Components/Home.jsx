import { useGlobalContext } from "../context";

import { FaBars } from "react-icons/fa6";

function Home() {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <>
      <FaBars className="text-2xl hover:text-blue-600" onClick={openSidebar} />
      <button
        type="button"
        className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-white bg-blue-600 px-5 py-2.5 rounded-lg hover:bg-blue-700 font-medium"
        onClick={openModal}
      >
        Show Modal
      </button>
    </>
  );
}

export default Home;
