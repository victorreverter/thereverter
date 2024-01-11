import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import profilePic from '../images/profile-pic.png'
// import GlobalData from '../assets/blogpost_data.json'

function IntroPost(PostData) {
  // const IntroPostData = GlobalData.blogposts[0]
  
  const IntroData = PostData.PostData
  const navigate=useNavigate()

  return (
    <div id="intro_post_container" className='grid grid-cols-1
    md:grid-cols-2 px-2.5 md:px-6
    lg:px-0 gap-8 cursor-pointer' onClick={()=>navigate('../posts/'+IntroData.url_name)}>
      <img src={ IntroData.cover } className='rounded-lg object-cover w-full h-[300px]'/>
      <div className='px-6 md:px-0'>
        <h4 className='text-red-500'>{ IntroData.attributes.tags }</h4>
        <h4 className='text-[23px] font-bold mt-5'>{ IntroData.attributes.title }</h4>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{ IntroData.attributes.description }</h4>
        <div className='flex items-center mt-5'>
          <img src={profilePic} className='w-[45px] rounded-full' />
          <div className='ml-2'>
            <h3 className='font-bold text-[16px]'>{ IntroData.author }</h3>
            <h3 className='text-gray-500 text-[14px]'>{ IntroData.date }</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPost