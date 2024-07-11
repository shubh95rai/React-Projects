import { useState } from "react";
import Comment from "./Comment";

function NestedCommentsV2() {
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

  function handleReply(parentId, reply) {
    const copyComments = [...comments];
    handleAddReply(parentId, reply, copyComments);
    setComments(copyComments);
  }

  function handleNewComment(body) {
    return {
      id: new Date().getTime(),
      body: body,
      children: [],
    };
  }

  function handleAddReply(parentId, reply, copyComments) {
    for (let i = 0; i < copyComments.length; i++) {
      let comment = copyComments[i];
      if (comment.id === parentId) {
        comment.children.push(handleNewComment(reply));
      }
    }

    for (let i = 0; i < copyComments.length; i++) {
      let comment = copyComments[i];
      handleAddReply(parentId, reply, comment.children);
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
            onClick={() => {
              if (inputValue) {
                setComments([...comments, handleNewComment(inputValue)]);
                setInputValue("");
              }
            }}
          >
            Comment
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                handleReply={handleReply}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default NestedCommentsV2;
