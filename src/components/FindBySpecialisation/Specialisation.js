import React from "react";
import styles from "./Specialisation.module.css";
import Dentistry from "../../assets/Drugstore.png";
import PrimaryCare from "../../assets/Stethoscope.png";
import Cardiology from "../../assets/HeartRate.png";
import MriResonance from "../../assets/HeartRateMonitor.png";
import BloodTest from "../../assets/BloodSample.png";
import Piscologist from "../../assets/Immune.png";
import Laboratory from "../../assets/Drugstore.png";
import Xray from "../../assets/XRay.png";
import Button from "../Button/Button";

const data = [
  { image: Dentistry, title: "Dentistry" },
  { image: PrimaryCare, title: "Primary Care" },
  { image: Cardiology, title: "Cardiology" },
  { image: MriResonance, title: "MRI Resonance" },
  { image: BloodTest, title: "Blood Test" },
  { image: Piscologist, title: "DentiPiscologiststry" },
  { image: Laboratory, title: "Laboratory" },
  { image: Xray, title: "X-Ray" },
];

export default function Specialisation() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "rgba(27, 60, 116, 1)" }}>Find by specialisation</h1>
      <div className={styles.blocksWrapper}>
        {data.map((block, idx) => <div className={styles.block} key={idx}><img src={block.image} alt="specialisationImage" /><div>{block.title}</div></div>)}
      </div>
      <Button value="View All" />
    </div>
  );
}
