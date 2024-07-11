import { useState } from "react";

function Com({ comment, handleReply, handleDelete }) {
  const [reply, setReply] = useState("");
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="flex flex-col items-start gap-5 border border-zinc-200 p-5 ">
      <div>
        <p>{comment.body}</p>
        <div className="flex gap-2">
          <button
            type="button"
            className=" bg-zinc-200 px-2 py-1 text-sm text-black "
            onClick={() => {
              setShowInput(!showInput);
            }}
          >
            Reply
          </button>
          <button
            type="button"
            className=" bg-zinc-200 px-2 py-1 text-sm text-black "
            onClick={() => {
              handleDelete(comment.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {showInput && (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="bg-zinc-200 p-2 text-black"
            placeholder="Type..."
            autoFocus
            value={reply}
            onChange={(e) => {
              setReply(e.target.value);
            }}
          />
          <div className="flex gap-2">
            <button
              type="button"
              className=" bg-zinc-200 px-2 py-1 text-sm text-black"
              onClick={() => {
                if (reply) {
                  handleReply(comment.id, reply);
                  setReply("");
                  setShowInput(false);
                }
              }}
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-zinc-200 px-2 py-1 text-sm text-black"
              onClick={() => {
                setShowInput(!showInput);
                setReply("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {comment.children.length > 0 && (
        <div className="flex flex-col gap-5">
          {comment.children.map((comment) => {
            return (
              <Com
                key={comment.id}
                comment={comment}
                handleReply={handleReply}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Com;
