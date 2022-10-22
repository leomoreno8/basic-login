import React from 'react';
import styles from "./styles.module.scss";

type ShadowButton = {
    text: string;
}

export default function ShadowButton(props: ShadowButton) {
    return ( 
      // SHADOW BUTTON CONTAINER
      <div className={styles.login_container}>
            <section>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.text}
            </section>
      </div>
    );
}