import EventCard from "../../components/EventCard";
import { upComingEvents } from "../../lib/data-placeholder";
import Roorkee from "../../assets/images/Roorkee.png";
const collegeText = [
  "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
  "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
  "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
];

const CollegePage = () => {
  return (
    <div className="p-10 pb-16 px-20 flex flex-col gap-8">
      <div className="h-[600px] rounded-lg">
        <img src={Roorkee} className="w-full h-full rounded-lg" />
      </div>
      <div className="container mx-auto flex flex-col gap-5">
        <h3 className="text-4xl font-bold">IIT Roorke</h3>
        <div className="flex flex-col gap-5">
          {collegeText.map((text, index) => {
            return (
              <p key={index} className="text-gray-600">
                {text}
              </p>
            );
          })}
        </div>

        <div className=" flex flex-col gap-8  my-10">
          <div className="flex justify-between items-center align-middle">
            <h1 className="text-4xl font-bold">
              College <span className="text-primary">Events</span>
            </h1>
          </div>{" "}
          <div className="grid grid-cols-3 gap-10">
            {upComingEvents.map((event, index) => {
              return <EventCard key={index} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePage;
