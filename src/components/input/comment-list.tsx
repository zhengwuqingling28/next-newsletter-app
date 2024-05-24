import classes from "./comment-list.module.css";

interface IProps {
  comments: IComment[];
}

function CommentList({ comments }: IProps) {
  return (
    <ul className={classes.comments}>
      {comments.map((comment: IComment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <div>
              By <address>{comment.email}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
