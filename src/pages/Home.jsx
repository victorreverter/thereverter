import React from 'react'
import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'
import GlobalData from '../blogpost_data.json'


function Home() {
  const PostsData = GlobalData.blogposts;

  // console.log(GlobalData.blogposts.length);
  // console.log(PostsData);

  return (
    <div id='home_container'>
      {/* Search */}
      <Search />
      {/* IntroPost */}
      {/* <IntroPost /> */}
      <IntroPost PostData={PostsData[0]} />
      {/* {PostsData.length>0 ? <IntroPost PostData={PostsData[0]} /> :null} */}
      {/* Blogs */}
      {/* <Blogs />   */}
      <Blogs PostData={PostsData} />
      {/* {PostsData.length>0 ? <Blogs PostData={PostsData} /> :null} */}
    </div>
  )
}

export default Home