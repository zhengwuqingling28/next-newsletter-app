import { addComment } from "@/action/comment";
import classes from "./new-comment.module.css";

function NewComment() {
  return (
    <form className={classes.form} action={addComment}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows={5} name="comment"></textarea>
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default NewComment;
