import Image from "next/image";
import styles from "@/components/landing/PromoBlock/PromoBlock.module.css";

const PromoBlock = () => {
  return (
    <section className={styles.promoContainer}>
      <div className={styles.leftSide}>
        <Image
          src="/robot.svg"
          alt="Робот официант"
          width={585}
          height={585}
          className={styles.robotImage}
        />
      </div>

      <div className={styles.rightSide}>
        <h2 className={styles.title}>
          Готовы увеличить продажи <br />
          и упростить работу?
        </h2>
        <p className={styles.subtitle}>
          Запустите своё QR-меню — быстро, красиво, без лишних затрат.
        </p>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Введите имя"
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="Введите номер телефона"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Подключить
          </button>
        </form>
      </div>
    </section>
  );
};

export default PromoBlock;
