import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
                src="/fl.svg"
                alt="Code & Design Logo"
                width={50}
                height={50}
                className={styles.logoImage}
            />
            <div>
                <div className={styles.name}>CODE<span>&</span>DESIGN</div>
                <div className={styles.resident}>Резиденты Astana Hub</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p>ЦОБ “БизнесРост”</p>
          <p>+7 (776) 956-00-90</p>
          <p>
            <a href="mailto:info@brost.kz">info@brost.kz</a>
          </p>
          <p>г.Астана, ул. Нажимеденова 4, Блок D 1-4, офис 17</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
