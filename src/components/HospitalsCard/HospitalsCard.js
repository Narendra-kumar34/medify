import React, { useState } from "react";
import styles from "./HospitalsCard.module.css";
import hospitalPic from "../../assets/DoctorsPage/hospitalPic.png";
import { ReactComponent as LikeIcon } from "../../assets/DoctorsPage/LikeIcon.svg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HospitalsCard({ name, address, hospitalType, rating, type, bookingTime, bookingDate }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [bookingCard, setBookingCard] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handleTimeSelection = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleBooking = () => {
    if(!selectedTime) {
      return;
    }
    else {
      const data = JSON.parse(localStorage.getItem("bookings")) || [];
      const date = activeSlideIndex === 0 ? new Date().toLocaleDateString() : new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString();
      const currData = {
        name: name,
        address: address,
        hospitalType: hospitalType,
        rating: rating,
        selectedTime: selectedTime,
        date: date,
      };
      data.push(currData);
      localStorage.setItem("bookings", JSON.stringify(data));
      setBookingCard(false);
      console.log("Booking confirmed");
      console.log(data);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={type === "hospitalCard" ? styles.card : styles.bookingCard}  onClick={() => setBookingCard(!bookingCard)}>
        <div>
          <img src={hospitalPic} alt="hospitalPic" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.address}>{address}</div>
          <div className={styles.hospitalType}>{hospitalType}</div>
          <div>
            <span style={{ color: "rgba(2, 164, 1, 1)", fontWeight: "700" }}>
              FREE
            </span>{" "}
            <span
              style={{
                textDecoration: "line-through",
                color: "rgba(120, 120, 135, 1)",
              }}
            >
              ₹500
            </span>{" "}
            Consultation fee at clinic
          </div>
          <div className={styles.iconBox}>
            <span className={styles.icon}>
              <LikeIcon />
              {rating}
            </span>
          </div>
        </div>
        {type === "hospitalCard" && <div className={styles.availabilityCol}>
          <div style={{ color: "rgba(2, 164, 1, 1)" }}>Available Today</div>
          <button className={styles.bookingButton} onClick={handleBooking}>
            Book FREE Center Visit
          </button>
        </div>}
        {type === "bookingCard" && <div className={styles.bookingDetails}>
          <div className={styles.bookingTime}>{bookingTime}</div>
          <div className={styles.bookingDate}>{bookingDate}</div>
          </div>}
      </div>
      {(type === "hospitalCard" && bookingCard) && <div className={styles.bookingWrapper}>
        <div className={styles.carouselWrapper}>
          <Swiper
            style={{}}
            initialSlide={0}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={"3"}
            allowTouchMove
            onSlideChange={handleSlideChange}
            className={styles.swiperContainer}
          >
            <SwiperSlide>
              <div className={`${styles.swiperSlide} ${styles['swiper-slide']}`}>
                <div className={styles.slideDate}>Today</div>
                <div className={styles.availableSlots}>11 slots available</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.swiperSlide} ${styles['swiper-slide']}`}>
                <div className={styles.slideDate}>Tomorrow</div>
                <div className={styles.availableSlots}>17 slots available</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.slotsRow}>
          <div style={{ width: "65px" }}>Morning</div>
          <div className={styles.slotBox}>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="11:30 AM" checked={selectedTime === "11:30 AM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>11:30 AM</span>
            </div>
          </div>
        </div>
        <div className={styles.slotsRow}>
          <div style={{ width: "65px" }}>Afternoon</div>
          <div className={styles.slotBox}>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="12:00 PM" checked={selectedTime === "12:00 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>12:00 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="12:30 PM" checked={selectedTime === "12:30 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>12:30 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="01:00 PM" checked={selectedTime === "01:00 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>01:00 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="01:30 PM" checked={selectedTime === "01:30 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>01:30 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="02:00 PM" checked={selectedTime === "02:00 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>02:00 PM</span>
            </div>
          </div>
        </div>
        <div className={styles.slotsRow} style={{border: "none"}}>
          <div style={{ width: "65px" }}>Evening</div>
          <div className={styles.slotBox}>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="06:00 PM" checked={selectedTime === "06:00 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>06:00 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="06:30 PM" checked={selectedTime === "06:30 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>06:30 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="07:00 PM" checked={selectedTime === "07:00 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>07:00 PM</span>
            </div>
            <div className={styles.radioButton}>
              <input type="radio" name="time" value="07:30 PM" checked={selectedTime === "07:30 PM"} onChange={handleTimeSelection} />
              <span className={styles.radioButtonText}>07:30 PM</span>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
