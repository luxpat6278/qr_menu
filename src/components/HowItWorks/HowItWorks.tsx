'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './HowItWorks.module.css';

import Qr from '../../../public/howitworksimg/Mask_group.svg';
import Basket from '../../../public/howitworksimg/Mask_group_(1).svg';
import Ai from '../../../public/howitworksimg/Mask_group_(2).svg';
import Robot from '../../../public/howitworksimg/Mask_group_(3).svg';

interface Step {
  id: number;
  icon: StaticImageData;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: Qr,
    title: 'СКАНИРОВАНИЕ QR–КОДА',
    text: 'Клиент сканирует QR-код и открывает меню на своём устройстве',
  },
  {
    id: 2,
    icon: Basket,
    title: 'ВЫБОР БЛЮД',
    text: 'Клиент выбирает понравившиеся позиции, добавляя их в корзину',
  },
  {
    id: 3,
    icon: Ai,
    title: 'ДОПОЛНЕНИЕ ЗАКАЗА',
    text: 'Искусственный интеллект предлагает позиции на основе выбора клиента ',
  },
  {
    id: 4,
    icon: Robot,
    title: 'ПОКАЗ ОФИЦИАНТУ',
    text: 'При нажатии «Показать официанту» официант получает копию заказа',
  },
];

export default function HowItWorks() {
  const [show, setShow] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target); // отключаем после первого показа
        }
      },
      { threshold: 0.2 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.wrapper} id="how-it-works">
      <div className={styles.container}>
        <h2 className={styles.title}>Принцип работы</h2>

        <div className={styles.subtitle_container}>
          <p className={styles.subtitle}>/справится даже ребёнок</p>
        </div>

        <div
          ref={boxRef}
          className={`${styles.cardsBox} ${show ? styles.show : ''}`}
        >
          {steps.map(({ id, icon, title, text }) => (
            <div
              key={id}
              className={`${styles.card} ${
                id === 1 ? styles.leftNumber : styles.rightNumber
              }`}
            >
              <div className={styles.cardMedia}>
                <div className={styles.number}>{id}</div>
                <div className={styles.images}>
                  <Image
                    src={icon}
                    alt={title}
                    width={120}
                    height={120}
                    className={styles.iconImage}
                  />
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
