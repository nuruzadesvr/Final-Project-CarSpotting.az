import React from 'react'
import "./EventNews.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
        <div className='event__card__img__box'> <img src={eventimg1} alt="" /></div>
        <div className='event__text'>
        <div className='event__title__text'> <p>Cars and Coffe basciligi altinda tuning edlimis avtomobillerin eventi kecirilecek</p></div>
           <button class="button button-float">Ətraflı bax</button>
            
            <div className='event__news__post__time'>
            <div><p><AccessTimeIcon/></p> <p className='day'>15:00</p></div>
                <div><p><CalendarMonthIcon/></p> <p className='time'>19 Iyun</p></div>
            </div>
        </div>
   
    </div>


    <div className='event__card'>
        <div className='event__card__img__box'> <img src={eventimg2} alt="" /></div>
        <div className='event__text'>
        <div className='event__title__text'> <p>Sürətli idman avtomovillərinin yürüşü kecirilecek</p></div>
          <button class="button button-float">Ətraflı bax</button>
            <div className='event__news__post__time'>
            <div><p><AccessTimeIcon/></p> <p className='day'>09:00</p></div>
                <div><p><CalendarMonthIcon/></p> <p className='time'>29 Iyun</p></div>
            </div>
        </div>
    </div>

    

    <div className='event__card'>
        <div className='event__card__img__box'> <img src={eventimg3} alt="" /></div>
        <div className='event__text'>
        <div className='event__title__text'> <p>Avtoİdman həvəskarları üçün drift şou həyəcanı</p></div>
          <button class="button button-float">Ətraflı bax</button>
            <div className='event__news__post__time'>
            <div><p><AccessTimeIcon/></p> <p className='day'>17:00</p></div>
                <div><p><CalendarMonthIcon/></p> <p className='time'>19 Iyun</p></div>
            </div>
        </div>
    </div> 



    <div className='event__card'>
        <div className='event__card__img__box'> <img src={eventimg4} alt="" /></div>
        <div className='event__text'>
        <div className='event__title__text'> <p>Klassik avtomobillərin muzeyi,Hər kəs dəvətlidir </p></div>
          <button class="button button-float">Ətraflı bax</button>
            <div className='event__news__post__time'>
            <div><p><AccessTimeIcon/></p> <p className='day'>12:00</p></div>
                <div><p><CalendarMonthIcon/></p> <p className='time'>21 Iyun</p></div>
            </div>
        </div>
    </div>

    <div className='event__card'>
        <div className='event__card__img__box'> <img src={eventimg5} alt="" /></div>
        <div className='event__text'>
        <div className='event__title__text'> <p>Bakı klassik avtomobillərin yürüşü</p></div>
         <button class="button button-float">Ətraflı bax</button>
         <div className='event__news__post__time'>
            <div><p><AccessTimeIcon/></p> <p className='day'>18:00</p></div>
                <div><p><CalendarMonthIcon/></p> <p className='time'>28 Iyun</p></div>
            </div>
        </div>
    </div>



    <div className='event__card'>
        <div className='event__card__img__box'> <img src={eventimg6} alt="" /></div>
        <div className='event__text'>
           <div className='event__title__text'> <p>Drive Show Baku təşkilatçılğı ilə möhtəşəm drift şou və time attack həyəcanı</p></div>
            <button class="button button-float">Ətraflı bax</button>
            <div className='event__news__post__time'>
            <div><p><AccessTimeIcon/></p> <p className='day'>11:00</p></div>
                <div><p><CalendarMonthIcon/></p> <p className='time'>24 Iyun</p></div>
            </div>
        </div>
    </div> 

    
</section>



</>
  )
}

export default EventNews
