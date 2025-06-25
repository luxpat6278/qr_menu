'use client';

import React, { useState, useRef, useEffect, FC, MouseEvent, CSSProperties } from 'react';
import Image from 'next/image';
import styles from '@/components/landing/Block2/Block2.module.css';

interface Offset { x: number; y: number; }
type LayerKey = 'large' | 'medium' | 'outline' | 'robot' | 'text';

const MAX_OFFSET = 50;
const settings: Record<'large' | 'medium' | 'outline', { factor: number; duration: string }> = {
  large: { factor: 1.2, duration: '0.4s' },
  medium: { factor: 0.5, duration: '0.7s' },
  outline: { factor: 1.5, duration: '0.5s' },
};

const HeroSection: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  const robotRef = useRef<HTMLDivElement>(null);
  const largeRef = useRef<HTMLDivElement>(null);
  const mediumRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-id');
          if (entry.isIntersecting && id) {
            setVisible(prev => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 }
    );

    [robotRef, largeRef, mediumRef, outlineRef, textRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: normX * 2 * MAX_OFFSET, y: normY * 2 * MAX_OFFSET });
  };

  const getStyle = (key: LayerKey, extraRotate = ''): CSSProperties => {
    if (!('large medium outline'.split(' ').includes(key))) return {};
    const { factor, duration } = settings[key as 'large'];
    const base = `${extraRotate} translate(${offset.x * factor}px, ${offset.y * factor}px)`;
    if (visible[key]) {
      const delayMap = { large: 0, medium: 0.2, outline: 0.4 };
      return {
        opacity: 1,
        transform: base,
        transition: `opacity 0.6s ease-out ${delayMap[key as keyof typeof delayMap]}s, transform ${duration} ease-out`,
      };
    }
    return { opacity: 0, transform: 'translateY(20px)' };
  };

  const textStyle: CSSProperties = visible['text']
    ? { opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s' }
    : { opacity: 0, transform: 'translateY(20px)' };

  return (
    <section
      className={styles.heroWrapper}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <Image src="/Block2img/blue_blob.png" alt="blob" className={styles.blob} width={600} height={600} />
          </div>

          <div ref={robotRef} data-id="robot" style={textStyle}>
            <Image src="/Block2img/robot.png" alt="Дружелюбный робот" className={styles.robot} width={600} height={600}/>
          </div>

          <div ref={largeRef} data-id="large" className={styles.foodBubbleLarge} style={getStyle('large')}>
            <Image src="/Block2img/burger.png" alt="Бургер" fill sizes="230px" />
          </div>

          <div ref={mediumRef} data-id="medium" className={styles.foodBubbleMedium} style={getStyle('medium')}>
            <Image src="/Block2img/pizza.png" alt="Пицца" fill sizes="160px" />
          </div>

          <div ref={outlineRef} data-id="outline" className={styles.outlineSquare} style={getStyle('outline', 'rotate(8deg)')}>
            <Image src="/Block2img/broccoli.png" alt="Брокколи" fill sizes="140px" />
          </div>
        </div>
        <div ref={textRef} data-id="text" className={styles.right} style={textStyle}>
          <h2 className={styles.heading}>ИИ-помощник</h2>
          <h2 className={styles.subheading}>/Он точно выучит ваше меню</h2>
          <ul className={styles.bulletList}>
            <li>Не требует заработной платы</li>
            <li>Не ошибается</li>
            <li>Всё запоминает</li>
            <li>Всегда знает, что предложить</li>
          </ul>
          <div className={styles.ribbon}>
            Впервые в Казахстане
            <Image src="/Block2img/union.png" alt="underline" className={styles.ribbonUnderline} width={200} height={30} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
