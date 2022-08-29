import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CardTestimonial from "@components/card/testimonial/CardTestimonial";

const Testimonial = ({ testimonials }) => {
  return (
    <section className="bg-background flex justify-center">
      <div className="px-4 py-16  sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-24 max-w-[1340px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-8 lg:items-center">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold text-primary-400 font-display tracking-tight sm:text-4xl">
              What They Say About AMV UI
            </h2>

            <p className="mt-4 text-white font-body">
              Quality in a team is not about how great the team members are when
              they come in, but how much they learn and get, once they leave the
              team.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                className="p-3 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white prev-button"
              >
                <svg
                  className="w-5 h-5 transform -rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                className="p-3 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white next-button"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <Swiper
              modules={[Navigation]}
              loop={true}
              slidesPerView={1}
              spaceBetween={32}
              autoplay={{ delay: 100 }}
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <CardTestimonial testimonial={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            aria-label="Previous slide"
            className="p-4 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white prev-button"
          >
            <svg
              className="w-5 h-5 transform -rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="p-4 text-primary-500 border border-primary-500 rounded-full hover:bg-primary-500 hover:text-white next-button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
