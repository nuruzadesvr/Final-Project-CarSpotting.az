import React from 'react'
import "./Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
import Burger from '../../../components/Burger/Burger';
function Header() {
  return (
<> 
<section className='navbar__container'>
  <div className='navbar__up'>
     <div className='navbar__up__main'>
      <div className='navbar__up__left'><p>Free shipping on orders over $75. Call us 123-456-789</p></div>
      <div className='navbar__up__right'>
        <div className='input__box'>
          <div><SearchIcon className='search__icon'/></div>
          <div><input type="text" placeholder='Search...'/></div>
        </div>
        <div className='login'>
        <div className='login__icon'><PersonIcon/></div>
       
          <p><Link className='loginlink' to="/login">Login</Link></p>
          
       
        </div>
      </div>
     </div>
  </div>




<div className='navbar'>
<div className='navbar__left'>
  <div>
    <svg preserveAspectRatio="xMidYMid meet" data-bbox="10 55 180 90" viewBox="10 55 180 90" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-labelledby="svgcid--p6hckk-90bysg"><title id="svgcid--p6hckk-90bysg">Homepage</title>
    <g>
        <path d="M55 122.5c0 12.426-10.074 22.5-22.5 22.5S10 134.926 10 122.5 20.074 100 32.5 100 55 110.074 55 122.5z"></path>
        <path d="M167.5 100c-21.039 0-22.501-17.017-22.525-21.453.016-.347.025-.696.025-1.047 0-12.426-10.074-22.5-22.5-22.5h-45C65.074 55 55 65.074 55 77.5S65.074 100 77.5 100h45c20.596 0 22.58 14.832 22.597 20.411A22.889 22.889 0 0 0 145 122.5c0 12.426 10.074 22.5 22.5 22.5s22.5-10.074 22.5-22.5-10.074-22.5-22.5-22.5z"></path>
    </g>
</svg>
</div>
  <div>
    <p>carspotting.az</p>
  </div>
</div>
<div className='navbar__right fill'>
<div className='hamburger__icon__box'>
<Burger/>

</div>

  <div className='navbar__link__container'>
  <ul>
  <li className='list'><Link className='link' to="/">Home</Link></li>
  <li className='list'><Link className='link' to="/news">News</Link></li>
  <li className='list'><Link className='link' to="/shop">Shop</Link></li>
  <li className='list'><Link className='link' to="/about">About</Link></li>
  <li className='list'><Link className='link' to="/contact">Contact</Link></li>
  
  
</ul>
  </div>
</div>
</div>
  </section>
  </>
  )
}

export default Header
