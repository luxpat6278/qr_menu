
import './globals.css'
import Header from '@/components/Header/Header'
import { ReactNode } from 'react'


import PromoSection from '@/components/Block1/Block1'
import HeroSection from '@/components/Block2/Block2'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import OptionBlock from '@/components/option/OptionBlock'
import Advantages from '@/components/Advantages/Advantages'
import Problems from '@/components/Problems/Problems'
import SolutionBlock from '@/components/SolutionBlock/SolutionBlock'
import FAQ from '@/components/FAQ/FAQ'
import PromoBlock from '@/components/PromoBlock/PromoBlock'
import Footer from '@/components/Footer/Footer'

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';


const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = localFont({
  src: [
    {
      path: './fonts/Bebas_Neue_Cyrillic/BebasNeueCyrillic.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bebas',
  display: 'swap',
});

const homevideo = localFont({
  src: [ 
    {
      path: './fonts/home-video-font/HomeVideoBold-R90Dv.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/home-video-font/HomeVideo-BLG6G.ttf',
      weight: '400 700',
      style: 'normal'
    }
  ],
  variable: '--font-home',
  display: 'swap'
});


export const metadata = {
  title: 'My Site',
  description: 'Описание сайта',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${bebasNeue.variable} ${homevideo.variable}`}>
      <body className="relative">
        <Header />
        <main className="pt-16"> 
                <PromoSection />
                <HeroSection />
                <HowItWorks />
                <OptionBlock />
                <Advantages />
                <Problems />
                <SolutionBlock />
                <FAQ />
                <PromoBlock />
                <Footer />


        </main>
          <div id="home" style={{ position: 'absolute', top: 0 }} />
        {/* Smooth scroll polyfill for Safari */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href');
                  if (targetId === '#') return;
                  
                  const targetElement = document.querySelector(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                    
                    // Update URL without page reload
                    if (history.pushState) {
                      history.pushState(null, '', targetId);
                    } else {
                      window.location.hash = targetId;
                    }
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}