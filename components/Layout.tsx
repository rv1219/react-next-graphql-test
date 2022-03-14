import React, { ReactNode } from 'react'
import Head from 'next/head'

// Import all required component here
import asyncComponent from '@/common/asyncComponent';
const Header = asyncComponent(() => import("@/common/Header"));
const Footer = asyncComponent(() => import("@/common/Footer"));


type Props = {
  children: () => React.ReactNode
  title?: string
  launchesPast?: any;
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
