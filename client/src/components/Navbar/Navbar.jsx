import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    // <Link>Navbar</Link>
    <div className={styles.container}>
      <div className={styles.full}>
        <Link className={styles.link} to="/">FullStack-Mini-Porject</Link>
      </div>
      <div className={styles.HomeSide}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/signup">SignUp</Link>
        <Link className={styles.link} to="/lognin">Lognin</Link>
      </div>
    </div>
  );
}

export default Navbar;
