import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
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

export const loader = async ({ params }) => {
  const id = params.eventId; //path in events root

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch event details." }, { status: 500 });
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, //in EventItem useSubmit, once submitted, the method will used there will be used in this method. instead of hard coding it
  });

  if (!response.ok) {
    throw json({ message: "Could not delete this event." }, { status: 500 });
  }

  return redirect("/events");
};
