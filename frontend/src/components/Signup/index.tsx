import React from 'react';
import styles from "./styles.module.scss";
import Link from 'next/link'
import ShadowButton from '../ShadowButton';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
import Axios from "axios"
import { ToastContainer } from 'react-toastify'
import ToastError from "../ToastError/index"


export default function Singup() {

  async function handleClickRegister(values: { name: string;  email: string; password: string; }) {
    const register = await Axios.post(process.env.API_URL + "user/create", {
      name: values.name,
      email: values.email,
      password: values.password,
    })
    console.log(register);
  }


  const validationLogin = yup.object().shape({
      name: yup
        .string()
        .required("This field is required"),
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
          initialValues={{'name': '', 'email': '', 'password': ''}}
          onSubmit={handleClickRegister}
          validationSchema={validationLogin}
          >
            <Form className={styles.inputs_container}>
              <div>
                <Field name="name" placeholder="Name" />
                <ErrorMessage 
                  component="span"
                  name="name"
                  className={styles.form_error}
                />
              </div>

              <div>
                <Field name="email" placeholder="Email" />
                <ErrorMessage 
                  component="span"
                  name="email"
                  className={styles.form_error}
                />
              </div>

              <div>
                <Field name="password" placeholder="Password" />
                <ErrorMessage 
                  component="span"
                  name="password"
                  className={styles.form_error}
                />
              </div>

              <div className={styles.button_login_box}> 
                <button type="submit">
                  <ShadowButton text='SING UP'/>
                </button>
              </div>

            </Form>
          </Formik>
          <div className={styles.create_account}>
            <span>Already have an account?</span>
            <Link href="/">
              <span className={styles.create_account_link}>LOGIN HERE</span>
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