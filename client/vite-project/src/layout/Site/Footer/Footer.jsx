import React from 'react'
import "./Footer.scss"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom'
function Footer() {
  return (
<>
<section className='site__footer__container'>


<div className='footer__container'>

<div className='icon__container'>
  <h5>Connect With Us</h5>
<div class="btn_container">
          
<div>          <a href="https://www.tiktok.com/@carspotting.az?is_from_webapp=1&sender_device=pc" class="btn btn--1">
              <div className='content'>
                  <div className='front'>
                      <div className='border'></div>
                     <div className='tiktokiconbox'><MusicNoteIcon className='tiktokicon'/></div> 
                  </div>
                  <div className='back'>
                      <div className='border'></div>
                      <p>TikTok</p>
                  </div>
              </div>
          </a></div>
          
<div>
<a href="https://www.instagram.com/carspotting.az/" class="btn btn--2">
              <div className='content'>
                  <div className='front'>
                      <div className='border'></div>
                      <InstagramIcon className='footer__icon'/>
                  </div>
                  <div className='back'>
                      <div className='border'></div>
                      <p>Instagram</p>
                  </div>
              </div>
          </a>
          
</div>
          <div>
          <a href="https://youtube.com/@azcarsmedia" class="btn btn--3">
              <div className='content'>
                  <div className='front'>
                      <div className='border'></div>
                      <YouTubeIcon className='footer__icon'/>
                  </div>
                  <div className="back">
                      <div className='border'></div>
                      <p>Youtube</p>
                  </div>
              </div>
          </a>
          
          
          </div>
          
</div>
</div>

<div className='footer__routing'>
  <h5>Navigation</h5>

  <ul>
  <li className='list'><Link className='foot__page__link' to="/">Home</Link></li>
  <li className='list'><Link className='foot__page__link' to="/news">News</Link></li>
  <li className='list'><Link className='foot__page__link' to="/shop">Shop</Link></li>
  <li className='list'><Link className='foot__page__link' to="/about">About</Link></li>
  <li className='list'><Link className='foot__page__link' to="/contact">Contact</Link></li>
</ul>

</div>

<div className='ourservices'>
  <h5>Our Services</h5>
  <ul>
    <li>Our Story</li>
    <li>Benefits</li>
    <li>About Carspotting</li>
    <li>Team</li>
    <li>Careers</li>
  </ul>
</div>


<div className='subscribe__box'>
    <h5>SUBSCRIBE CARSPOTTING.AZ</h5>
    <p>Get all the latest information on Events, Sales and Offers.</p>
    <div><input type="text" name="" id=""  placeholder='Enter your E-mail adress...'/></div>

    <button class="subscribebtn btn-border-4">Sign Up</button>


</div>

  
</div>
  
</section>
</>
  )
}

export default Footer
