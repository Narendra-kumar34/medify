import React from "react";
import styles from "./HospitalsCard.module.css";
import hospitalPic from "../../assets/DoctorsPage/hospitalPic.png";
import { ReactComponent as LikeIcon } from "../../assets/DoctorsPage/LikeIcon.svg";

export default function HospitalsCard({ name, address, hospitalType, rating }) {
    return(<div className={styles.wrapper}>
        <div className={styles.card}>
            <div><img src={hospitalPic} alt="hospitalPic" /></div>
            <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                <div className={styles.address}>{address}</div>
                <div className={styles.hospitalType}>{hospitalType}</div>
                <div><span style={{color: "rgba(2, 164, 1, 1)", fontWeight: "700"}}>FREE</span> <span style={{textDecoration: "line-through", color: "rgba(120, 120, 135, 1)"}}>₹500</span> Consultation fee at clinic</div>
                <div className={styles.iconBox}><span className={styles.icon}><LikeIcon />{rating}</span></div>
            </div>
            <div className={styles.availabilityCol}>
                <div style={{color: "rgba(2, 164, 1, 1)"}}>Available Today</div>
                <button className={styles.bookingButton}>Book FREE Center Visit</button>
            </div>
        </div>
    </div>)
}