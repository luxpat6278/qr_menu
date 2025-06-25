'use client';

import Image from 'next/image';
import styles from '@/components/landing/Block1/Block1.module.css';

const benefits = [
  'Увеличивает продажи',
  'Облегчает работу вашего персонала',
  'Повышает средний чек',
];

const PromoSection = () => {
  return (
    <section className={styles['promo-section']}>
      <div className={styles.container}>
        {/* Левая часть — текст */}
        <div className={styles['text-content']}>
          <h1 className={`${styles.title} ${styles['animated-gradient']}`}>
            ОНЛАЙН-МЕНЮ
          </h1>

          <ul className={styles.benefits}>
            {benefits.map((text, idx) => (
              <li className={styles.benefitItem} key={idx}>
                <Image
                  src="/Block1img/checkbox.svg"
                  alt="Галочка"
                  width={24}
                  height={24}
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.description}>
            Интерактивное меню с ИИ-рекомендациями, QR-заказами и индивидуальным дизайном.
          </p>

          <button
            className={`${styles['try-button']} ${styles['animated-button']}`}
          >
            Попробовать бесплатно
          </button>
        </div>

        {/* Правая часть — изображения */}
        <div className={styles['image-content']}>
          <Image
            src="/Block1img/yellow_blob_dt.png"
            alt="Жёлтый фон"
            className={styles['yellow-image']}
            width={1150}
            height={700}
            priority
          />
          <Image
            src="/Block1img/yellow_blob_mobile.png"
            alt="Жёлтый фон для мобилки"
            className={styles['yellow-image-mobile']}
            width={600}
            height={600}
            priority
          />
          <Image
            src="/Block1img/12iphone.png"
            alt="Телефон"
            className={styles['phone-image']}
            width={400}
            height={700}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
