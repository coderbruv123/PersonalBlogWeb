import Searchb from "../components/Searchb";
import PostList from "../componentList/PostList";
import Modal from "../componentList/Modal";
import { useState, useEffect } from "react";
const Blog = ({posts,onClose,setShow}) => {

  const [Search,changeSearch] = new useState('');
  const [catg,changecatg] = new useState('');
  const [isVisible,changevisible] =useState(false) ;



  console.log(Search);
  console.log(catg);
  return (
    
    <div className="bg-[#02002e] min-h-[90vh] py-6 h-[100%]">
        <h1 className="text-5xl text-white">Blogs</h1>

        <Searchb changeSearch={changeSearch} changecatg={changecatg}  />
        <PostList posts={posts} Search={Search} catg={catg} onClose={onClose} setShow={setShow}/>
   
    </div>
  );
};

export default Blog;
 