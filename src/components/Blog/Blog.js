import React from "react";
import styles from "./Blog.module.css";
import BlogPic from "../../assets/BlogPic.png";
import BlogProfilePic from "../../assets/BlogProfilePic.png";

export default function Blog() {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          color: "rgba(42, 167, 255, 1)",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Blog & News
      </div>
      <h1
        style={{
          color: "rgba(27, 60, 116, 1)",
          fontSize: "48px",
          fontWeight: "600",
        }}
      >
        Read Our Latest News
      </h1>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <img src={BlogPic} alt="Pic" />
          <div className={styles.cardContent}>
            <div className={styles.dateBox}>
              <div>Medical</div>
              <div style={{ border: "1px solid rgba(221, 221, 221, 1)", height: "1rem" }}></div>
              <div>March 31, 2022</div>
            </div>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              6 Tips To Protect Your Mental Health When You’re Sick
            </div>
            <div className={styles.profile}>
              <img src={BlogProfilePic} alt="ProfilePic" />
              <div
                style={{
                  color: "rgba(27, 60, 116, 1)",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                Rebecca Lee
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={BlogPic} alt="Pic" />
          <div className={styles.cardContent}>
            <div className={styles.dateBox}>
              <div>Medical</div>
              <div style={{ border: "1px solid rgba(221, 221, 221, 1)", height: "1rem" }}></div>
              <div>March 31, 2022</div>
            </div>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              6 Tips To Protect Your Mental Health When You’re Sick
            </div>
            <div className={styles.profile}>
              <img src={BlogProfilePic} alt="ProfilePic" />
              <div
                style={{
                  color: "rgba(27, 60, 116, 1)",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                Rebecca Lee
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={BlogPic} alt="Pic" />
          <div className={styles.cardContent}>
            <div className={styles.dateBox}>
              <div>Medical</div>
              <div style={{ border: "1px solid rgba(221, 221, 221, 1)", height: "1rem" }}></div>
              <div>March 31, 2022</div>
            </div>
            <div
              style={{
                color: "rgba(27, 60, 116, 1)",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              6 Tips To Protect Your Mental Health When You’re Sick
            </div>
            <div className={styles.profile}>
              <img src={BlogProfilePic} alt="ProfilePic" />
              <div
                style={{
                  color: "rgba(27, 60, 116, 1)",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                Rebecca Lee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
