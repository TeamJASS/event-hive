import eventImage from "../../assets/images/pinkflag.png";
import locationImage from "../../assets/images/location.png";
import facebook from "../../assets/images/facebook.png";
import whatsapp from "../../assets/images/whatsapp.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/x.png";
import EventTile from "../../components/EventTile";

const event = {
  name: "Dream world wide in jakatra",
  description:
    "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
  location: "IIIT Sonepat",
  date: "Saturday, March 18 2023",
  time: "9:30PM",
  image: eventImage,
  categories: [
    {
      name: "Indonesia event",
    },
    {
      name: "Indonesia event",
    },
    {
      name: "seminar event",
    },
    {
      name: "UI",
    },
    // {
    //   name: "Jaskaran Event",
    // },
  ],
};

const Event = () => {
  return (
    <div className="container mx-auto">
      <EventTile event={event} />

      <div className="grid grid-cols-5 px-20 justify-between gap-16 py-10">
        <div className="col-span-3 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Description</h4>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Hours</h4>
            <p className="text-gray-700">
              Weekdays hour: <span className="text-blue-700">7PM - 10PM</span>
            </p>
            <p className="text-gray-700">
              Sunday hour: <span className="text-blue-700">7PM - 10PM</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Organizer Contact</h4>
            <p className="text-gray-700">
              Please go to <a className="text-blue-700">www.sneakypeeks.com</a>{" "}
              and refer the FAQ section for more detail
            </p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Event Location</h4>
            <img src={locationImage} alt="location" className="rounded-md" />
            <h4 className="text-xl font-normal">{event.name}</h4>
            <p className="text-gray-700">
              Dummy location generation model by SSU ... OUr approach
              generatesmore realist dummy locations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Tags</h4>
            <div className="flex gap-2">
              {event.categories.map((c, i) => {
                return (
                  <span
                    key={i}
                    className="p-2 rounded-md text-gray-900 text-xs bg-gray-100"
                  >
                    {c.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Share with friends</h4>
            <div className="flex gap-4">
              <img src={facebook} alt="social" />
              <img src={whatsapp} alt="social" />
              <img src={linkedin} alt="social" />
              <img src={twitter} alt="social" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
