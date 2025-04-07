import Searchb from "../components/Searchb";
import PostList from "../components/PostList";
import { useState, useEffect } from "react";
const Blog = ({posts}) => {

  const [Search,changeSearch] = new useState('');
  const [catg,changecatg] = new useState('');

  console.log(Search);
  console.log(catg);
  return (
    <div className="bg-[#02002e] min-h-[90vh] py-6 h-[100%]">
        <h1 className="text-5xl text-white">Blogs</h1>

        <Searchb changeSearch={changeSearch} changecatg={changecatg}  />
        <PostList posts={posts} Search={Search} catg={catg}/>
    </div>
  );
};

export default Blog;
 