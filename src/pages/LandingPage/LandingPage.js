import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategorySearcher from "../../components/CategorySearcher/CategorySearcher";

export default function LandingPage() {
    return(<div>
        <Navbar page="landing" />
        <Hero />
        <CategorySearcher />
    </div>)
}