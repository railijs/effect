import ToDo from "./ToDo.js";
import userEvent, { useEffect, useState } from "react";
import Comment from "./Comment.js";
import Post from "./Post.js";
import PostList from "./PostList.js";

function App() {
  const [toDo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToDo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const data = await response.json();
      setTodo(data);
      setLoading(false);
    }

    getToDo();
  }, []);

  return (
    <>
      {loading ? <p>loading..</p> : <ToDo {...toDo} />}
      <Comment />
      <Post />
      <PostList />
    </>
  );
}

export default App;
