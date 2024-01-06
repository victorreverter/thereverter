import React from 'react'
import { useNavigate } from 'react-router-dom'

import logoFooter from '../images/logo_white.png'

import ig_icon from '../images/Instagram.png'
import lkd_icon from '../images/LinkedIn.png'
import x_icon from '../images/X.png'


function Footer() {
  const navigate=useNavigate()
  
  return (
    <div id='footerBox'>
      <div id='footerContainer'>
        <div id="logoContainer" className='divider_elem'>
          {/* <img id='logoFooter' src={logoFooter} alt="logo_footer" onClick={()=>navigate('/thereverter/')}/> */}
          <img id='logoFooter' src={logoFooter} alt="logo_footer" onClick={()=>navigate('/')}/>
        </div>
        <div id="socialContainer" className='divider_elem'>
          <h3>Get in touch</h3>
          <div id="socialLinks" className='cursor-pointer'>
            <a href="https://www.instagram.com/victorreverter/" target='blank'><img src={ig_icon} alt="instagram_icon" /></a>
            <a href="https://www.linkedin.com/in/victorreverter/" target='blank'><img src={lkd_icon} alt="linkedin_icon" /></a>
            <a href="https://twitter.com/victor_reverter" target='blank'><img src={x_icon} alt="x_icon" /></a>
          </div>
        </div>
        <div id="interestingContainer" className='divider_elem'>
          <h3>Useful Links</h3>
          <div id="interestingLinks" className='cursor-pointer'>
            <a href="https://victorreverter.com/" target='blank'>Victor Reverter</a>
          </div>
        </div>
        <div id='copyrightBlog' className='divider_elem'>
          <p>Copyright © 2024 by Victor Reverter</p>
        </div>
      </div>
    </div>
  )
}

export default Footer