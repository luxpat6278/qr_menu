'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/components/landing/HowItWorks/HowItWorks.module.css';

interface Step {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: '/howitworksimg/Mask_group.svg',
    title: 'СКАНИРОВАНИЕ QR–КОДА',
    text: 'Клиент сканирует QR-код и открывает меню на своём устройстве',
  },
  {
    id: 2,
    icon: '/howitworksimg/Mask_group_(1).svg',
    title: 'ВЫБОР БЛЮД',
    text: 'Клиент выбирает понравившиеся позиции, добавляя их в корзину',
  },
  {
    id: 3,
    icon: '/howitworksimg/Mask_group_(2).svg',
    title: 'ДОПОЛНЕНИЕ ЗАКАЗА',
    text: 'Искусственный интеллект предлагает позиции на основе выбора клиента ',
  },
  {
    id: 4,
    icon: '/howitworksimg/Mask_group_(3).svg',
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
          observer.unobserve(entry.target);
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
