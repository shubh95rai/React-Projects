import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "" });

  const editObj = useRef();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [todos]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setInputValue("");
    showAlert(true, "item deleted");
    editObj.current.focus();
  }

  function handleClearList() {
    setTodos([]);
    showAlert(true, "list cleared");
    editObj.current.focus();
  }

  function handleEditItem(index) {
    setEditIndex(index);
    setInputValue(todos[index]);
    editObj.current.focus();
  }

  function showAlert(show = false, msg = "") {
    setAlert({ show, msg });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue !== "" && editIndex === null) {
      setTodos([...todos, inputValue]);
      setInputValue("");
      showAlert(true, "item added");
      editObj.current.focus();
    } else if (editIndex !== null) {
      const newTodos = [...todos];
      newTodos[editIndex] = inputValue;
      setTodos(newTodos);
      setInputValue("");
      setEditIndex(null);
      showAlert(true, "item changed");
      editObj.current.focus();
    }
  }

  return (
    <main className="bg-white p-10 rounded-lg flex flex-col gap-5 items-center shadow-lg w-[700px] ">
      <div className="w-full h-7">
        {alert.show && (
          <p className="bg-slate-100 text-slate-600 py-1 rounded-full w-full text-center capitalize tracking-widest text-sm">
            {alert.msg}
          </p>
        )}
      </div>
      <h1 className="text-4xl font-semibold">ToDo List</h1>
      <form
        className="flex gap-2 bg-slate-200 p-2 rounded-full w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-slate-200 w-full   outline-none px-4"
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
          ref={editObj}
        />
        <button
          type="submit"
          className="py-2 px-4 rounded-full bg-slate-600 text-slate-200 hover:bg-slate-700 transition-all"
        >
          Submit
        </button>
      </form>
      <ul className="text-lg w-full px-5 flex flex-col gap-2">
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className="text-lg flex items-center justify-between"
            >
              <h1>{todo}</h1>
              <div className="flex text-2xl gap-1">
                <BiSolidEdit
                  className="hover:text-slate-700 transition-all cursor-pointer"
                  onClick={() => {
                    handleEditItem(index);
                  }}
                />
                <MdDelete
                  className="hover:text-slate-700 transition-all cursor-pointer"
                  onClick={() => {
                    handleDelete(index);
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="h-7">
        {todos.length !== 0 && (
          <button
            type="button"
            className="ring-1 ring-slate-600 px-4 py-1 rounded-full text-sm capitalize tracking-widest"
            onClick={handleClearList}
          >
            Clear List
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
