import React from 'react';
import Hero from '../components/Hero';
import PostList from '../components/PostList';
import ParallaxText from '../animated/ParallaxText';
import Category from '../components/Category';
import Quote from '../components/Quote';

const Home = ({posts}) => {
  return (
    <div className='bg-[#02002e]'>
      <Hero/>
      <ParallaxText  baseVelocity={-2}>Framer Motion</ParallaxText>

      <Category/>


      <h1 className='text-4xl text-white mt-4'>Recent Posts</h1>
      <PostList posts={posts}/>
      <Quote/>
    </div>

);
};

export default Home;
 