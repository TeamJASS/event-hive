/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import ctaImage from "../../../assets/images/cta-image.png";

const CTA = () => {
  return (
    <div className=" relative p-5 bg-[#10107B] text-white mt-20 pt-16 h-[250px]">
      <div className="container mx-auto grid grid-cols-2 ">
        <div className="">
          <img
            src={ctaImage}
            alt="cta-image"
            className=" absolute bottom-0  h-[303px] w-[545px]"
          />
        </div>
        <div className="flex flex-col justify-center  items-start gap-2">
          <h4 className="text-4xl font-bold">Make you own Event</h4>
          <p className="text-lg">
            Start making your event by clicking the button below
          </p>
          <div className="my-4">
            <Link
              to="events/create"
              className="p-4 px-10 text-white bg-primary hover:bg-[#7848F4] w-auto rounded-md"
            >
              Create Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
