import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as MedifyIcon } from "../../assets/medifyIcon.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className={page === "landing" ? styles.navbar : styles.otherNavbar}>
        <Link to="/">
          <MedifyIcon />
        </Link>
        <div className={styles.navWrapper}>
          <Link to="/doctors">
            <div className={styles.navLink}>Find Doctors</div>
          </Link>
          <div className={styles.navLink}>Hospitals</div>
          <div className={styles.navLink}>Medicines</div>
          <div className={styles.navLink}>Surgeries</div>
          <div className={styles.navLink}>Software for Provider</div>
          <div className={styles.navLink}>Facilities</div>
          <Link to="/bookings">
            <Button value="My Bookings" />
          </Link>
        </div>
      </nav>
      {page !== "landing" && (
        <div className={styles.navFooter}>
          {page === "bookings" && "My Bookings"}
        </div>
      )}
    </div>
  );
}
