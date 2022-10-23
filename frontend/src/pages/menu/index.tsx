import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Footer from '../../components/Footer'
import styles from '../../styles/Home.module.scss'
import jsCookie from 'js-cookie';
import Router from 'next/router';
import Products from '../../components/Products'
import Header from '../../components/Header'

const Home: NextPage = () => {
    async function logout() {
        jsCookie.remove("token");
        Router.push('/');
    }
    
    useEffect(() => {
        const cookie = jsCookie.get();

        if(!cookie.hasOwnProperty("token")) {
            Router.push('/');
        } 
      }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Login</title>
        <meta name="description" content="Basic Login App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <button onClick={logout}>LOGOUT</button> */}
        <Header />
        <h1>PRODUCTS</h1>
        {/* <Singup /> */}
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default Home
