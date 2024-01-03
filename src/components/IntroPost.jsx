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
    lg:px-0 gap-8 cursor-pointer' onClick={()=>navigate('blog-detail/'+IntroData.id)}>
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
    // <div id="0" className='grid grid-cols-1
    // md:grid-cols-2 mt-10 px-10 md:px-15
    // lg:px-32 gap-8 m-4 cursor-pointer' onClick={()=>navigate('blog-detail/'+IntroPostData.id)}>
    //   <img src={ IntroPostData.cover } className='rounded-lg object-cover w-full h-[300px]'/>
    //   <div>
    //     <h4 className='text-red-500'>{ IntroPostData.attributes.tags }</h4>
    //     <h4 className='text-[23px] font-bold mt-5'>{ IntroPostData.attributes.title }</h4>
    //     <h4 className='line-clamp-6 text-gray-400 mt-5'>{ IntroPostData.attributes.description }</h4>
    //     <div className='flex items-center mt-5'>
    //       <img src={profilePic} className='w-[45px] rounded-full' />
    //       <div className='ml-2'>
    //         <h3 className='font-bold text-[16px]'>{ IntroPostData.author }</h3>
    //         <h3 className='text-gray-500 text-[14px]'>{ IntroPostData.date }</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className='grid grid-cols-1
    // md:grid-cols-2 mt-10 px-10 md:px-15
    // lg:px-32 gap-8 m-4 cursor-pointer' onClick={()=>navigate('blog-detail')}>
    //   <img src={postCover} className='rounded-lg object-cover w-full h-full'/>
    //   <div>
    //     <h4 className='text-red-500'>Personal</h4>
    //     <h4 className='text-[23px] font-bold mt-5'>This is the intro Blog</h4>
    //     <h4 className='line-clamp-6 text-gray-400 mt-5'>This is the post description, a short text where you explain the main meaning of the post and how we can made possible the blog and their articles...</h4>
    //     <div className='flex items-center mt-5'>
    //       <img src={profilePic} className='w-[45px] rounded-full' />
    //       <div className='ml-2'>
    //         <h3 className='font-bold text-[16px]'>Victor Reverter</h3>
    //         <h3 className='text-gray-500 text-[14px]'>28 Dec 2023</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default IntroPost