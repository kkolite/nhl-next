import Layout from '@/components/Layout/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store/index'
import '../styles/global.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MyLoader } from '@/components/UI/loader'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <>
      <Provider store={store}>
        <Layout>
          {
            isLoading
            ? <MyLoader />
            : <Component {...pageProps} />
          }
        </Layout>
      </Provider>
    </>
  )
}
