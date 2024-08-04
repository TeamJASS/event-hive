/* eslint-disable no-unused-vars */
import React from "react";
import EventCard from "../../../components/EventCard";
import { upComingEvents } from "../../../lib/data-placeholder";
import { Link } from "react-router-dom";

const Upcoming = () => {
  return (
    <div className="container flex flex-col gap-8 mx-auto mt-20">
      <div className="flex justify-between items-center align-middle">
        <h1 className="text-4xl font-bold">
          Upcoming <span className="text-[#7848f4]">Events</span>
        </h1>
      </div>{" "}
      <div className="grid grid-cols-3 gap-10">
        {upComingEvents.map((event, index) => {
          return <EventCard key={index} event={event} />;
        })}
      </div>
      <div className="flex justify-center align-middle items-center">
        <Link
          to={`/upcoming-events`}
          className="py-3 px-5 text-white bg-primary mt-4 rounded-md"
        >
          Load more
        </Link>
      </div>
    </div>
  );
};

export default Upcoming;
