import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";
import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../styles/font/Poppins-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/font/Poppins-400.woff2',
      weight: '400',
    },
    {
      path: '../styles/font/Poppins-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/font/Poppins-600.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../styles/font/Poppins-700.woff2',
      weight: '700',
      style: 'italic',
    }
  ],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
