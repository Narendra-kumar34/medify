import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategorySearcher from "../../components/CategorySearcher/CategorySearcher";
import Carousel from "../../components/Swiper/Swiper";
import SwiperPic1 from "../../assets/swiperPic1.png";
import SwiperPic2 from "../../assets/swiperPic2.png";

const swiperData = [SwiperPic1, SwiperPic2, SwiperPic1, SwiperPic2, SwiperPic1, SwiperPic2];

export default function LandingPage() {
    return(<div>
        <Navbar page="landing" />
        <Hero />
        <CategorySearcher />
        <Carousel data={swiperData} renderComponent={(ele) => <img src={ele} alt="carouselImg" />} />
    </div>)
}