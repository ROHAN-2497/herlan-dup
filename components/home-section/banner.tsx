"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Banner = () => {
  return (
    <Swiper
      pagination={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper cursor-pointer"
    >
      <SwiperSlide className="mb-10">
        <Image
          width={2880}
          height={750}
          src="/CoverMaxBeu-Desktop-copy-1536x400 (1).webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={2880}
          height={750}
          src="/CoverMaxBeu-Desktop-copy-1536x400 (1).webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={2880}
          height={750}
          src="/CoverMaxBeu-Desktop-copy-1536x400 (1).webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={2880}
          height={750}
          src="/CoverMaxBeu-Desktop-copy-1536x400 (1).webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={2880}
          height={750}
          src="/CoverMaxBeu-Desktop-copy-1536x400 (1).webp"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
