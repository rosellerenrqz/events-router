import React from "react";
import { useParams, Link } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  return (
    <>
      <div>EventDetail</div>
      <p>Event Id: {params.eventId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default EventDetail;
