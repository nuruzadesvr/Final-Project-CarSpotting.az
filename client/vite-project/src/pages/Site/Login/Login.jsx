import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import LoadingRegister from "../../../components/Loadingregister/LoadingRegister";
function Login() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({ 
    email: Yup.string().email("Please use a valid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      {loading ? (
        <LoadingRegister />
      ) : (
        <section className="login__container">
          <div className="login__box">
            <div>
              <div >
                <h2 className="">Login</h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block"
                        >
                          Email
                        </label>
                        <br />
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="input__boxer"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="errortext"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block"
                        >
                          Password
                          
                        </label>
                        <br />
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="input__boxer"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="errortext"
                        />
                      </div>
                      <button type="submit" className="loginbtn">
                        Login
                      </button> <br /> <br />
                      <p> Have an acoount?<Link className='registerlink' to="/register">Register</Link></p>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
