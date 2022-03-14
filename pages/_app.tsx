import React from 'react'
import { AppProps } from 'next/app'

// Import all required component here
import asyncComponent from '@/common/asyncComponent';
const Layout = asyncComponent(() => import("@/components/Layout"));

// Import global context
import { GlobalProvider } from "@/context/GlobalContext";

// Import global style here
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </>
  )

}

export default MyApp;