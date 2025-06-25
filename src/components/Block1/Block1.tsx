"use client";

import Image from "next/image";
import styles from "@/components/Block1/Block1.module.css";

import yellow from "../../../public/Block1img/Rectangle6.png";
import yellowMobile from "../../../public/Block1img/Rectangle 6 (1).png";
import iphone from "../../../public/Block1img/12iphone.png";
import checkIcon from "../../../public/Block1img/checkbox.svg";
import { url } from "inspector";

const benefits = [
  "Увеличивает продажи",
  "Облегчает работу вашего персонала",
  "Повышает средний чек",
];

const PromoSection = () => {
  return (
    <section className={styles["promo-section"]}>
      <div className={styles.container}>
        {/* Левая часть */}
        <div className={styles["text-content"]}>
          <h1 className={`${styles.title} ${styles["animated-gradient"]}`}>
            ОНЛАЙН-МЕНЮ
          </h1>

          <ul className={styles.benefits}>
            {benefits.map((text, idx) => (
              <li className={styles.benefitItem} key={idx}>
                <Image src={checkIcon} alt="Галочка" width={24} height={24}  />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.description}>
            Интерактивное меню с ИИ-рекомендациями, QR-заказами и индивидуальным дизайном.
          </p>

          <button className={`${styles["try-button"]} ${styles["animated-button"]}`}>
            Попробовать бесплатно
          </button>
        </div>

        {/* Правая часть */}
        <div className={styles["image-content"]}>
          <Image
            src={yellow}
            alt="Жёлтый фон"
            className={styles["yellow-image"]}
            priority
          />
          <Image
            src={yellowMobile}
            alt="Жёлтый фон мобильный"
            className={styles["yellow-image-mobile"]}
            priority
          />
          <Image
            src={iphone}
            alt="Телефон"
            className={styles["phone-image"]}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
