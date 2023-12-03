import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { Modal } from '@/components/modal'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Modal isOpen />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
