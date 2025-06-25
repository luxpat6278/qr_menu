'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './FAQ.module.css'

import iconPlus from '../../../public/FAQ/Group_7825.svg'
import iconMinus from '../../../public/FAQ/Group_7826.svg'
import bgImage from '../../../public/FAQ/Vector.svg'
import card from '../../../public/FAQ/Mask_group_(3).svg'

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
    <section id = 'faq'className={styles.wrapper}>
      <div className={styles.container}>
      <Image
        src={bgImage}
        alt="Фон"
        width={1913}
        className={styles.bgImage}
        priority
      />
      <div className={styles.content}>
        <h2 className={styles.title}>F.A.Q.</h2>
        <div className={styles.faqList}>
          {data.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className={styles.icon}>
                  <Image
                    src={openIndex === index ? iconMinus : iconPlus}
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
     <Image
      src = {card}
      alt = "карточки"
      width = {780}
      height = {525}
      className = {styles.cardimage}
      priority
      />
      </div>
    </section>
  )
}
