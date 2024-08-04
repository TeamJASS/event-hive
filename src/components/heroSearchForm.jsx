import React from "react";
import { Menu } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const HeroSearchForm = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <form className="flex items-center w-full justify-between px-10 gap-20">
      <div className="flex flex-col w-full">
        <label className="text-white mb-2">Looking for</label>
        <Menu as="div" className="relative">
          <Menu.Button className="bg-gray-200 text-gray-700 p-2 rounded-md w-full text-left">
            Choose event type
          </Menu.Button>
          <Menu.Items className="absolute mt-2 w-full bg-white rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full px-4 py-2 text-left ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  Event Type 1
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full px-4 py-2 text-left ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  Event Type 2
                </button>
              )}
            </Menu.Item>
            {/* Add more event types as needed */}
          </Menu.Items>
        </Menu>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-white mb-2">Location</label>
        <Menu as="div" className="relative">
          <Menu.Button className="bg-gray-200 text-gray-700 p-2 rounded-md w-full text-left">
            Choose location
          </Menu.Button>
          <Menu.Items className="absolute mt-2 w-full bg-white rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full px-4 py-2 text-left ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  Location 1
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full px-4 py-2 text-left ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  Location 2
                </button>
              )}
            </Menu.Item>
            {/* Add more locations as needed */}
          </Menu.Items>
        </Menu>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-white mb-2">When</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Choose date and time"
          className="bg-gray-200 text-gray-700 p-2 rounded-md w-full"
          showTimeSelect
          dateFormat="Pp"
        />
      </div>

      <button className="bg-purple-600 text-white p-4 rounded-md flex items-center justify-center">
        <MagnifyingGlassIcon className="size-10" />
      </button>
    </form>
  );
};

export default HeroSearchForm;
