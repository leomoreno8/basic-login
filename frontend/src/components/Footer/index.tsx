import React from 'react';
import styles from "./styles.module.scss";

export default function Footer() {
    return ( 
      <footer className={styles.footer}>
        <h4>Powered by</h4>
        <a
          href="https://github.com/leomoreno8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src='github-blue-icon.png' /> Leonardo Moreno
        </a>
      </footer>
    );
}