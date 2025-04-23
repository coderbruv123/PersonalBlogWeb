import { useEffect, useState } from 'react';
import PostInput from '../components/PostInput';
import AdminList from '../componentList/Adminlist';
function AdminPanel({loadPost, posts}) {



  return (
    <div className="p-4">
    <div> 
        <button onClick={":"}>Logout</button>
    </div>
      <h2 className="text-2xl font-bold">Admin Panel</h2>

        <PostInput loadPost={loadPost}/>
        <AdminList posts={posts} loadPost={loadPost} />


    </div>
  );
}

export default AdminPanel;
