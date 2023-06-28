import React from 'react'
import "./AddProduct.scss"
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function AddProduct() {
  const initalValues={
    product:"",
    price:"",
    image:"",
    about:""
  }

  const validationSchema = Yup.object().shape({ 
    product: Yup.string().required("məhsulun adı boş buraxıla bilməz"),
    image: Yup.string().required("məhsulun fotosu boş buraxıla bilməz"),
    about: Yup.string().required("məhsul haqqında məlumat daxil edin"),
    price: Yup.string().required("məhsulun qiyməti boş buraxıla bilməz"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
<>

<section className='add__product__container'>

<div>

<Formik
  initialValues={initalValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
{({ errors, touched }) => (
<form>

<div className='input__container__product'>
  <div className="input__box__product">
    <div><label htmlFor="product"> Product name </label></div>
    <div><Field type="text" id="product" name="product"/>
    <ErrorMessage name="product" component="div" className='error__message' />
    </div>

  </div>

  <div className="input__box__product">
    <div><label htmlFor="price"> Price</label></div>
    <div><Field type="number" id="price" name="price"/>
    <ErrorMessage name="price"component="div" className='error__message'/>
    </div>

  </div>



  <div className="input__box__product">
    <div><label  htmlFor="image"> Product image</label></div>
    <div><Field type="file" id="image" name="image"/>
    <ErrorMessage name="image" component="div" className='error__message'/>
    </div>

  </div>

  <div className="input__box__product">

    <div><label htmlFor="about"> Product About</label></div>
    <div><Field type="text" id="about" name="about"/>
    <ErrorMessage name="about"component="div" className='error__message'/>
    </div>

  </div>

</div>
  <button type="submit" className="formik__add__product__btn">
    Add Product
  </button> 
  </form>
  )}

 </Formik>

</div>
</section>

</>
  )
}

export default AddProduct
