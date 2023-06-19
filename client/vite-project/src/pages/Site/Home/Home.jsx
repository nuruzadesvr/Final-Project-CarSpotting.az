import React from 'react'
import BackgroundVideo from '../../../components/BackgroundVideo/BackgroundVideo'
import "./Home.scss"
import Header from '../../../layout/Site/Header/Header'
import Footer from '../../../layout/Site/Footer/Footer'
import carspotvolga from "../../../images/carspot__volga.jpg"
import carspotgtr from "../../../images/carspot__gtr.jpg"
import carspot458 from "../../../images/carspot__458spyder.jpg"
import carspotcls from "../../../images/carspot__cls63.jpg"
import carspot370 from "../../../images/carspot__370z.jpg"
import carspotaudi from "../../../images/carspot__r8.jpg"
import carspotbmw from "../../../images/carspot__f10m5.jpg"
import carspotlada from "../../../images/carspot__lada.jpg"
function Home() {
  const videoSource ="https://video.wixstatic.com/video/c837a6_92774e1a278046cf94437a8275f664a5/1080p/mp4/file.mp4"
 
  return (
    <>
      <Header/>
 
<BackgroundVideo/>
<div className='carspotting__images'>


<div className='carspotting__vitrine'>

<div className='carspotting__card'>
<img src={carspotlada} alt="" />
</div>

<div className='carspotting__card'>
<img src={carspotvolga} alt="" />
</div>


<div className='carspotting__card'>
<img src={carspotgtr} alt="" />
</div>


<div className='carspotting__card'>
<img src={carspot458} alt="" />
</div>



<div className='carspotting__card'>
<img src={carspotcls} alt="" />
</div>



<div className='carspotting__card'>
<img src={carspot370} alt="" />
</div>



<div className='carspotting__card'>
<img src={carspotaudi} alt="" />
</div>


<div className='carspotting__card'>
<img src={carspotbmw} alt="" />
</div>









</div>
</div>



  <Footer/>
  </>
  )
}

export default Home
