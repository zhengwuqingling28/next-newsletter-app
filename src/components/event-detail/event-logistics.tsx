import Image from "next/image";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

interface IProps {
  event: IEvent;
}

const EventLogistics = ({ event }: IProps) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = event.location.replace(", ", "\n");

  return (
    <>
      <section className={classes.logistics}>
        <div className={classes.image}>
          <Image
            src={`/${event.image}`}
            alt={event.title}
            width={400}
            height={400}
          />
        </div>
        <ul className={classes.list}>
          <LogisticsItem icon={DateIcon}>
            <time>{humanReadableDate}</time>
          </LogisticsItem>
          <LogisticsItem icon={AddressIcon}>
            <address>{addressText}</address>
          </LogisticsItem>
        </ul>
      </section>
    </>
  );
};

export default EventLogistics;
