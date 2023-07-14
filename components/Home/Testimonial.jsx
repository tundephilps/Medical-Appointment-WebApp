import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const TestimonialSection = () => {
  const data = [
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga nostrum ea ullam enim inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga nostrum ea ullam enim inventore.",
      author: {
        avatar: "/images/testimonial/avatar-1.jpg",
        name: "John Doe",
        description: "About Text Here",
      },
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga nostrum ea ullam enim inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga nostrum ea ullam enim inventore.",
      author: {
        avatar: "/images/testimonial/avatar-2.jpg",
        name: "Alex",
        description: "About Text Here",
      },
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elullam enim inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam fuga nostrum ea ullam enim inventore.",
      author: {
        avatar: "/images/testimonial/avatar-3.jpg",
        name: "Emily",
        description: "About Text Here",
      },
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam fuga nostrum ea ullam enim inventore.",
      author: {
        avatar: "/images/testimonial/avatar-4.jpg",
        name: "Boron",
        description: "About Text Here",
      },
    },
  ];

  return (
    <>
      <div className="w-full text-center sm:p-4 px-4 mb-12 md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-4">
          Some Of Our{" "}
          <span className="text-primary-main font-bold uppercase">Happy</span>{" "}
          Patients
        </h1>
        <p className="leading-relaxed text-sm md:text-base">
          Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar
          neutra sustainable fingerstache kickstarter.
        </p>
      </div>
      <div className="px-0 sm:px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          loop={false}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.map(({ content, author }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full mt-4 mb-20 md:mb-24 !h-full">
                <div className="h-full rounded-2xl p-8 bg-text-main/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 ml-auto mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                  </svg>
                  <p className="leading-relaxed mb-6 font-medium">{content}</p>
                  <div className="inline-flex items-center">
                    <Image
                      alt={author.name}
                      src={author.avatar}
                      width={200}
                      height={200}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <div className="flex-grow flex flex-col pl-4">
                      <h6 className="title-font font-medium">{author.name}</h6>
                      <p className="text-sm">{author.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialSection;
