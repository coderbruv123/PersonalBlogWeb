import { useEffect, useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router , Route , Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PostView from './components/PostView';
import Contactp from './Pages/Contactp';
import User1 from './Pages/User1';
function App() {

  // const api = "https://localhost:7261/api/PostApi";


  const [loading, setLoading]= useState(false);
  const [posts, setPosts]= useState([
    {id: 1, title: 'Introduction', content: "Hello it's me prashant . Just a guy doing coding", category:"coding", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'},
    {id: 1, title: 'Introduction', content: "Hello it's me prashant . Just a guy doing coding", category:"blog", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'},
    {id: 1, title: 'Introduction', content: "Hello it's me prashant . Just a guy doing coding and this is gonna be the most anticipate fight of the generation",category:"experience", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'},
    {id: 1, title: 'Introduction to the test1', content: "Hello it's me prashant . Just a guy doing coding", uploadAt: '2025-03-06T10:05:41.563', category:"coding", updatedAt: '2025-03-06T10:05:41.563'},
    {id: 1, title: 'Introduction', content: "Hello it's me prashant . Just a guy doing coding", category:"experience", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'}
  ]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      try {
        const response = await axios.get("https://localhost:7261/api/PostApi");

        setPosts(response.data); 

      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  
  console.log(loading);
  console.log(posts);

  return (
    
    <Router className="">
    <div className="App" >
      <Nav/>
    
    <Routes>
    <Route path='/' element={<Home posts={posts}/>} />
    <Route path='/blog'  element={<Blog posts={posts}/>}  />
    <Route path='/contact'  element={<Contactp/>}  />
    <Route path='/user'  element={<User1 posts={posts}/>}  />

    </Routes>
   {/* <h1 className='text-3xl font-bold m-1'>Blog Posts</h1>
    <PostInput/>
    <PostList posts={posts} /> */}
    </div>
    {/* <PostView/> */}
    <Footer/>

    </Router>
    
  );
}

export default App;
