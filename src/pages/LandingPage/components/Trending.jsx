/* eslint-disable no-unused-vars */
import React from "react";
import EventCard from "../../../components/EventCard";
import { colleges } from "../../../lib/data-placeholder";
import { Link } from "react-router-dom";
import CollegeCard from "../../../components/CollegeCard";

const Trending = () => {
  return (
    <div className="container flex flex-col gap-8 mx-auto mt-20">
      <div className="flex justify-between items-center align-middle">
        <h1 className="text-4xl font-bold">
          Trending <span className="text-[#7848f4]">Colleges</span>
        </h1>
      </div>{" "}
      <div className="grid grid-cols-3 gap-10">
        {colleges.map((college, index) => {
          return <CollegeCard key={index} college={college} />;
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

export default Trending;
