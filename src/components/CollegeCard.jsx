/* eslint-disable react/prop-types */

import { StarIcon } from "@heroicons/react/16/solid";

const CollegeCard = ({ college }) => {
  return (
    <div className="flex flex-col pb-10 rounded-2xl shadow-md border gap-4 relative bg-white">
      <div className="relative">
        <img
          src={college.image}
          alt={college.name}
          className="rounded-md bg-cover  w-full h-[331px]"
        />
        <div className="absolute flex w-full justify-between p-10 bottom-0">
          <div className="bg-white rounded-3xl flex justify-center items-center gap-2 px-4 py-2">
            <StarIcon className="size-4 text-[#EBD402]" /> <p>4.8</p>
          </div>
          <div className="bg-black rounded-3xl flex gap-2 py-2 px-4 text-white">
            <p>EXCLUSIVE</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-5">
        <h4 className="font-bold text-2xl py-5">{college.name}</h4>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-black">{college.location}</p>
          <button className="bg-[#F2F2F2] p-2 rounded-full">more</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
