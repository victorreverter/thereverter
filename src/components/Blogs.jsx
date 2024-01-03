import React from 'react'
import { useNavigate } from 'react-router-dom'
// import GlobalData from '../assets/blogpost_data.json'

import profilePic from '../images/profile-pic.png'

// import cover1 from '../assets/posts_covers/1_baseball_on_fire.jpg'
// import cover2 from '../assets/posts_covers/2_market_eastern_europe.jpg'
// import cover3 from '../assets/posts_covers/3_market_havanna.jpg'

function Blogs(PostData) {
  // const PostsData = GlobalData.blogposts;
  const PostsData = PostData.PostData
  const navigate=useNavigate();

  // console.log(PostsData);

  return (
    <div id="blogs_container" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-8 md:px-6 lg:px-0 gap-8'>
      {PostsData.slice(1).map((item)=>(
        <div key={item.id} className='mt-8 mb-4 cursor-pointer' onClick={()=>navigate('blog-detail/'+item.id)}>
          <img src={item.cover} className='w-full rounded-lg
          object-cover h-[200px]'/>
          <h3 className='text-red-500 mt-3'>{item.attributes.tags}</h3>
          <h3 className='font-bold mt-3'>{item.attributes.title}</h3>
          <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.attributes.description}</h3>
          <div className='flex items-center mt-5'>
            <img src={profilePic} className='w-[35px] rounded-full' />
            <div className='ml-2'>
              <h3 className='font-bold text-[12px]'>{item.author}</h3>
              <h3 className='text-gray-500 text-[10px]'>{item.date}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    // mt-10 px-10 md:px-15 lg:px-32 gap-8'>
    //   <div className='m-4 cursor-pointer' onClick={()=>navigate('blog-detail')}>
    //     <img src={cover1} className='w-full rounded-lg
    //     object-cover h-[200px]'/>
    //     <h3 className='text-red-500 mt-3'>Tag</h3>
    //     <h3 className='font-bold mt-3'>Title</h3>
    //     <h3 className='line-clamp-3 text-gray-400 mt-3'>Description of the blog post to be aware of what it had been written on it...</h3>
    //     <div className='flex items-center mt-5'>
    //       <img src={profilePic} className='w-[35px] rounded-full' />
    //       <div className='ml-2'>
    //         <h3 className='font-bold text-[12px]'>Victor Reverter</h3>
    //         <h3 className='text-gray-500 text-[10px]'>28 Dec 2023</h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='m-4 cursor-pointer'>
    //     <img src={cover2} className='w-full rounded-lg
    //     object-cover h-[200px]'/>
    //     <h3 className='text-red-500 mt-3'>Tag</h3>
    //     <h3 className='font-bold mt-3'>Title</h3>
    //     <h3 className='line-clamp-3 text-gray-400 mt-3'>Description of the blog post to be aware of what it had been written on it...</h3>
    //     <div className='flex items-center mt-5'>
    //       <img src={profilePic} className='w-[35px] rounded-full' />
    //       <div className='ml-2'>
    //         <h3 className='font-bold text-[12px]'>Victor Reverter</h3>
    //         <h3 className='text-gray-500 text-[10px]'>28 Dec 2023</h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='m-4 cursor-pointer'>
    //     <img src={cover3} className='w-full rounded-lg
    //     object-cover h-[200px]'/>
    //     <h3 className='text-red-500 mt-3'>Tag</h3>
    //     <h3 className='font-bold mt-3'>Title</h3>
    //     <h3 className='line-clamp-3 text-gray-400 mt-3'>Description of the blog post to be aware of what it had been written on it...</h3>
    //     <div className='flex items-center mt-5'>
    //       <img src={profilePic} className='w-[35px] rounded-full' />
    //       <div className='ml-2'>
    //         <h3 className='font-bold text-[12px]'>Victor Reverter</h3>
    //         <h3 className='text-gray-500 text-[10px]'>28 Dec 2023</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Blogs