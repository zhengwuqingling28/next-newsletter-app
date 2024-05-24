"use client";

import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

interface IProps {
  comments: IComment[];
}

function Comments({ comments }: IProps) {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler} className="btn">
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
