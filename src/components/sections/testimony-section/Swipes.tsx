"use client";
import React, { useRef, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Testimonial from "./Testimonial";

const Swipe = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const prevButton = prevRef.current;
      const nextButton = nextRef.current;

      //@ts-ignore
      prevButton.addEventListener("click", () => {
        //@ts-ignore
        swiperRef.current?.slidePrev();
      });
      //@ts-ignore
      nextButton.addEventListener("click", () => {
        //@ts-ignore
        swiperRef.current?.slideNext();
      });
    }
  }, [prevRef.current, nextRef.current]);
  //bg-[url('/line.png')]
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="2xl:max-w-[80%]  w-full">
        <div className="  flex h-auto my-10 mt-12 items-center ">
          <Swiper
            onSwiper={(swiper) => {
              //@ts-ignore
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Scrollbar]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            className="swiper_container"
          >
            <SwiperSlide className="swiper_card">
              <Testimonial id={1} />
            </SwiperSlide>
            <SwiperSlide className="swiper_card">
              <Testimonial id={2} />
            </SwiperSlide>
            <SwiperSlide className="swiper_card">
              <Testimonial id={3} />
            </SwiperSlide>
            <SwiperSlide className="swiper_card">
              <Testimonial id={4} />
            </SwiperSlide>
            <SwiperSlide className="swiper_card">
              <Testimonial id={5} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex items-center md:-mt-10 mb-10  w-full justify-center">
          <div className="flex space-x-4 items-center">
            <div ref={prevRef}>
              <BsArrowLeft className="text-4xl text-gray-400 cursor-pointer" />
            </div>

            <p>Order</p>
            <div ref={nextRef}>
              <BsArrowRight className="text-4xl text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
