import React from 'react'
import "./SideBar.scss"
import { Link } from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import BookIcon from '@mui/icons-material/Book';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SlideshowIcon from '@mui/icons-material/Slideshow';
function SideBar() {
  return (
<>
<div className="sidebar">

  <h4>Carspotting.az</h4>
  <div className='navigation__container'>
    <ul>   
      <li className='navigation__text'>Navigation</li>
      <li><div className='navigation__box'><div className='navigation__icons'><SpeedIcon/></div><div><Link className='adminlinks'  to="">Dashboard</Link></div></div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><BookIcon/></div><div><Link className='adminlinks'  to="blog">Blog</Link></div></div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><NewspaperIcon/></div><div><Link className='adminlinks'  to="adminnews">News</Link></div> </div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><ProductionQuantityLimitsIcon/></div><div><Link className='adminlinks'  to="products">Products</Link></div></div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><PostAddIcon/></div><div><Link className='adminlinks'  to="landingpagepost">Landing Page Post</Link></div></div></li>  
      <li><div className='navigation__box'><div className='navigation__icons'><SlideshowIcon/></div><div><Link className='adminlinks'  to="slider">Slider</Link></div></div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><PersonIcon/></div><div><Link className='adminlinks'  to="users">Users</Link></div></div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><BorderBottomIcon/></div><div><Link className='adminlinks'  to="orders">Orders</Link></div></div></li>
      <li><div className='navigation__box'><div className='navigation__icons'><SettingsIcon/></div><div><Link className='adminlinks' to="settings">Settings</Link></div></div></li>
    </ul>
  </div>


</div>
</>
  )
}

export default SideBar
