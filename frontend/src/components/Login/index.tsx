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

export default function Login() {

  async function handleClickLogin(values: { email: string; password: string; }) {
    let URL = process.env.NEXT_PUBLIC_APIURL + "/login";

    try {
      const login = await Axios.post(URL, {
        email: values.email,
        password: values.password,
      })

      if(login.data.error) {
        ToastError(login.data.error);
      } else {
        console.log(login.data.token);
        jsCookie.set('token', login.data.token);
        Router.push('/menu');
      }
      
    } catch (error) {
      ToastError("There was an error logging in. Try again.");
    }
  }

  const validationLogin = yup.object().shape({
      email: yup
        .string()
        .email("Invalid Email")
        .required("This field is required"),
      password: yup
        .string()
        .min(8, "Invalid Password")
        .required("This field is required"),
  });


    return ( 
      <div className={styles.login_container}>
        {/* LOGIN BOX  */}
        <div className={styles.login_box}>
          <Formik
          initialValues={{'email': '', 'password': ''}}
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
          >
            <Form className={styles.inputs_container}>
              <div>
                <Field name="email" placeholder="Email" />
                <ErrorMessage 
                  component="span"
                  name="email"
                  className={styles.form_error}
                />
              </div>

              <div>
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage 
                  component="span"
                  name="password"
                  className={styles.form_error}
                />
              </div>

              <div className={styles.button_login_box}> 
                <button type="submit">
                  <ShadowButton text='LOGIN'/>
                </button>
              </div>

            </Form>
          </Formik>
          <div className={styles.create_account}>
            <span>Don't have an account?</span>
            <Link href="/signup">
              <span className={styles.create_account_link}>SIGN UP HERE</span>
            </Link>
          </div>
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    );
}