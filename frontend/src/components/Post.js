import React from 'react';
import {formatDistanceToNow} from 'date-fns';
const Post = ({post,onClose,setShow }) => {

  const loadPost=()=>{
    setShow(post);
    
    onClose();
  }

  const formatDate =(date)=>{
    return formatDistanceToNow(new Date(date),{addSuffix:true});
  }
  return (
    <div className="rounded-lg  bg-[#030226]  min-w-[20rem] hover:shadow-lg text-white transition-shadow duration-300 ease-in-out pb-5 max-w-[20rem] " onClick={loadPost}>    
            <img className='w-full rounded-lg  h-[13rem] w-[20rem] mb-4  bg-white '  src=""/>
            <span className='text-gray-400 w-4 ' >{formatDate(post.uploadAt)}</span>

      <h1 className="text-3xl font-semibold  mb-4">{post.title}</h1>
      <p className='pb-1 text-gray-500 '>{post.content}</p>
      <div className="flex justify-between mx-2 text-sm text-gray-500">
      <button/>
      </div>
    </div>
  );
};

export default Post;
