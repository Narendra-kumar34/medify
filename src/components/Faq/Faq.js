import React from "react";
import styles from "./Faq.module.css";
import { ReactComponent as HeartIcon } from "../../assets/Faq/heartIcon.svg";
import { ReactComponent as SmileyIcon } from "../../assets/Faq/smileyIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/Faq/plusIcon.svg";
import FaqPic from "../../assets/Faq/FaqPic.png";

export default function Faq() {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          color: "rgba(42, 167, 255, 1)",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Get Your Answer
      </div>
      <div
        style={{
          color: "rgba(27, 60, 116, 1)",
          fontSize: "48px",
          fontWeight: "600",
        }}
      >
        Frequently Asked Questions
      </div>
      <div className={styles.subWrapper}>
        <div className={styles.picWrapper}>
          <img src={FaqPic} alt="Faq Pic" />
          <span className={styles.heartIcon}>
            <HeartIcon />
          </span>
          <div className={styles.smileyBox}>
            <SmileyIcon />
            <div className={styles.smileyContent}>
              <div
                style={{
                  color: "rgba(27, 60, 116, 1)",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                84k+
              </div>
              <div>Happy Patients</div>
            </div>
          </div>
        </div>
        <div className={styles.faqWrapper}>
          <div className={styles.faq}>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Why choose our medical for your family?
            </div>
            <PlusIcon />
          </div>
          <div className={styles.faq}>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Why we are different from others?
            </div>
            <PlusIcon />
          </div>
          <div className={styles.faq}>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Trusted & experience senior care & love
            </div>
            <PlusIcon />
          </div>
          <div className={styles.faq}>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              How to get appointment for emergency cases?
            </div>
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
