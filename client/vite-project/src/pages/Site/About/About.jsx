import React from 'react'
import "./About.scss"
import Header from '../../../layout/Site/Header/Header'
import MuiAccordion from '../../../components/MuiAccordion/MuiAccordion'
import Footer from '../../../layout/Site/Footer/Footer'
function About() {
  return (
<>
<Header/>
<section className='about__container'>

<div className='about__box'>
<div className='about__box__left'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Carspotters.jpg/1200px-Carspotters.jpg" alt="" />
    <p className='about__text'>Carspotting.az, Azərbaycan Avtomobil Federasiyasının (AAF) nəzdində 2019-cu ildə yaradılmışdır. Layihənin məqsədi avtomobil həvəskarlarına dəstək olmaq və ölkəmizdə bu sahəni inkişaf etdirməkdir.</p>
</div>
<div className='about__box__right'>
<MuiAccordion/>
</div>

</div>


</section>
<Footer/></>
  )
}

export default About
