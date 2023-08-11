import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { getAuthToken } from "../util/auth";

const EventDetail = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  // const eventDetailData = data.event;

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEventId) => <EventItem event={loadedEventId} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetail;

//for defering event item
const loadEventId = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch event details." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

//for defering event list
const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // return response;
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = async ({ params }) => {
  const id = params.eventId; //path in events root

  //defering event item and list
  return defer({
    event: await loadEventId(id), //load this first
    events: loadEvents(), //loaded once the event item page is loaded.
  });
};

export const action = async ({ params, request }) => {
  const token = getAuthToken(); //getting token from util auth js
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, //in EventItem useSubmit, once submitted, the method will used there will be used in this method. instead of hard coding it
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete this event." }, { status: 500 });
  }

  return redirect("/events");
};
