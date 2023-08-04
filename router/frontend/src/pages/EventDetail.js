import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");
  const eventDetailData = data.event;

  return (
    <>
      <EventItem event={eventDetailData} />
    </>
  );
};

export default EventDetail;

export const loader = async ({ req, params }) => {
  const id = params.eventId; //path in events root

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch event details." }, { status: 500 });
  } else {
    return response;
  }
};
