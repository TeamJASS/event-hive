/* eslint-disable no-unused-vars */
import React from "react";
import EventCard from "../../../components/EventCard";
import { upComingEvents } from "../../../lib/data-placeholder";
import { Link } from "react-router-dom";

const OtherEvents = () => {
  return (
    <div className="container flex flex-col gap-8 mx-auto my-20">
      <div className="flex justify-between items-center align-middle">
        <h1 className="text-2xl font-bold">Other events you may like</h1>
      </div>{" "}
      <div className="grid grid-cols-3 gap-10">
        {upComingEvents.map((event, index) => {
          return <EventCard key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default OtherEvents;
