import EventItem from "./event-item";
import classes from "./event-list.module.css";

interface IProps {
  events: IEvent[];
}

const EventList = ({ events }: IProps) => {
  return (
    <ul className={classes.list}>
      {events.map((event: IEvent) => (
        <div key={event.id}>
          <EventItem event={event} />
        </div>
      ))}
    </ul>
  );
};

export default EventList;
