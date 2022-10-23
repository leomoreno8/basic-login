import React from 'react';
import styles from "./styles.module.scss";

export default function Products() {
    return (
        <div className={styles.grid}>
            <div className={styles.item} tabIndex={1}>
                <div className={styles.box}>
                    <div className={styles.text}><span>Product 1</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={2}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 2</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={3}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 3</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={4}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 4</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={5}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 5</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={6}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 6</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={7}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 7</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={8}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 8</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={9}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 9</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={10}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 10</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={11}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 11</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={12}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 12</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={13}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 13</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
            <div className={styles.item} tabIndex={14}>
                <div className={styles.box}>
                    <div className={styles.diamond}><span>Product 14</span></div>
                    <div className={styles.tooltip}>Buy Now!</div>
                </div>
            </div>
        </div>
    );
}