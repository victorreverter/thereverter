import React from 'react'
import logo from '../images/logo.png'
// import { IoLogoYoutube } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()

  return (
    <div id='container_logo' className='flex justify-center items-center'>
      <img src={logo} className='w-[240px] cursor-pointer' onClick={()=>navigate('/thereverter/')} />

      {/*<ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('/')}>Home</li>
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>*/}
      {/* <button className='bg-red-500 rounded-full text-white flex items-center'>
        Subscribe <IoLogoYoutube className='ml-3 text-[20px]'/>
      </button> */}
    </div>
  )
}

export default Header