import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import GlobalData from '../blogpost_data.json'

import profilePic from '../images/profile-pic.png'

function BlogDetail() {
  const {id}=useParams();
  const PostDetailed = GlobalData.blogposts.find(post => post.id == id);

  // console.log(id);
  // console.log(PostDetailed);
  // console.log(PostDetailed.attributes);

  const PostDetailedArticle = PostDetailed.article
  
  // const PostDetailedArticle = PostDetailed ? PostDetailed.attributes : []

  const elements = PostDetailedArticle.map((item) => {

    if (item.type === 'paragraph') {

      if (item.text.includes('<a href')) {
        const linkText = item.text.match(/<a href="(.*?)".*?>(.*?)<\/a>/)[2];
        const linkUrl = item.text.match(/<a href="(.*?)".*?>/)[1];

        // Dividir el texto en partes antes y después del enlace
        const textParts = item.text.split(/<a href=".*?".*?>.*?<\/a>/);

        return (
          <p key={item.text} className='line-clamp-6 mt-5 mb-3'>
            {textParts[0]}
            <Link to={linkUrl} className="inline-block cursor pointer">
              {linkText}
            </Link>
            {textParts[1]}
          </p>
        );
      } else {
        return (
          <p key={item.text} className='line-clamp-6 mt-5 mb-3'>
            {item.text}
          </p>
        );
      }
    } else if (item.type === 'image') {
      return <img key={item.src} src={item.src} alt={item.alt} className='rounded-lg object-contain w-full h-[250px] md:h-[380px] lg:h-[450px]' />;
    } else {
      throw new Error('Unknown type: ' + item.type);
    }
  });

  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-500 text-[14px]'>{PostDetailed.attributes.tags}</h3>
      <h3 className='text-[23px] font-bold'>{PostDetailed.attributes.title}</h3>

      <div className='flex items-center mt-5'>
        <img src={profilePic} className='w-[35px] rounded-full' />
        <div className='ml-2'>
          <h3 className='font-bold text-[12px]'>{PostDetailed.author}</h3>
          <h3 className='text-gray-500 text-[10px]'>{PostDetailed.date}</h3>
        </div>
      </div>
      
      <img src={PostDetailed.cover} className='w-full h-[250px] md:h-[320px] lg:h-[420px] object-cover rounded-lg mt-5'/>
      {/* <h3>{PostDetailed.attributes.description}</h3> */}
      <div id='article_post'>
        {elements}
      </div>
    </div>
  )
}

export default BlogDetail