import React from 'react'
import Slider from "react-slick";
import "./Carousel.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover: false,
        button:false
    
      };
  return (
    <div className='slider__container'>
      <Slider {...settings}>


 


      <div>
        <img className='slider__image' src="https://a.d-cd.net/FMAAAgABgOA-1920.jpg" alt="" />
        <div className='slider__text__retrocar'>
            <p>Tanınmış avtoblogger Fəxri Əsədov izləyicləri ilə görüşəcək.</p>
            <button class="clickbutton button-wiggle">Click Here </button>
            
        </div>
      </div>




      <div>
        <img className='slider__image' src="https://galerie.automobile.tn/min/2018/08/red-bull-car-park-drift-2018-36410.jpg    " alt="" />
        <div className='slider__text__retrocar'>
            <p>Red-Bull Car park drift yarışı keçiriləcək.</p>
            <button class="clickbutton button-wiggle">Click Here </button>
            
        </div>
      </div>






      <div>
        <img className='slider__image' src="https://www.carid.com/images/inspiration/infiniti/q50/18/1.jpg" alt="" />
        <div className='slider__text__retrocar'>
            <p>"Stance Culture" başlığı altında Bakıda static maşınların eventi baş tutdu.</p>
            <button class="clickbutton button-wiggle">Click Here </button>
            
        </div>
      </div>



      <div>
        <img className='slider__image' src="https://images.ctfassets.net/1fvlg6xqnm65/VEfGucsEcgDgTFYtfihV8/695f80c9e89667b00030b1f4b2b29ceb/Car__1_.jpg" alt="" />
        <div className='slider__text__retrocar'>
            <p>Formula 1 qran-prisinin həlledici mərhələsi başa çatdı.</p>
            <button class="clickbutton button-wiggle">Click Here </button>
            
        </div>
      </div>

    



      <div>
        <img className='slider__image' src="https://cdn.trend.az/2019/07/29/avtomobil_yurush_290719_03.jpg" alt="" />
        <div className='slider__text__retrocar'>
            <p>Azərbaycan Avtomobil Federasiyasının başçılığı ilə Klassik Avtomobillərin Sərgisi keçirildi.</p>
            <button class="clickbutton button-wiggle">Click Here </button>
            
        </div>
        
      </div>
     
    </Slider>
    </div>
  )
}

export default Carousel
