import { FaInstagram, FaRedditAlien } from 'react-icons/fa';
import profileImg from '../images/profilepic.jpg';
import {easeIn, motion} from 'framer-motion';

const Hero = () => {

  
  return (
    <motion.div initial={{opacity:0}} animate={{translateX:0, translateY:0,opacity:1,scale:1}} transition={{duration:1,ease:"easeInOut"}}  className="relative flex items-center justify-center   h-[40rem] p-8 bg-[#030226] ">
          <div id="particles-container glow-text" className="absolute w-full flex flex-wrap gap-[4rem] h-[45rem]"></div>

      <div className="w-full max-w-3xl mx-5 text-left  ">
        <h1 className="text-6xl font-bold text-white mb-5"> <span className='glow-text'>Hi</span>, this is Prashant Giri</h1>
        <p className="text-xl text-gray-300 mt-10  ">
        And this is my personal blog webpage about my experiences and thoughts on various topics and just a page to update my future progress.
        </p>
        <button className='bg-blue-800 text-white p-2 px-5 my-5 '> Posts</button>
      </div>

      <motion.div initial={{ translateX:90, translateY:90, scale:0.2,opacity:0.5 }} animate={{translateX:0, translateY:0,opacity:1,scale:1}} transition={{duration:1.2}} className="">
        <img 
          // src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png" 
          src={profileImg}
          alt="Personal Blog" 
          className="w-120 h-120 bg-white object-cover rounded-full shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-blue-500 hover:ring-opacity-5"
        />
      </motion.div>

      <div className="absolute bottom-8 flex space-x-6 left-1/2 transform -translate-x-1/2">
        <button className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700">
          <FaInstagram size={20} />
        </button>
        <button className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700">
          <FaRedditAlien size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
