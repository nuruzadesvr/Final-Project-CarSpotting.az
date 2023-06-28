import React from 'react'
import "./AddNews.scss"
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function AddNews() {
  const initalValues={
    content:"",
    eventtime:"",
    image:"",
    place:""
  }

  const validationSchema = Yup.object().shape({ 
    content: Yup.string().required("Event kontenti boş buraxılmamalıdır."),
    eventtime: Yup.string().required("Event tarixi boş buraxılmamalıdır ."),
    image: Yup.string().required("Event fotosu boş buraxılmamalıdır."),
    place: Yup.string().required("Event keçiriləcəyi məkan boş buraxılmamalıdır."),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
<>

<section className='add__news__container'>


<div className='eventnews__add__container'>
<Formik
  initialValues={initalValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
{({ errors, touched }) => (
<form>

<div className='input__container__eventnews'>
  <div className="input__box__eventnews">
    <div><label htmlFor="content">Event kontent</label></div>
    <div><Field type="text" id="content" name="content"/>
    <ErrorMessage name="content" component="div" className='errormessage'/>
    </div>

  </div>

  <div className="input__box__eventnews">
    <div><label htmlFor="eventtime"> Event time</label></div>
    <div><Field type="time" id="eventtime" name="eventtime"/>
    <ErrorMessage name="eventtime"component="div" className='errormessage'/>
    </div>

  </div>



  <div className="input__box__eventnews">
    <div><label  htmlFor="image">Event image</label></div>
    <div><Field type="file" id="image" name="image"/>
    <ErrorMessage name="image" component="div" className='errormessage'/>
    </div>

  </div>

  <div className="input__box__eventnews">

    <div><label htmlFor="place">Event Məkanı</label></div>
    <div><Field type="text" id="place" name="place"/>
    <ErrorMessage name="place"component="div" className='errormessage'/>
    </div>

  </div>

</div>
  <button type="submit" className="formik__add__eventnews__btn">
    Add Event
  </button> 
  </form>
  )}

 </Formik>
</div>


</section></>
  )
}

export default AddNews
