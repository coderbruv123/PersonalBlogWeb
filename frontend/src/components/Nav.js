import React from 'react';
import { Link } from 'react-router-dom';
const Nav = ()  => {
  return (
    <div className='p-3  bg-[#030226]'>
        <nav className='flex justify-between items-center w-[95%]  '>
            <div>
                <h1 className='w-24 text-4xl text-white py-3'>Blog</h1>
            </div>
            <div className='w-20'>
                <ul className='flex items-center gap-[4vw]'>
                    <li>
                        <Link className='text-blue-100 hover:text-gray-500 text-2xl'  to="/">Home</Link>
                    </li>
                    <li>
                        <Link className=' text-blue-100 hover:text-gray-500 text-2xl'  to="/blog">Posts</Link>
                    </li>
                    <li>
                        <Link className=' text-blue-100 hover:text-gray-500 text-2xl'  to="/contact">Contact</Link>
                    </li>
                    <li>
                        <a className=' text-blue-100 hover:text-gray-500 text-2xl' href="#"></a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='bg-blue-600  text-white px-5 py-2 hover:bg-blue-500 glow-text '>Sign in</button>
            </div>
        </nav>
    </div>
  );
};

export default Nav;
