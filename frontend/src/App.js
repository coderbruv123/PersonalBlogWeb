import { useEffect, useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router , Route , Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contactp from './Pages/Contactp';
import Login from './Pages/Login';
import AdminPanel from './Pages/AdminPanel';
import PrivateRoute from './Navigate';
import Modal from './componentList/Modal';
function App() {

  // const api = "https://localhost:7261/api/PostApi";

  const [isVisible,changevisible] =useState(false) ;

  const onClose = () => {

   console.log('Modal closed');
   changevisible(!isVisible);

  };

  const [loading, setLoading]= useState(false);
  const [posts, setPosts]= useState([
    {id: 1, title: 'Introduction', imageUrl:"", content: "Hello it's me prashant . Just a guy doing coding", category:"coding", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'},
    {id: 2, title: 'Introduction',imageUrl:"", content: "Hello it's me prashant . Just a guy doing coding", category:"blog", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'},
    {id: 3, title: 'Introduction',imageUrl:"", content: "Hello it's me prashant . Just a guy doing coding and this is gonna be the most anticipate fight of the generation",category:"experience", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'},
    {id: 4, title: 'Introduction to the test1',imageUrl:"", content: "Hello it's me prashant . Just a guy doing coding", uploadAt: '2025-03-06T10:05:41.563', category:"coding", updatedAt: '2025-03-06T10:05:41.563'},
    {id: 5, title: 'Introduction', imageUrl:"", content: "Hello it's me prashant . Just a guy doing coding", category:"experience", uploadAt: '2025-03-06T10:05:41.563', updatedAt: '2025-03-06T10:05:41.563'}
  ]);

  const [showPost, setShow]= useState({});
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
  useEffect(() => {


    loadPost();
  }, []);

  

  return (
    
    <Router className="">
    <div className="App" >
      <Nav/>
    
    <Routes>
    <Route path='/' element={<Home onClose={onClose}  posts={posts} setShow={setShow}/>} />
    <Route path='/blog'  element={<Blog posts={posts} onClose={onClose} setShow={setShow}/>}  />
    <Route path='/contact'  element={<Contactp/>}  />
    <Route path='/login'  element={<Login/>}  />
    <Route path='/admin'  element={<PrivateRoute><AdminPanel loadPost={loadPost} posts={posts}/></PrivateRoute>}  />
    

    </Routes>

    </div>
    <Modal isVisible={isVisible} onClose={onClose} showPost={showPost}>
       
        </Modal>
    <Footer/>

    </Router>
    
  );
}

export default App;
