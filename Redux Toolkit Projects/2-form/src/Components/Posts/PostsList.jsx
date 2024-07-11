import { useSelector } from "react-redux";

function PostsList() {
  const posts = useSelector((state) => {
    return state.posts;
  });

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id} className="border p-5">
        <h2 className="text-2xl font-medium mb-1">{post.title}</h2>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-medium">Posts</h1>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
