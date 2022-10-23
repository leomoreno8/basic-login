import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import styles from '../../styles/Home.module.scss'
import jsCookie from 'js-cookie';
import Router from 'next/router';
import Products from '../../components/Products'
import Header from '../../components/Header'

const Home: NextPage = () => {

    function loggedFunction() {
        const cookie = jsCookie.get();
        if(!cookie.hasOwnProperty("token")) {
            setLogged(false);
            Router.push('/');
        } else {
            setLogged(true);
        }
    }

    const [logged, setLogged] = useState(false);
     
    useEffect(() => {
        loggedFunction();
      }, []);

  return (
      <div className={styles.container}>
        <Head>
            <title>Basic Login</title>
            <meta name="description" content="Basic Login App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {logged && (
            <>
                <main className={styles.main}>
                    <Header />
                    <h1>PRODUCTS</h1>
                    <Products />
                </main>
                <Footer />        
            </>
        )}
    </div>
  )
}

export default Home
