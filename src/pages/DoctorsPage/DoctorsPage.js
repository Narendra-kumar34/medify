import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./DoctorsPage.module.css";
import MedicalCenters from "../../components/MedicalCenters/MedicalCenters";

export default function DoctorsPage() {
    return(<div className={styles.wrapper}>
        <Navbar page="doctors" />
        <MedicalCenters />
    </div>)
}