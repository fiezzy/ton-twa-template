import { FC } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={inter.className}>Home page</main>
    </>
  )
}

export default Home
