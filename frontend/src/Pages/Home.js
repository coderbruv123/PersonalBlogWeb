import React, { useState } from 'react';
import Hero from '../components/Hero';
import PostList from '../componentList/PostList';
import Modal from '../componentList/Modal';
import ParallaxText from '../animated/ParallaxText';
import Category from '../components/Category';
import Quote from '../components/Quote';




const Home = ({posts,onClose,setShow}) => {




  return (
    <div className='bg-[#02002e]'>
      <Hero/>
      <ParallaxText  baseVelocity={-2}>Framer Motion</ParallaxText>

      <Category/>


      <h1 className='text-4xl text-white mt-4'>Recent Posts</h1>
      <PostList posts={posts} onClose={onClose} setShow={setShow}/>
      <Quote/>
      {/* <Modal isVisible={isVisible} onClose={onClose}>
        <h2 className='text-2xl text-white'>Modal Title</h2>
        <p className='text-white'>This is a modal content.</p>
        </Modal> */}
    </div>

);
};

export default Home;
 