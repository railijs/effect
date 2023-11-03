import { useEffect, useState } from "react";

function Comment() {
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getComment() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const data = await response.json();
      setComment(data);
      setLoading(false);
    }

    getComment();
  }, []);

  return <>{loading ? <p>loading comment..</p> : <Comment />}</>;
}

export default Comment;
