import React, { useState } from 'react'
import banner from '../images/banner_search.png'
// import { IoSearchOutline } from 'react-icons/io5'

function Search() {

  const tags = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Design',
    },
    {
      id: 3,
      name: 'Humanity',
    },
    {
      id: 4,
      name: 'Tech',
    },
  ]

  const [activateIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-center flex-col'>
      <img id="banner_home" src={banner} className='rounded-lg object-cover' />
      <h3 id='section_title' className='flex justify-center'>Blog Posts</h3>
      {/* <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center text-gray-400'>
        <IoSearchOutline className='text-[20px]'/>
        <input type="text" placeholder='Search' className='outline-none bg-white ml-2' />
      </div>
      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul key={item.id} onClick={()=>setActiveIndex(index)}
          className={`${index==activateIndex ? 'bg-red-500 text-white' : null} p-1 pb-2 rounded-full
          md:rounded-full cursor-pointer md:px-4
          hover:scale-110 hover:border-[1px]
          border-red-500 transition-all duration-100 ease-in-out`}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div> */}
    </div>
  )
}

export default Search