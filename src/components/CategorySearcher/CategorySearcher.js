import React, { useState, useEffect } from "react";
import styles from "./CategorySearcher.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import axios from "axios";
import { ReactComponent as SearchIconWhite } from "../../assets/SearchIconWhite.svg";
import Ambulance from "../../assets/Ambulance.png";
import Capsule from "../../assets/Capsule.png";
import Doctor from "../../assets/Doctor.png";
import Drugstore from "../../assets/Drugstore.png";
import Hospital from "../../assets/Hospital.png";

export default function CategorySearcher() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((states) => setStateData(states.data))
      .catch((err) => console.log("Error fetching states data", err));
  }, []);

  useEffect(() => {
    if (state) {
      axios
        .get(`https://meddata-backend.onrender.com/cities/${state}`)
        .then((cities) => {
          setCityData(cities.data);
          setCity("");
        })
        .catch((err) => console.log("Error fetching states data", err));
    }
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <form className={styles.searchBox}>
        <div className={styles.dropDown}>
          <SearchIcon />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={{ border: "none", backgroundColor: "rgba(250, 251, 254, 1)" }}
          >
            <option value="" disabled>
              State
            </option>
            {stateData.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.dropDown}>
          <SearchIcon />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ border: "none", backgroundColor: "rgba(250, 251, 254, 1)" }}
          >
            <option value="" disabled>
              City
            </option>
            {cityData.map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchButton}>
          <SearchIconWhite />
          <input type="submit" value="Search" className={styles.searchInput} />
        </div>
      </form>
      <div style={{ fontSize: "22px", fontWeight: "500", textAlign: "center" }}>
        You may be looking for
      </div>
      <div className={styles.categories}>
        <div className={styles.categoryWrapper}>
          <img src={Doctor} alt="Doctor" />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgba(171, 182, 199, 1)",
            }}
          >
            Doctors
          </div>
        </div>
        <div className={styles.categoryWrapper}>
          <img src={Drugstore} alt="Lab" />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgba(171, 182, 199, 1)",
            }}
          >
            Labs
          </div>
        </div>
        <div className={styles.categoryWrapper}>
          <img src={Hospital} alt="Hospital" />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgba(171, 182, 199, 1)",
            }}
          >
            Hospitals
          </div>
        </div>
        <div className={styles.categoryWrapper}>
          <img src={Capsule} alt="Store" />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgba(171, 182, 199, 1)",
            }}
          >
            Medical Store
          </div>
        </div>
        <div className={styles.categoryWrapper}>
          <img src={Ambulance} alt="Ambulance" />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgba(171, 182, 199, 1)",
            }}
          >
            Ambulance
          </div>
        </div>
      </div>
    </div>
  );
}
