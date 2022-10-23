import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/Footer'
import styles from '../../styles/Home.module.scss'
import Singup from '../../components/Signup/index';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Login</title>
        <meta name="description" content="Basic Login App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>SIGN UP</h1>
        <Singup />
      </main>
      <Footer />
    </div>
  )
}

export default Home
