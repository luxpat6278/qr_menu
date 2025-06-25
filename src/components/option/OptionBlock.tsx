'use client';

import React from 'react';
import Image from 'next/image';
import styles from './OptionBlock.module.css';

interface CardProps {
  value: string;
  description: string;
}

const cards: CardProps[] = [
  { value: '65%',   description: 'людей — визуалы, воспринимающие информацию глазами' },
  { value: 'На 30%', description: 'может повысить продажи наличие качественных фотографий блюд в меню' },
  { value: '<1 сек', description: 'нужно человеку, чтобы понять визуальное сообщение, что в 60 000 раз быстрее текста.' }
];

const OptionBlock: React.FC = () => (
  <section id = 'how-it-works' className={styles.option}>
    <div className={styles.inner}>
      {/* Заголовок */}
      <h2 className={styles.title}>А что выберете вы?</h2>

      {/* Ряд изображений */}
      <div className={styles.imagesRow}>
        <div className={styles.imageWrapper}>
          <Image src="/option/Group_9.svg" alt="bg" width={1790} height={620} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/option/Clip_path_group.svg" alt="Робот" width={1120} height={663} />
        </div>
      </div>

     <div className={styles.statsRow__container}>
      <div className={styles.statsRow}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.value}>{card.value}</h3>
            <p className={styles.desc}>{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  </section>
);

export default OptionBlock;
