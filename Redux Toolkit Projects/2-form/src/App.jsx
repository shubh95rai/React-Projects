import AddPostForm from "./Components/Posts/AddPostForm";
import PostsList from "./Components/Posts/PostsList";

function App() {
  return (
    <main className="flex flex-col gap-10">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
