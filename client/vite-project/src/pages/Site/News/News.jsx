import React from 'react'
import "./News.scss"
import Header from '../../../layout/Site/Header/Header'
import Carousel from '../../../components/Carousel/Carousel'
import Footer from '../../../layout/Site/Footer/Footer'
import EventNews from '../../EventNews/EventNews'


function News() {

  return (
<>
<Header/>
<section className='news__container'>
<Carousel/>
<div className='news__box'>
<p className='eventnewstitle'>Event və Tədbirlər</p>
<EventNews/>

</div>
</section>
<Footer/>
</>
  )
}

export default News
