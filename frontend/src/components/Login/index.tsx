import React from 'react';
import styles from "./styles.module.scss";
import Link from 'next/link'
import ShadowButton from '../ShadowButton';

export default function Login() {
    return ( 
      // HEADER CONTAINER
      <div className={styles.login_container}>
        {/* LOGIN BOX  */}
        <div className={styles.login_box}>
            <input type="text" placeholder='Email or Username'/>
            <input type="text" placeholder='Password'/>
          <div className={styles.second_login_box}>
            <ShadowButton text='LOGIN'/>
          </div>
        </div>
      </div>
    );
}