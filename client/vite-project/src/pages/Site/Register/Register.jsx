import React, { useEffect, useState }  from 'react'
import "./Register.scss"
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoadingRegister from '../../../components/Loadingregister/LoadingRegister';
function Register() {

  const initialValues = {
    name: "",
    email: "",
    password: ""
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values) => {
    console.log(values);
 
  };


  
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      window.scrollTo({ top: 0 })
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }, [])

    
  return (
<>


{
    loading ?
    <LoadingRegister/>:
    <section  className='register__container'>

        <div className='register__box'>
          <div className='register__box__left'>
            <img src="https://cdn.dribbble.com/users/1418633/screenshots/15678998/media/5c46a9031ba2c975dfcf1b3ff4af3e4d.png?resize=400x0" alt="" />
          </div>




      <div className="register__form__box">
      
    <div>
    <h2 className="">Register</h2>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <br />
              <Field
                type="text"
                id="name"
                name="name"
                className={`p-2 border ${
                  errors.name && touched.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                className={`p-2 border ${
                  errors.email && touched.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold mb-1">
                Password
              </label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className={`p-2 border ${
                  errors.password && touched.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
    </div>
        </div>
    </section>
}

</>
  )
}

export default Register
