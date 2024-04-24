import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as MedifyIcon } from "../../assets/medifyIcon.svg";
import Button from "../Button/Button";

export default function Navbar({ page }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className={page === "landing" ? styles.navbar : styles.otherNavbar}>
        <MedifyIcon />
        <div className={styles.navWrapper}>
          <div className={styles.navLink}>Find Doctors</div>
          <div className={styles.navLink}>Hospitals</div>
          <div className={styles.navLink}>Medicines</div>
          <div className={styles.navLink}>Surgeries</div>
          <div className={styles.navLink}>Software for Provider</div>
          <div className={styles.navLink}>Facilities</div>
          <Button value="My Bookings" />
        </div>
      </nav>
      {page !== "landing" && <div className={styles.navFooter}>{page === "bookings" && "My Bookings"}</div>}
    </div>
  );
}
