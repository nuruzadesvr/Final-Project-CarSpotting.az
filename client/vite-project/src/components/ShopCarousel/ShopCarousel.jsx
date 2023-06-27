import React from 'react'
import "./ShopCarousel.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ShopCarousel() {
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
<>
<div className='shopslider__container'>
<Slider {...settings}>
<div className='shopslider__image'>
        <h3><img src="https://images.hepsiburada.net/banners/s/0/960-352/banner_20221206162448.jpeg/format:webp" alt="" /></h3>
      </div>
      <div className='shopslider__image'>
        <h3><img src="https://images.hepsiburada.net/banners/s/0/960-352/banner_20220301143933.png/format:webp" alt="" /></h3>
      </div>
      <div className='shopslider__image'>
        <h3><img src="https://images.hepsiburada.net/banners/s/0/960-352/banner_20211026150147.png/format:webp" alt="" /></h3>
      </div>
      <div className='shopslider__image'>
        <h3><img src="https://images.hepsiburada.net/banners/s/0/960-352/banner_20211026150538.png/format:webp" alt="" /></h3>
      </div>

    </Slider>
</div>
</>
  )
}

export default ShopCarousel
