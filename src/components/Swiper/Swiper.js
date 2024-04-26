import React from "react";
import styles from "./Swiper.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <Swiper
          style={{ paddingTop: "258px" }}
          initialSlide={0}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={"1"}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          allowTouchMove
        >
          {data.map((ele, index) => (
            <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
