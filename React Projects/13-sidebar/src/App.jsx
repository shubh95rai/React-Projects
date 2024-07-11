import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Modal from "./Components/Modal";
import { useGlobalContext } from "./context";

function App() {
  const { isSidebarOpen, isModalOpen, openModal, openSidebar } =
    useGlobalContext();
  return (
    <>
      <Home></Home>
      <Sidebar />
      {isModalOpen && <Modal />}
    </>
  );
}
export default App;
