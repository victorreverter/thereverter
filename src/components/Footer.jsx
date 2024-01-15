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
        <div id="logoContainer">
          <img id='logoFooter' src={logoFooter} alt="logo_footer" onClick={()=>navigate('/')}/>
        </div>
        <div id='explainContainer'>
          <p>A creative canvas where exploration, creativity and redefinition of some boundaries will happen.</p>
          <p>Made by <a href="https://victorreverter.com/" target='blank'>Victor Reverter</a></p>
        </div>
        <div id="socialContainer">
          <h3>Get in touch</h3>
          <div id="socialLinks" className='cursor-pointer'>
            <a href="https://www.instagram.com/victorreverter/" target='blank'><img src={ig_icon} alt="instagram_icon" /></a>
            <a href="https://www.linkedin.com/in/victorreverter/" target='blank'><img src={lkd_icon} alt="linkedin_icon" /></a>
            <a href="https://twitter.com/victor_reverter" target='blank'><img src={x_icon} alt="x_icon" /></a>
          </div>
        </div>
        {/* <div id="interestingContainer">
          <h3>Useful Links</h3>
          <div id="interestingLinks" className='cursor-pointer'>
            <a href="https://victorreverter.com/" target='blank'>Victor Reverter</a>
          </div>
        </div> */}
        <div id='copyrightBlog'>
          <p>© 2023 The Reverter. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer