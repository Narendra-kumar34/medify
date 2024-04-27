import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategorySearcher from "../../components/CategorySearcher/CategorySearcher";
import Carousel from "../../components/Swiper/Swiper";
import SwiperPic1 from "../../assets/swiperPic1.png";
import SwiperPic2 from "../../assets/swiperPic2.png";
import Specialisation from "../../components/FindBySpecialisation/Specialisation";
import Doctor1 from "../../assets/docPic1.png";
import Doctor2 from "../../assets/docPic2.png";
import Doctor3 from "../../assets/docPic3.png";
import PatientCaring from "../../components/PatientCaring/PatientCaring";

const swiperData = [
  SwiperPic1,
  SwiperPic2,
  SwiperPic1,
  SwiperPic2,
  SwiperPic1,
  SwiperPic2,
];

const specialistData = [
  { image: Doctor1, name: "Dr. Ahmad Khan", designation: "Neurologist" },
  { image: Doctor2, name: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  { image: Doctor3, name: "Dr. Ankur Sharma", designation: "Medicine" },
  { image: Doctor1, name: "Dr. Ahmad Khan", designation: "Neurologist" },
  { image: Doctor2, name: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  { image: Doctor3, name: "Dr. Ankur Sharma", designation: "Medicine" },
];

export default function LandingPage() {
  return (
    <div>
      <Navbar page="landing" />
      <Hero />
      <CategorySearcher />
      <Carousel
        data={swiperData}
        renderComponent={(ele) => <img src={ele} alt="carouselImg" />}
      />
      <Specialisation />
      <Carousel
        type="specialist"
        data={specialistData}
        renderComponent={(ele) => (
          <div className={styles.docCard}>
            <img src={ele.image} alt={ele.name} />
            <div className={styles.docName}>{ele.name}</div>
            <div className={styles.docDesignation}>{ele.designation}</div>
          </div>
        )}
      />
      <PatientCaring />
    </div>
  );
}
