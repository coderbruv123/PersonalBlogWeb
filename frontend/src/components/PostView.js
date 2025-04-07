import React, { useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

const PostView = () => {

  const formatDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };
   useEffect (()=>{
    document.body.style.overflow ='hidden';

    return()=>{
        document.body.style.overflow =''
    }
   })


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"> {/* Centering and blur */}
      <div className="rounded-lg bg-[#030226] hover:shadow-lg text-white transition-shadow duration-300 ease-in-out text-white pb-5 max-w-[120vh]">    
        <img className="w-full rounded-lg h-[13rem] mb-4 bg-white" src="" alt="Post" />
        
        <span className="text-gray-400">{formatDate(new Date())}</span> {/* Example of how you might use the formatDate function */}

        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <h1 className="text-3xl font-semibold mb-4">This is the full post</h1>
        <p className="pb-1 text-gray-500">!</p>
        <div className="flex justify-between mx-2 text-sm text-gray-500">
          <button>Button</button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
