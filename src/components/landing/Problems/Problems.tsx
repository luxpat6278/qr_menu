'use client';

import styles from '@/components/landing/Problems/Problems.module.css';
import Image from 'next/image';

const problems = [
  {
    icon: '/Problems/Clip_path_group_(1).svg',
    title: 'Нет фото',
    description: 'Без фото блюд гость выбирает наугад. А с фото — хочет попробовать всё.',
  },
  {
    icon: '/Problems/Group_1000009696.svg',
    title: 'Устаревание',
    description: 'Добавить новое блюдо? Поднять цену? Придётся перепечатывать всё — долго и дорого.',
  },
  {
    icon: '/Problems/Group_1000009695.svg',
    title: 'Ошибки',
    description: 'Официанты могут не расслышать, забыть или перепутать заказ — это влияет на репутацию.',
  },
  {
    icon: '/Problems/Clip_path_group_(3).svg',
    title: 'Непривлекательность',
    description: 'Бумажные меню пачкаются, рвутся, впитывают запахи и жир — это антиреклама вашего заведения.',
  },
  {
    icon: '/Problems/Clip_path_group_(2).svg',
    title: 'Ограниченность',
    description: 'Клиент не может посмотреть меню заранее или скинуть другу — вы теряете посетителей ещё до визита.',
  },
  {
    icon: '/Problems/Clip_path_group_(4).svg',
    title: 'Реклама в никуда',
    description: 'Таргетологи настраивают рекламу вслепую и сливают бюджет.',
  },
];

export default function Problems() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>ПРОБЛЕМЫ</h2>
      <div className={styles.grid}>
        {problems.map((problem, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconWrapper}>
              <Image src={problem.icon} alt={problem.title} width={85} height={85} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDescription}>{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
