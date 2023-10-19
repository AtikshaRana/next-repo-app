
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Footer from './component/footer'
import Header from './component/header'
import Styles from "../styles/common/header.module.scss";
import Head from 'next/head'
// import { myVariable } from '';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  // console.log(Pagedata);
  const response = await fetch("https://construction.autodesk.com/page-data/index/page-data.json");
  const data = await response.json()
  const footer = data.result.data.bottomNav.content;
  const header = data.result.data.topNav.content;
  const headAlternates = data.result.pageContext.tagAlternates;
  const parsedFooter = JSON.parse(footer);
  const parsedHeader = JSON.parse(header);

  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={inter.className}>
          <Header data={parsedHeader} alternates={headAlternates}/>
          <div className={Styles.topWrap}>
            {children}
          </div>
          <Footer data={parsedFooter}/>
        </body>
    </html>
  )
}
