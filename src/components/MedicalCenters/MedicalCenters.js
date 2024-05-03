import React, { useState, useEffect } from "react";
import styles from "./MedicalCenters.module.css";
import { ReactComponent as LocationIcon } from "../../assets/LocationIcon.svg";
import axios from "axios";
import { ReactComponent as SearchIconWhite } from "../../assets/SearchIconWhite.svg";
import { ReactComponent as VerifyIcon } from "../../assets/DoctorsPage/verifyIcon.svg";
import HospitalsCard from "../HospitalsCard/HospitalsCard";
import AdvertisementCard from "../../assets/DoctorsPage/advertisementCard.png";

export default function MedicalCenters() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [searchData, setSearchData] = useState({ state: "", city: "" });
  const [hospitals, setHospitals] = useState([]);

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

  useEffect(() => {
    if (state) {
      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${searchData.state}&city=${searchData.city}`
        )
        .then((hospitals) => {
          setHospitals(hospitals.data);
        })
        .catch((err) => console.log("Error fetching hospital data", err));
    }
  }, [searchData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchData({ state: state, city: city });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.searchBox} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.dropDown}>
          <LocationIcon />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={{
              border: "none",
              backgroundColor: "rgba(250, 251, 254, 1)",
              width: "16rem",
            }}
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
          <LocationIcon />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              border: "none",
              backgroundColor: "rgba(250, 251, 254, 1)",
              width: "32rem",
            }}
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
      {searchData.city && (
        <>
          <div className={styles.headline}>
            {hospitals.length} medical centers available in {searchData.city}
          </div>
          <div className={styles.subLine}>
            <div>
              <VerifyIcon />
            </div>
            <div>
              Book appointments with minimum wait-time & verified doctor details
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.hospitalsWrapper}>
              {hospitals.length > 0 &&
                hospitals.map((hospital) => (
                  <HospitalsCard
                    name={hospital["Hospital Name"]}
                    address={hospital["Address"]}
                    hospitalType={hospital["Hospital Type"]}
                    rating={hospital["Hospital overall rating"]}
                    type="hospitalCard"
                  />
                ))}
            </div>
            <div className={styles.advertisementCard}><img src={AdvertisementCard} alt="AdvertisementCard" /></div>
          </div>
        </>
      )}
    </div>
  );
}
