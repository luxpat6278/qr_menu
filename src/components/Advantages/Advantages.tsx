'use client';

import Image from 'next/image';
import phoneImg from '../../../public/iPhone_13.svg';
import styles from './Advantages.module.css';

const leftItems = [
  { title: 'Интеграции', text: 'Готовность к подключению онлайн-оплаты, CRM, доставки и аналитики.' },
  { title: 'Мультиязычность', text: 'Поддержка русского, казахского и английского языков.' },
  { title: 'Индивидуальный дизайн', text: 'Настраиваемые цветовые схемы и возможность полного редизайна.' },
];

const rightItems = [
  { title: 'Быстрое добавление акций', text: 'Добавляйте скидки, спецпредложения и комбо в пару кликов.' },
  { title: 'Удобство', text: 'Меню обновляется моментально. Без лишних затрат.' },
  { title: 'Быстрый старт', text: 'Меню запускается за пару часов. Без техников, без сложностей — просто отправьте список блюд, и всё готово.' },
];

export default function Advantages() {
  return (
    <section className={styles.wrapper} id = 'advantages'>
      <h2 className={styles.title}>ПРЕИМУЩЕСТВА</h2>
      <div className={styles.content}>
        {/* Левая колонка: текст слева, иконка справа */}   
        <div className={styles.column}>
          {leftItems.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className={`${styles.icon} ${styles.yellow}`} />
            </div>
          ))}
        </div>

        {/* Центр: телефон */}
        <div className={styles.imageWrapper}>
          <Image
            src={phoneImg}
            alt="Phone app preview"
            width={740}
            height={660}
            priority
          />
        </div>

        {/* Правая колонка: иконка слева, текст справа */}
        <div className={styles.column}>
          {rightItems.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div className={`${styles.icon} ${styles.blue}`} />
              <div className={styles.column_text}>
                <h3>{item.title}</h3>   
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}