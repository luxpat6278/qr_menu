import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/landing/Header/Header'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})

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
})

const homevideo = localFont({
  src: [
    {
      path: './fonts/home-video-font/HomeVideoBold-R90Dv.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/home-video-font/HomeVideo-BLG6G.ttf',
      weight: '400 700',
      style: 'normal',
    },
  ],
  variable: '--font-home',
  display: 'swap',
})

export const metadata = {
  title: 'My Site',
  description: 'Описание сайта',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${bebasNeue.variable} ${homevideo.variable}`}>
      <body className="relative">
        <Header />
        <main className="pt-16">{children}</main>
        <div id="home" style={{ position: 'absolute', top: 0 }} />
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
