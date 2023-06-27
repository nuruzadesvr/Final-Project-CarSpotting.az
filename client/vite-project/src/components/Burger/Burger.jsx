import React,{ useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import "./Burger.scss"
import { Link } from 'react-router-dom';
function Burger() {
const [show,setShow]=useState(false);
const handleShow=()=>{
    setShow(true);
};
  
const handleClose=()=>{
    setShow(false);
};
  return (
<div >
    <button className='canvasbtn' variant='primary' onClick={handleShow}><MenuIcon/></button>
    <Offcanvas show={show} onHide={handleClose} className='canvasbox'  >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carspotting.az</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className='burgerlinkbox'>
            <ul>
  <li><Link className='burgerlink'  to="/">Home</Link></li>
  <li><Link className='burgerlink' to="/news">News</Link></li>
  <li><Link className='burgerlink' to="/shop">Shop</Link></li>
  <li><Link className='burgerlink' to="/about">About</Link></li>
  <li><Link className='burgerlink' to="/contact">Contact</Link></li>
  
  
</ul>
            </div>

        </Offcanvas.Body>
    </Offcanvas>
</div>
  )
}

export default Burger
