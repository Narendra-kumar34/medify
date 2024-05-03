import React from "react";
import styles from "./BookingsPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import AdvertisementCard from "../../assets/DoctorsPage/advertisementCard.png";
import HospitalsCard from "../../components/HospitalsCard/HospitalsCard";
import Download from "../../components/Download/Download";
import Footer from "../../components/Footer/Footer";

export default function BookingsPage() {
  const data = JSON.parse(localStorage.getItem("bookings"));
  return (
    <div className={styles.wrapper}>
      <Navbar page="bookings" />
      <div className={styles.content}>
        <div className={styles.hospitalsWrapper}>
          {data.map((hospital) => (
            <HospitalsCard
              name={hospital.name}
              address={hospital.address}
              hospitalType={hospital.hospitalType}
              rating={hospital.rating}
              type="bookingCard"
              bookingDate={hospital.date}
              bookingTime={hospital.selectedTime}
            />
          ))}
        </div>
        <div>
          <img src={AdvertisementCard} alt="AdvertisementCard" />
        </div>
      </div>
      <Download />
      <Footer />
    </div>
  );
}
