import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./DoctorsPage.module.css";
import MedicalCenters from "../../components/MedicalCenters/MedicalCenters";
import Faq from "../../components/Faq/Faq";
import Download from "../../components/Download/Download";
import Footer from "../../components/Footer/Footer";

export default function DoctorsPage() {
    return(<div className={styles.wrapper}>
        <Navbar page="doctors" />
        <MedicalCenters />
        <Faq />
        <Download />
        <Footer />
    </div>)
}