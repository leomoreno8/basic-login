import React from 'react';
import styles from "./styles.module.scss";
import Link from 'next/link'
import ShadowButton from '../ShadowButton';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
import Axios from "axios"
import { ToastContainer } from 'react-toastify'
import ToastError from "../../components/ToastError/index"
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