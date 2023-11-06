import { useEffect, useState } from "react";

function Post(props) {
  return (
    <>
      <p>userId: {props.userId}</p>
      <p>id: {props.id}</p>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
    </>
  );
}

export default Post;
