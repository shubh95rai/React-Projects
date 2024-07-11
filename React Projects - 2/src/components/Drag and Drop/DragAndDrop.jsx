import { useState } from "react";

function DragAndDrop() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "todo" },
    { id: 3, title: "Task 3", status: "todo" },
    { id: 4, title: "Task 4", status: "todo" },
    { id: 5, title: "Task 5", status: "todo" },
  ]);

  function onDragStart(e, id) {
    e.dataTransfer.setData("taskId", id);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDrop(e, status) {
    const id = e.dataTransfer.getData("taskId");

    const updatedTodos = todos.filter((todo) => {
      if (todo.id == id) {
        todo.status = status;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function renderTasks(status) {
    const renderingTodos = todos.filter((todo) => {
      return todo.status === status;
    });

    return renderingTodos.map((todo) => {
      return (
        <div
          key={todo.id}
          className="rounded bg-neutral-700 p-2"
          draggable
          onDragStart={(e) => {
            onDragStart(e, todo.id);
          }}
        >
          {todo.title}
        </div>
      );
    });
  }

  return (
    <main className="h-screen bg-neutral-900 font-inter text-neutral-300">
      <section className="grid grid-cols-3 gap-2 p-2">
        <h1 className="text-center">Todo</h1>
        <h1 className="text-center">In Progress</h1>
        <h1 className="text-center">Done</h1>
        <div
          className="flex flex-col gap-2 rounded border-2 border-dashed border-neutral-700 p-2"
          onDrop={(e) => {
            onDrop(e, "todo");
          }}
          onDragOver={(e) => {
            onDragOver(e);
          }}
        >
          {renderTasks("todo")}
        </div>
        <div
          className="flex flex-col gap-2 rounded border-2 border-dashed border-neutral-700 p-2"
          onDrop={(e) => {
            onDrop(e, "in-progress");
          }}
          onDragOver={(e) => {
            onDragOver(e);
          }}
        >
          {renderTasks("in-progress")}
        </div>
        <div
          className="flex flex-col gap-2 rounded border-2 border-dashed border-neutral-700 p-2"
          onDrop={(e) => {
            onDrop(e, "done");
          }}
          onDragOver={(e) => {
            onDragOver(e);
          }}
        >
          {renderTasks("done")}
        </div>
      </section>
    </main>
  );
}

export default DragAndDrop;
