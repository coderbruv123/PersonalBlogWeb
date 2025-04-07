import Searchb from "../components/Searchb";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput"
import { useState, useEffect } from "react";
const User1 = ({posts}) => {

  const [Search,changeSearch] = new useState('');
  const [catg,changecatg] = new useState('');

  console.log(Search);
  console.log(catg);
  return (
    <div className="bg-[#02002e] min-h-[90vh] py-6 h-[100%]">
        <h1 className="text-5xl text-white">User Panel</h1>

        <PostInput/>
        <PostList posts={posts} Search={Search} catg={catg}/>
    </div>
  );
};

export default User1;
 