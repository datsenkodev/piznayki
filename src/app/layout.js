import '@sass/main.scss';

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
    <html lang='ua'>
      <body>{children}</body>
    </html>
  );
}
