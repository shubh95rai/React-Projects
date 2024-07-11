import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    setUsers(data.users);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function filter(inputValue) {
    const res = users.filter((user) => {
      return user.firstName.toLowerCase().includes(inputValue.toLowerCase());
    });

    setValue(res);
  }
  return (
    <main className="flex flex-col gap-5">
      <input
        type="text"
        className="px-5 py-2 outline-none focus:ring-1 ring-slate-700 ring-inset bg-white rounded"
        placeholder="Enter value"
        spellCheck="false"
        onChange={(e) => {
          if (e.target.value) {
            filter(e.target.value);
          } else {
            setValue([]);
          }
        }}
      />

      <ul>
        {value.map((item, index) => {
          return <li key={index}>{item.firstName}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
