import React from 'react'
import "./AdminNews.scss"
import { Link } from 'react-router-dom'
export default function AdminNews() {
  return (
<>
<section className="admin__news__container">
<div className='news__create__box'>
  <div className='news__create__div__left'><h4>News Page</h4></div>
  <div className='news__create__div__right'><button><Link  className='createbtn' to="create">Create</Link></button></div>
</div>



<div className='eventnews__add__table'>
  <h4>Event News</h4>
  
  

  
</div>



</section>
</>
  )
}
