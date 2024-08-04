/* eslint-disable react/prop-types */
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const EventTile = (props) => {
  return (
    <div
      className="relative p-10 pb-16 px-20 bg-cover bg-center bg-no-repeat rounded-md"
      style={{ backgroundImage: `url(${props.event.image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
      <div className="relative mx-auto">
        <button className="align-middle items-center text-white font-light text-lg p-2 bg-[#7848f4] mb-20 rounded-md flex">
          <ChevronLeftIcon className="w-5 h-5 mr-2" />
          <p>back</p>
        </button>
        <div className="flex gap-10 justify-between w-full">
          <div className="event-details flex flex-col gap-6 w-2/3 text-white">
            <h1 className="text-6xl w-[70%] font-semibold">
              {props.event.name}
            </h1>
            <h4 className="text-3xl font-semibold">{props.event.location}</h4>
            <p className="text-sm w-[80%]">{props.event.description}</p>
            <div className="flex gap-2 items-center">
              <MapPinIcon className="w-5 h-5" />
              <p className="text-sm">View map</p>
            </div>
          </div>
          <div className="card w-1/3">
            <div className="card bg-white rounded-lg p-5 flex flex-col gap-4 w-[90%]">
              <h5 className="text-lg font-bold">Date & time</h5>
              <p className="text-gray-700 text-sm">
                {props.event.date}, <span>{props.event.time}</span>
              </p>
              <Link className="text-sm text-[#7848f4]" to="/">
                Add to calendar
              </Link>
              <button className="bg-[#7848f4] text-white text-sm p-2 rounded-md hover:bg-[#7848f4]">
                Book now
              </button>
              <button className="bg-gray-400 text-white text-sm p-2 rounded-md hover:bg-[#7848f4]">
                Program promoter
              </button>
              <Link className="text-sm text-center text-gray-700" to="/">
                No Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
