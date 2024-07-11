import { useState } from "react";

function Comment({ comment }) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState(comment.children);

  function handleSubmit() {
    if (inputValue) {
      const newComment = { body: inputValue, children: [] };
      setComments([...comments, newComment]);
      setInputValue("");
      setShowInput(false);
    }
  }
  return (
    <div className="flex flex-col items-start gap-4 rounde border-s border-neutral-500 px-4">
      <div className="flex flex-col gap-2">
        <p>{comment.body}</p>

        <button
          type="button"
          className="rounded-full bg-neutral-700 px-4 py-1 text-sm"
          onClick={() => {
            setShowInput(!showInput);
          }}
        >
          Reply
        </button>
      </div>
      {showInput && (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className=" rounded bg-white px-5 py-2 text-neutral-900"
            placeholder="What's yout thoughts..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full bg-neutral-700 px-4 py-1 text-sm"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="rounded-full bg-neutral-700 px-4 py-1 text-sm"
              onClick={() => {
                setShowInput(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {comments.length > 0 && (
        <div className=" flex w-full flex-col gap-2">
          {comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Comment;
