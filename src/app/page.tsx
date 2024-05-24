import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";

const Events = async () => {
  const res = await fetch("http://localhost:3000/api/events", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  const events = data.data;
  return <EventList events={events} />;
};

const Home = () => {
  return (
    <>
      <NewsletterRegistration />
      <Events />
    </>
  );
};

export default Home;
