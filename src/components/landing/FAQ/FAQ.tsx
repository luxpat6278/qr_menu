'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/components/landing/FAQ/FAQ.module.css'

const data = [
  {
    question: 'Что входит в стоимость?',
    answer:
      'Вы получаете: удобную админку, техническую поддержку, адаптацию под ваш бренд, хостинг и регулярные обновления.',
  },
  {
    question: 'Можно ли редактировать меню самостоятельно?',
    answer: 'Да, вы можете редактировать меню через админку в любое время.',
  },
  {
    question: 'Можно ли подключить онлайн-оплату?',
    answer: 'Да, мы поддерживаем интеграции с различными платёжными системами.',
  },
  {
    question: 'Что нужно для подключения?',
    answer: 'Оставьте заявку, и наш менеджер свяжется с вами для уточнения деталей.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.wrapper}>
      {/* Фоновое изображение */}
      <Image
        src="/FAQ/Vector.svg"
        alt="Фон"
        width={1913}
        height={600}
        className={styles.bgImage}
        priority
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>F.A.Q.</h2>

          <div className={styles.faqList}>
            {data.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <button className={styles.question} onClick={() => toggle(index)}>
                  <span>{item.question}</span>
                  <span className={styles.icon}>
                    <Image
                      src={
                        openIndex === index
                          ? '/FAQ/Group_7825.svg'
                          : '/FAQ/Group_7826.svg'
                      }
                      alt="toggle"
                      width={24}
                      height={24}
                    />
                  </span>
                </button>

                {openIndex === index && (
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Карточка справа */}
        <Image
          src="/FAQ/Mask_group_(3).svg"
          alt="карточка"
          width={780}
          height={525}
          className={styles.cardimage}
          priority
        />
      </div>
    </section>
  )
}
