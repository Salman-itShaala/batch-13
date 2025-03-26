import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerLeft}>Footer left</div>
      <div className={styles.container}>Footer right</div>
    </footer>
  );
};

export default Footer;
