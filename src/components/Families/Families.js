import React from "react";
import styles from "./Families.module.css";
import { ReactComponent as PatientIcon } from "../../assets/Families/PatientIcon.svg";
import { ReactComponent as LabIcon } from "../../assets/Families/LabIcon.svg";
import { ReactComponent as HospitalIcon } from "../../assets/Families/HospitalIcon.svg";
import { ReactComponent as DoctorIcon } from "../../assets/Families/DoctorIcon.svg";

export default function Familes() {
    return(<div className={styles.wrapper}>
        <div className={styles.content}>
            <div style={{color: "rgba(42, 167, 255, 1)", fontSize: "17px", fontWeight: "600"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
            <div style={{color: "rgba(27, 60, 116, 1)", fontSize: "48px", fontWeight: "600"}}>Our Families</div>
            <div style={{color: "rgba(119, 130, 157, 1)", fontSize: "17px", fontWeight: "500"}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</div>
        </div>
        <div className={styles.picsWrapper}>
            <div className={styles.cardsCol1}>
                <div className={styles.card}>
                    <PatientIcon />
                    <div style={{color: "rgba(27, 60, 116, 1)", fontSize: "48px", fontWeight: "600"}}>5000+</div>
                    <div style={{color: "rgba(119, 130, 157, 1)", fontSize: "18px", fontWeight: "500"}}>Happy Patients</div>
                </div>
                <div className={styles.card}>
                    <LabIcon />
                    <div style={{color: "rgba(27, 60, 116, 1)", fontSize: "48px", fontWeight: "600"}}>1000+</div>
                    <div style={{color: "rgba(119, 130, 157, 1)", fontSize: "18px", fontWeight: "500"}}>Laboratories</div>
                </div>
            </div>
            <div className={styles.cardsCol2}>
            <div className={styles.card}>
                    <HospitalIcon />
                    <div style={{color: "rgba(27, 60, 116, 1)", fontSize: "48px", fontWeight: "600"}}>200+</div>
                    <div style={{color: "rgba(119, 130, 157, 1)", fontSize: "18px", fontWeight: "500"}}>Hospitals</div>
                </div>
                <div className={styles.card}>
                    <DoctorIcon />
                    <div style={{color: "rgba(27, 60, 116, 1)", fontSize: "48px", fontWeight: "600"}}>700+</div>
                    <div style={{color: "rgba(119, 130, 157, 1)", fontSize: "18px", fontWeight: "500"}}>Expert Doctors</div>
                </div>
            </div>
        </div>
    </div>)
}