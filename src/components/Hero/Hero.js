import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import HeroImg from "../../assets/heroImg.png";

export default function Hero() {
    return(<div className={styles.wrapper}>
        <div className={styles.content}>
            <div style={{fontSize: "31px", fontWeight: "500"}}>Skip the travel! Find Online</div>
            <div style={{fontSize: "56px", fontWeight: "700"}}>Medical <span style={{color: "rgba(42, 167, 255, 1)"}}>Centers</span></div>
            <div style={{fontSize: "20px", fontWeight: "400", color: "rgba(92, 97, 105, 1)"}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</div>
            <Button value="Find Centers" />
        </div>
        <div className={styles.heroImg}>
            <img src={HeroImg} alt="HeroImage" />
        </div>
    </div>)
}