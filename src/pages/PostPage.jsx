// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const PostPage = ({ match }) => {
//   const { id } = match.params;
//   const [postContent, setPostContent] = useState(null);

//   useEffect(() => {
//     // Dynamically import the file based on the id
//     const importPost = async () => {
//       try {
//         const module = await import(`../posts/${id}.jsx`);
//         setPostContent(module.default);
//       } catch (error) {
//         console.error(`Error loading post with id ${id}:`, error);
//       }
//     };

//     importPost();
//   }, [id]);

//   return (
//     <div>
//       <h3>{id}, this is the id</h3>
//       {postContent && <postContent.default />}
//     </div>
//   );
// };

// export default PostPage;

import React from 'react';
import { useParams } from 'react-router-dom'

const PostPage = ({ params }) => {
//   const { id } = params;
  const { id } = useParams()
  // console.log('Current ID:', id)

  // Importar dinámicamente el archivo basado en el id
  // const postContent = require(`../posts/${id}.jsx`).default
  const postContentModule = require(`../posts/${id}.jsx`);
  const PostItem = postContentModule.default;
  
  const postContent = (() => {
    try {
      return require(`../posts/${id}.jsx`).default;

    } catch (error) {
      console.error('Error loading post content:', error);
      return <div>Error loading post content</div>;
    }
  })();
  
  // console.log('Post Content:', postContent)

  return (
    <div>
      {/* <h3>{id}, this is the id</h3> */}
      <div><PostItem /></div>
    </div>
  );
};

export default PostPage;