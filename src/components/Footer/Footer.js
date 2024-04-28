import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as MedifyIcon } from "../../assets/medifyIcon.svg";
import { ReactComponent as FbIcon } from "../../assets/Footer/FbIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/Footer/TwitterIcon.svg";
import { ReactComponent as YtIcon } from "../../assets/Footer/YtIcon.svg";
import { ReactComponent as PinterestIcon } from "../../assets/Footer/PinterestIcon.svg";
import { ReactComponent as Arrow } from "../../assets/Footer/Arrow.svg";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.iconsWrapper}>
            <MedifyIcon />
            <div className={styles.linksWrapper}>
                <FbIcon />
                <TwitterIcon />
                <YtIcon />
                <PinterestIcon />
            </div>
        </div>
        <div className={styles.listWrapper}>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>About Us</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Our Pricing</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Our Gallery</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Appointment</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Privacy Policy</div>
            </div>
        </div>
        <div className={styles.listWrapper}>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Orthology</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Neurology</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Dental Care</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Opthalmology</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Cardiology</div>
            </div>
        </div>
        <div className={styles.listWrapper}>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>About Us</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Our Pricing</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Our Gallery</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Appointment</div>
            </div>
            <div className={styles.dummyAccordion}>
                <Arrow />
                <div className={styles.accordionText}>Privacy Policy</div>
            </div>
        </div>
      </div>
      <div className={styles.copywrite}>
      Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </div>
    </div>
  );
}
