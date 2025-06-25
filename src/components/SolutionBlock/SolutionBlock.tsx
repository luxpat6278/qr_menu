'use client';

import Image from 'next/image';
import styles from './SolutionBlock.module.css';

export default function SolutionBlock() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <h2 className={styles.title}>РЕШЕНИЕ</h2>
          <p className={styles.subtitle}>СОВРЕМЕННОЕ QR-МЕНЮ, КОТОРОЕ РАБОТАЕТ НА ВАС 24/7.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageOnly}>
            <Image src="/SolutionBlock/Frame_42.png" alt="ИИ" width={340} height={306} />
          </div>
          <div className={styles.cardWhite}>
            <h3 className={styles.cardTitle}>ИИ-рекомендации</h3>
            <p className={styles.cardText}>
              Предлагает клиентам дополнительные блюда, увеличивая средний чек.
            </p>
          </div>

          <div className={styles.imageOnly}>
            <Image src="/SolutionBlock/Frame_49.png" alt="Обновление" width={340} height={306} />
          </div>
          <div className={styles.cardWhite}>
            <h3 className={styles.cardTitle}>Быстрое обновление</h3>
            <p className={styles.cardText}>
              Мгновенное редактирование без дополнительных затрат на печать.
            </p>
          </div>

          <div className={styles.cardWhite}>
            <h3 className={styles.cardTitle}>QR-заказ</h3>
            <p className={styles.cardText}>
              Клиенты могут делать заказы напрямую через меню, снижая нагрузку на официантов и уменьшая количество ошибок.
            </p>
          </div>
          <div className={styles.imageOnly}>
            <Image src="/SolutionBlock/Frame_47.png" alt="QR" width={340} height={306} />
          </div>

          <div className={styles.cardWhite}>
            <h3 className={styles.cardTitle}>Фотографии блюд</h3>
            <p className={styles.cardText}>
              Качественные изображения повышают вероятность заказа на 30%.
            </p>
          </div>
          <div className={styles.imageOnly}>
            <Image src="/SolutionBlock/Frame_44.png" alt="Фото" width={340} height={306} />
          </div>
        </div>
      </div>
    </section>
  );
}
