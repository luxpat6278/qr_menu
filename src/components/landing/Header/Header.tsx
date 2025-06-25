'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from '@/components/landing/Header/Header.module.css';

const HEADER_HEIGHT = 90;

export default function Header() {
  const router   = useRouter();
  const pathname = usePathname();

  type LinkID = 'home' | 'work' | 'advantages' | 'faq';
  const [activeLink, setActiveLink] = useState<LinkID>('home');
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 'home',       label: 'Главная',        href: '/#home',          icon: '/navbar_icon/Leading Icon.svg' },
    { id: 'work',       label: 'Принцип работы', href: '/#how-it-works',  icon: '/navbar_icon/Leading Icon (1).svg' },
    { id: 'advantages', label: 'Преимущества',   href: '/#advantages',    icon: '/navbar_icon/Leading Icon (2).svg' },
    { id: 'faq',        label: 'F.A.Q.',         href: '/#faq',           icon: '/navbar_icon/Leading Icon (3).svg' },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY      = window.scrollY;
      const viewportLine = scrollY + HEADER_HEIGHT + 10;

      for (const { id } of links) {
        const sectionId   = id === 'work' ? 'how-it-works' : id;
        const sectionElem = document.getElementById(sectionId);
        if (!sectionElem) continue;

        const top    = sectionElem.offsetTop;
        const bottom = top + sectionElem.offsetHeight;
        if (viewportLine >= top && viewportLine < bottom) {
          if (activeLink !== id) setActiveLink(id);
          return;
        }
      }

      if (scrollY < HEADER_HEIGHT / 2 && activeLink !== 'home') {
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink, links]);

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

  const handleLinkClick = (id: LinkID, href: string) => {
    setMenuOpen(false);
    if (pathname !== '/' && href.startsWith('/#')) {
      router.push(href);
      return;
    }
    const targetId = id === 'work' ? 'how-it-works' : id;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(id);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/#home" scroll={false} onClick={() => handleLinkClick('home', '/#home')}>
          <div className={styles.logoCircle}>
            <Image src="/Group_1.svg" alt="Логотип" className={styles.logo} width={48} height={48} />
          </div>
        </Link>

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
                    <Image src={link.icon} alt="" className={styles.icon} width={20} height={20} />
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.whatsapp}>
          <Image src="/Group_1000009698.png" alt="WhatsApp" width={48} height={48} />
        </div>

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
