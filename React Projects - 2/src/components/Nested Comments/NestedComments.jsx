import { useState } from "react";
import Comment from "./Comment";

function NestedComments() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    // {
    //   body: "comment 1",
    //   children: [],
    // },
    // {
    //   body: "comment 2",
    //   children: [],
    // },
    // {
    //   body: "comment 3",
    //   children: [],
    // },
  ]);

  function handleComment() {
    if (inputValue) {
      const newComment = { body: inputValue, children: [] };
      setComments([...comments, newComment]);
      setInputValue("");
    }
  }

  return (
    <main className="h-screen bg-neutral-900 p-6 text-neutral-300">
      <section>
        <h1 className="mb-5 text-3xl">Nested Comments</h1>
        <div className="flex flex-col items-start gap-2">
          <input
            type="text"
            className=" rounded bg-white px-5 py-2 text-neutral-900"
            placeholder="What's yout thoughts..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            type="button"
            className="rounded-full bg-neutral-700 px-4 py-1 text-sm"
            onClick={handleComment}
          >
            Comment
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default NestedComments;
