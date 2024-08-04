/* eslint-disable react/prop-types */

const EventCard = ({ event }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl shadow-md border gap-4 relative bg-white">
      <span className="absolute top-7 left-7 py-2 px-4 text-sm text-[#7848f4] bg-white rounded-md">
        {event.price > 0 ? event.price : "FREE"}
      </span>
      <img
        src={event.image}
        alt={event.title}
        className="rounded-md bg-cover  w- [347px] h-[300px]"
      />
      <h4 className="font-normal">{event.title}</h4>
      <p className="text-xs text-[#7848F4]">
        {event.date}, {event.time}
      </p>
      <p className="text-xs text-gray-600">
        {event.location === "online" ? (
          <>
            ONLINE EVENT - <small> Attend anywhere</small>
          </>
        ) : (
          event.lcoation
        )}
      </p>
    </div>
  );
};

export default EventCard;
