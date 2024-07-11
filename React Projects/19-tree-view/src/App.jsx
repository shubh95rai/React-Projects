import MenuList from "./Components/MenuList";
import data from "./data";

function App() {
  return (
    <div className="bg-white w-52 p-5 h-screen">
      <MenuList data={data} />
    </div>
  );
}

export default App;
