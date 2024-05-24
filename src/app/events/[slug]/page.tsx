import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";

const Comment = async () => {
  const res = await fetch(`http://localhost:3000/api/comments`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  const comments = data.data;
  return (
    <>
      <Comments comments={comments} />
    </>
  );
};

const Event = async ({ slug }: { slug: string }) => {
  const res = await fetch(`http://localhost:3000/api/events/${slug}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  const event = data.data;
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent description={event.description} />
    </>
  );
};

const EventDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <>
      <Event slug={slug} />
      <Comment />
    </>
  );
};
export default EventDetailPage;
