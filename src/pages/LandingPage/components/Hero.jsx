/* eslint-disable react/prop-types */
import HeroSearchForm from "../../../components/heroSearchForm";
import MySwiper from "../../../components/Swiper";

const Hero = () => {
  return (
    <div className="relative h-[650px] rounded-2xl w-[90%] mx-auto">
      <div className="text-white">
        <MySwiper />
      </div>
      <div className="absolute z-40 left-1/2 transform -translate-x-1/2 flex justify-between w-[90%] mx-auto -bottom-5 bg-[#10107B] p-6 rounded-2xl">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default Hero;
