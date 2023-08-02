import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const eventsData = useLoaderData();

  return (
    <>
      <EventsList events={eventsData} />
    </>
  );
}

export default EventsPage;
