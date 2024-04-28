import React from "react";
import styles from "./Download.module.css";
import Button from "../Button/Button"
import GooglePlayPic from "../../assets/Download/googlePlay.png";
import AppleStorePic from "../../assets/Download/appleStore.png";
import { ReactComponent as Vector } from "../../assets/Download/Vector.svg";
import phoneBorder from "../../assets/Download/phoneBorder.png";
import phoneScreen from "../../assets/Download/phoneScreen.png";

export default function Download() {
    return(<div className={styles.wrapper}>
        <div className={styles.picsWrapper}>
            <div className={styles.picBox1}>
                <img src={phoneBorder} alt="border" className={styles.phoneBorder} />
                <img src={phoneScreen} alt="phone" className={styles.phonePic} />
            </div>
            <div className={styles.picBox2}>
                <img src={phoneBorder} alt="border" className={styles.phoneBorder} />
                <img src={phoneScreen} alt="phone" className={styles.phonePic} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.headline}>Download the</div>
            <div className={styles.headline}><span style={{color: "rgba(42, 167, 255, 1)"}}>Medify</span> App</div>
            <div style={{color: "rgba(65, 65, 70, 1)", fontSize: "16px", fontWeight: "700"}}>Get the link to download the app</div>
            <div className={styles.phoneNumbWrapper}>
                <div className={styles.phoneNoBox}>
                    <div className={styles.countryCode}>+91</div>
                    <input type="number" placeholder="Enter phone number" className={styles.inputField} />
                </div>
                <Button value="Send SMS" />
            </div>
            <div className={styles.linksWrapper}>
                <a className={styles.downloadButton} href="https://google.com"><img src={GooglePlayPic} alt="GooglePlay" /></a>
                <a className={styles.downloadButton} href="https://google.com"><img src={AppleStorePic} alt="AppleStore" /></a>
            </div>
            <div className={styles.vector}>
                <Vector />
            </div>
        </div>
    </div>)
}