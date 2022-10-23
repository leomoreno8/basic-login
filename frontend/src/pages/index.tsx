import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Login from '../components/Login'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Login</title>
        <meta name="description" content="Basic Login App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>LOGIN</h1>
        <Login />
      </main>
      <Footer />
    </div>
  )
}

export default Home
