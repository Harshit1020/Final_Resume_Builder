import React from "react";
import { Routes , Route } from 'react-router-dom';
import resumeSvg from "../../assets/resume.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Body from "../Body/Body";


function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <Link to="/body">
    <button className={styles.bt}>Let's build resume</button>
    </Link>
    </div>
  );
}

export default Header;
