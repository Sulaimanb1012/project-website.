import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav.png'

const Navbar = () => {
  const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className='nav-menu'>
        <li>
          <a className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </a>
          {menu==="home" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <a className='anchor-link' href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </a>
          {menu==="about" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <a className='anchor-link' href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </a>
          {menu==="services" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <a className='anchor-link' href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </a>
          {menu==="work" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <a className='anchor-link' href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>
          {menu==="contact" ? <img src={underline} alt=''/> : null}
        </li>

        
      </ul>
      <a href="#contact" className='nav-connect'>Connect With Me</a>
    </div>
  )
}

export default Navbar
