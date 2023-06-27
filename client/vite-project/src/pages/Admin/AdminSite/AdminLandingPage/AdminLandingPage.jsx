import React from 'react'
import "./AdminLandingPage.scss"
import { Link } from 'react-router-dom'

function AdminLandingPage() {
  return (
<>
<section className='landingpage__container'>
<div className='landingpost__create__box'>
  <div className='landingpost__create__div__left'><h4>Landing Post Page</h4></div>
  <div className='landingpost__create__div__right'><button><Link  className='createbtn'  to="create">Create</Link></button></div>
</div>
</section>
</>
  )
}

export default AdminLandingPage
