import React from 'react';
import styles from "./styles.module.scss";
import Router from 'next/router';
import jsCookie from 'js-cookie';

export default function Header() {
    async function logout() {
        jsCookie.remove("token");
        Router.push('/');
    }
    
    return ( 
      <div className={styles.header_container}>
        <div className={styles.header_box}>
            <span>Hello! Welcome!</span>
            <button  onClick={logout} className={styles.logout_link}>LOGOUT</button>
        </div>
      </div>
    );
}