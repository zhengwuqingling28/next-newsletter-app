import classes from "./event-content.module.css";

const EventContent = ({ description }: { description: string }) => {
  return (
    <section className={classes.content}>
      <p>{description}</p>
    </section>
  );
};

export default EventContent;
