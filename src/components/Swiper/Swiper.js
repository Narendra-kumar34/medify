import React from "react";
import styles from "./Swiper.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel({ data, renderComponent, type }) {
  return (
    <div className={type === "specialist" ? styles.specialistWrapper : styles.wrapper}>
      {type === "specialist" && <h1 style={{color: "rgba(27, 60, 116, 1)", textAlign: "center", marginBottom: "2rem"}}>Our Medical Specialist</h1>}
      <div className={styles.carousel}>
        <Swiper
          style={{ paddingTop: `${type !== "specialist" ? "258px" : "0px"}` }}
          initialSlide={0}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={"1"}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: `${type !== "specialist" ? 3 : 4}`,
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
