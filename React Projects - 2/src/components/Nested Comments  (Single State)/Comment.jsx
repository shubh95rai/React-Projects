import { useState } from "react";

function Comment({ comment, handleReply }) {
  const [showInput, setShowInput] = useState(false);
  const [reply, setReply] = useState("");

  return (
    <div className="rounde flex flex-col items-start gap-4 border-s border-neutral-500 px-4">
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
            value={reply}
            onChange={(e) => {
              setReply(e.target.value);
            }}
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full bg-neutral-700 px-4 py-1 text-sm"
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
              className="rounded-full bg-neutral-700 px-4 py-1 text-sm"
              onClick={() => {
                setShowInput(false);
                setReply("");

              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {comment.children.length > 0 && (
        <div className=" flex w-full flex-col gap-2">
          {comment.children.map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                handleReply={handleReply}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comment;
