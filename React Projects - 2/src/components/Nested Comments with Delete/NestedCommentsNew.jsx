import { useState } from "react";
import Comment from "./Com";

function NestedCommentsNew() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  function handleNewComment(body) {
    return {
      id: new Date().getTime(),
      body: body,
      children: [],
    };
  }
  function handleDeleteHelper(copyComments, id) {
    for (let i = 0; i < copyComments.length; i++) {
      const comment = copyComments[i];
      if (comment.id === id) {
        copyComments.splice(i, 1);
      }
    }
    for (let i = 0; i < copyComments.length; i++) {
      const comment = copyComments[i];
      handleDeleteHelper(comment.children, id);
    }
  }

  function handleDelete(id) {
    const copyComments = [...comments];

    handleDeleteHelper(copyComments, id);
    setComments(copyComments);
  }

  function hadnleReplyHelper(copyComments, parentId, body) {
    for (let i = 0; i < copyComments.length; i++) {
      const comment = copyComments[i];
      if (comment.id === parentId) {
        comment.children.push(handleNewComment(body));
      }
    }

    for (let i = 0; i < copyComments.length; i++) {
      const comment = copyComments[i];
      hadnleReplyHelper(comment.children, parentId, body);
    }
  }

  function handleReply(parentId, body) {
    const copyComments = [...comments];

    hadnleReplyHelper(copyComments, parentId, body);

    setComments(copyComments);
  }
  return (
    <main className="flex flex-col gap-5 p-5">
      <div className="flex flex-col items-start gap-2 text-black">
        <input
          type="text"
          className="bg-zinc-200 p-2"
          placeholder="Type..."
          autoFocus
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="button"
          className=" bg-zinc-200 px-2 py-1 text-sm"
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

      {comments.length > 0 && (
        <div className="flex flex-col gap-5">
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                handleReply={handleReply}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}

export default NestedCommentsNew;
