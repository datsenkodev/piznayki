import Footer from '@/components/footer';
import Header from '@/components/header';
import '@sass/main.scss';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Пізнайки',
  description: 'Школа для дітей та підлітків у Вишгороді',
  // icons: {
  //   icon: '/favicon.ico',
  //   // apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang='uk'>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
