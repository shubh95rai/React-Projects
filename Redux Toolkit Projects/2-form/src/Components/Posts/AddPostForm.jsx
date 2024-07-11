import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../../app/postSlice";

function AddPostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium">Add new post</h1>
        <div>
          <label htmlFor="title">Title :</label>
          <br />
          <input
            type="text"
            id="title"
            className="w-full text-neutral-900 p-2"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content :</label>
          <br />
          <textarea
            id="content"
            rows="3"
            className="w-full text-neutral-900 p-2"
            value={content}
            onChange={onContentChange}></textarea>
        </div>
        <button
          type="button"
          className="bg-neutral-600 p-2 font-medium "
          onClick={onSavePost}>
          Save post
        </button>
        <hr />
      </div>
    </section>
  );
}

export default AddPostForm;
