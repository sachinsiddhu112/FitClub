import React, { useState } from 'react'
import './Header.css';
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header' id='Header'>
      <img src={logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (<div 
      style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadiur: '5px' }}
      onClick={()=>setMenuOpened(true)}><img src={Bars} alt="" style={{ width: "1.5rem", height: "1.5rem",cursor:'pointer' }} /></div>) : (<ul className='header-menu'>
        <li>
          <Link  onClick={()=>setMenuOpened(false)}
          to='Header'
          activeClass='active'
          span={true}
          smooth={true}>Home</Link></li>
        <li >
          <Link
          onClick={()=>setMenuOpened(false)}
          to='Programs'
          span={true}
          smooth={true}>Programs</Link></li>
        <li ><Link
         onClick={()=>setMenuOpened(false)}
         to='Reasons'
         span={true}
         smooth={true}>Why us</Link
        ></li>
        <li ><Link
        onClick={()=>setMenuOpened(false)}
        to='Plans'
        span={true}
        smooth={true}>Plans</Link></li>
        <li >
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='Testimonials'
          span={true}
          smooth={true}>Testimonial</Link></li>
      </ul>)}

    </div>
  )
}

export default Header
