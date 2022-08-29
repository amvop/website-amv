import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ButtonRounded from "@components/button/rounded/ButtonRounded";
import { Image } from "@chakra-ui/react";
import CardRobot from "@components/card/robot/CardRobot";
import Link from "next/link";

const PreviewProduct = ({ robots }) => {
  return (
    <section className="bg-background py-10">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-3 text-4xl font-bold leading-tight text-center text-primary-400 md:text-5xl">
          Our Products
        </h1>
        <p className="mb-16 text-md md:text-lg text-center text-white">
          A glimpse of our products engineered by our talented members
        </p>

        <div className="mt-4">
          <div className="swiper">
            <Swiper
              modules={[Pagination]}
              loop={true}
              pagination={{
                type: "progressbar",
                el: ".swiper-pagination",
              }}
              slidesPerView="auto"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={32}
              autoplay={true}
            >
              {robots.map((robot, i) => {
                if (robot.is_preview) {
                  return (
                    <SwiperSlide
                      key={i}
                      className="swiper-slide bg-white rounded-lg"
                    >
                      <CardRobot robot={robot} />
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <div className="max-w-3xl rounded-md bg-primary-400 mx-auto mt-8 swiper-pagination bottom-0 relative"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/robot">
          <button
            type="button"
            className="hover:scale-110 transition-all px-8 py-3 font-semibold text-lg rounded-full font-body bg-gray-100 text-gray-800"
          >
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PreviewProduct;
