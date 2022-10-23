import React from 'react';
import styles from "./styles.module.scss";

type ShadowButtonProps = {
    text: string;
}

export default function ShadowButton(props: ShadowButtonProps) {
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