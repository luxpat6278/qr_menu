'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

import logo         from '../../../public/Group_1.svg';
import whatsappIcon from '../../../public/Group_1000009698.png';

import iconHome        from '../../../public/navbar_icon/Leading Icon.svg';
import iconWork        from '../../../public/navbar_icon/Leading Icon (1).svg';
import iconAdvantages  from '../../../public/navbar_icon/Leading Icon (2).svg';
import iconFAQ         from '../../../public/navbar_icon/Leading Icon (3).svg';

const HEADER_HEIGHT = 90;

export default function Header() {
  /* --- хук роутера и путь --- */
  const router   = useRouter();
  const pathname = usePathname();

  /* --- состояние --- */
  type LinkID = 'home' | 'work' | 'advantages' | 'faq';
  const [activeLink, setActiveLink] = useState<LinkID>('home');
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [menuOpen, setMenuOpen] = useState(false);

  /* --- нав-массив --- */
  const links = [
    { id: 'home',       label: 'Главная',        href: '/#home',          icon: iconHome },
    { id: 'work',       label: 'Принцип работы', href: '/#how-it-works',  icon: iconWork },
    { id: 'advantages', label: 'Преимущества',   href: '/#advantages',    icon: iconAdvantages },
    { id: 'faq',        label: 'F.A.Q.',         href: '/#faq',           icon: iconFAQ },
  ] as const;

  /* ────────────────── 1. Отслеживаем скролл ────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY      = window.scrollY;
      const viewportLine = scrollY + HEADER_HEIGHT + 10;   // «линия отсечения»

      /* ищем секцию, которая пересечена этой линией */
      for (const { id } of links) {
        const sectionId   = id === 'work' ? 'how-it-works' : id;
        const sectionElem = document.getElementById(sectionId);
        if (!sectionElem) continue;

        const top    = sectionElem.offsetTop;
        const bottom = top + sectionElem.offsetHeight;
        if (viewportLine >= top && viewportLine < bottom) {
          if (activeLink !== id) setActiveLink(id);
          return;                 // совпадение найдено → выходим
        }
      }

      /* если НИ одна секция не совпала */
      if (scrollY < HEADER_HEIGHT / 2 && activeLink !== 'home') {
        // строго в самом верху страницы подсвечиваем «Главная»
        setActiveLink('home');
      }
      // иначе оставляем прежнее значение, не «отскакиваем» к home
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();                      // первичный вызов
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink, links]);

  /* ────────────────── 2. Сдвигаем индикатор ────────────────── */
  useEffect(() => {
    const linkEl  = document.getElementById(`nav-${activeLink}`);
    const listEl  = document.querySelector(`.${styles.navList}`) as HTMLElement | null;
    if (linkEl && listEl) {
      const { left: linkLeft, width } = linkEl.getBoundingClientRect();
      const { left: listLeft }        = listEl.getBoundingClientRect();
      setIndicatorStyle({
        width:     `${width}px`,
        transform: `translateX(${linkLeft - listLeft}px)`,
      });
    }
  }, [activeLink, menuOpen]);

  /* ────────────────── 3. Клик по пункту меню ────────────────── */
  const handleLinkClick = (id: LinkID, href: string) => {
    setMenuOpen(false);             // закрываем бургер

    // 3.1. если мы НЕ на главной странице → навигируемся на /
    if (pathname !== '/' && href.startsWith('/#')) {
      router.push(href);            // /#id
      return;
    }

    // 3.2. если уже на /, скроллим плавно
    const targetId = id === 'work' ? 'how-it-works' : id;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setActiveLink(id);
  };

  /* ────────────────── 4. Render ────────────────── */
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>

        {/* логотип = возврат на #home */}
        <Link
          href="/#home"
          scroll={false}
          onClick={() => handleLinkClick('home', '/#home')}
        >
          <div className={styles.logoCircle}>
            <Image src={logo} alt="Логотип" className={styles.logo} />
          </div>
        </Link>

        {/* нав-меню */}
        <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.indicator} style={indicatorStyle} />
          <ul className={styles.navList}>
            {links.map(link => (
              <li key={link.id}>
                <Link
                  id={`nav-${link.id}`}
                  href={link.href}
                  scroll={false}
                  onClick={() => handleLinkClick(link.id, link.href)}
                  className={activeLink === link.id ? styles.active : ''}
                >
                  <span className={styles.iconWrapper}>
                    <Image src={link.icon} alt="" className={styles.icon} />
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* WhatsApp */}
        <div className={styles.whatsapp}>
          <Image src={whatsappIcon} alt="WhatsApp" width={48} height={48} />
        </div>

        {/* бургер-иконка */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}