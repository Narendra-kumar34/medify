import React from "react";
import styles from "./PatientCaring.module.css";
import Pic from "../../assets/PatientCaringPic.png";
import { ReactComponent as Icon } from "../../assets/VerifyIcon.svg";

export default function PatientCaring() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.picture}>
        <img src={Pic} alt="Pic" />
      </div>
      <div className={styles.content}>
        <div style={{ color: "rgba(42, 167, 255, 1)", fontSize: "16px", fontWeight: "600" }}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </div>
        <h1 style={{ color: "rgba(27, 60, 116, 1)", fontSize: "48px", fontWeight: "600" }}>
          Patient <span style={{ color: "rgba(42, 167, 255, 1)" }}>Caring</span>
        </h1>
        <div style={{ color: "rgba(119, 130, 157, 1)", fontSize: "17px", fontWeight: "500" }}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </div>
        <div className={styles.line}>
          <Icon />
          <div style={{ color: "rgba(27, 60, 116, 1)", fontSize: "18px", fontWeight: "500" }}>
            Stay Updated About Your Health
          </div>
        </div>
        <div className={styles.line}>
          <Icon />
          <div style={{ color: "rgba(27, 60, 116, 1)", fontSize: "18px", fontWeight: "500" }}>
            Check Your Results Online
          </div>
        </div>
        <div className={styles.line}>
          <Icon />
          <div style={{ color: "rgba(27, 60, 116, 1)", fontSize: "18px", fontWeight: "500" }}>
            Manage Your Appointments
          </div>
        </div>
      </div>
    </div>
  );
}
