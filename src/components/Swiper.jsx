import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroContent = [
  {
    number: 1,
    text: "MADE FOR THOSE WHO DO",
    image:
      "https://s3-alpha-sig.figma.com/img/0721/c014/bef6a57cfe90dd36280fedc78d278575?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hsPxRXZ6YELFw-BcoZS9l0dYeSDWlnsChFFlV~4oTJFK-~3EH~pq0SyvrjYGJwdeINdosZ322IwDFhKVDvAEhJn-1DmBzDICdk8mcwlwbveWFxCUfubAwgn0csO4v1kj0myKTwqaG~Sp-2UdvPKZTpsLAiwba-Wg1WtTX0qucRYRoBgtSGfN~kVlpJ8kqcyXA4dr9en6X-IsUomZMEZsij9-nAr4VifgIMKygRSOcwT8V44L5EjJxq3NfkgKW9XjQlMisg1UIcCWwtChc409u5hD~JYk8yutTVdwORynREfDQNOTCfvgJfdXDpKrTOMqkg-bKWbC9peBHNV46-YBrA__",
  },
];

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="bg-dark h-[650px] rounded-2xl"
      loop={true}
    >
      {heroContent.map((content, index) => {
        return (
          <SwiperSlide
            key={index}
            className="bg-center bg-[#1D0E24] bg-cover flex  items-start justify-center h-full relative"
          >
            <div
              className="absolute z-[-1] w-full h-full"
              style={{ top: "-10%" }}
            >
              <img
                src={content.image}
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "block",
                  position: "relative",
                  top: "-10%",
                }}
                className="object-cover"
                alt={content.number}
              />
              <div
                className="absolute inset-0 bg-dark opacity-50"
                style={{ mixBlendMode: "multiply" }}
              ></div>
            </div>
            <div className="py-20 flex flex-col align-middle justify-center items-center gap-10 mt-10">
              <h1 className="text-6xl font-semibold w-[80%] mx-auto text-center">
                {content.text}
              </h1>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="swiper-button-next text-white custom-nav bg-gray-500 size-[50px]"></div>
      <div className="swiper-button-prev text-white custom-nav bg-gray-500 size-[50px]"></div>
    </Swiper>
  );
};

export default MySwiper;
