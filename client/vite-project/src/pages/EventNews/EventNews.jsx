import React from 'react'
import "./EventNews.scss"
import eventimg1 from "../../images/event__img1.jpg"
import eventimg2 from "../../images/event__img2.jpg"
import eventimg3 from "../../images/event__img3.jpg"
import eventimg4 from "../../images/event__img4.jpg"
import eventimg5 from "../../images/event__img5.jpg"
import eventimg6 from "../../images/event__img6.jpg"
function EventNews() {
  return (
<>
<section className='eventnews__container'>

    <div className='event__card'>
        <div> <img src={eventimg1} alt="" /></div>
        <div className='event__text'>
            <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p>
            <button>Ətraflı bax</button>
        </div>
    </div>


    <div className='event__card'>
        <div> <img src={eventimg2} alt="" /></div>
        <div className='event__text'>
            <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p>
            <button>Ətraflı bax</button>
        </div>
    </div>

    <div className='event__card'>
        <div> <img src={eventimg3} alt="" /></div>
        <div className='event__text'>
            <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p>
            <button>Ətraflı bax</button>
        </div>
    </div>

    <div className='event__card'>
        <div> <img src={eventimg4} alt="" /></div>
        <div className='event__text'>
            <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p>
            <button>Ətraflı bax</button>
        </div>
    </div>

    <div className='event__card'>
        <div> <img src={eventimg5} alt="" /></div>
        <div className='event__text'>
            <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p>
            <button>Ətraflı bax</button>
        </div>
    </div>



    <div className='event__card'>
        <div> <img src={eventimg6} alt="" /></div>
        <div className='event__text'>
            <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p>
            <button>Ətraflı bax</button>
        </div>
    </div>
</section>



</>
  )
}

export default EventNews
