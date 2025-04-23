import Postadmin from '../components/Postadmin';
import {motion} from 'framer-motion'

const AdminList = ({ posts, Search, catg,loadPost }) => {
  const postsByCategory = catg && catg.trim()
    ? posts.filter(post => post.category.toLowerCase().includes(catg.toLowerCase()))
    : posts;


    const filteredPosts = Search && Search.trim()
    ? postsByCategory.filter(post => post.title.toLowerCase().includes(Search.toLowerCase()))
    : postsByCategory;

  return (
    <motion.div
     className='m-5 flex justify-center flex-wrap gap-[4vh]'
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0.5}}
     transition={{duration:1}}
     >
     
      {filteredPosts.map(post => (
           <motion.div
           key={post.id}
           initial={{ opacity: 0, y: 20 }}       
           animate={{ opacity: 1, y: 0 }}        
           exit={{ opacity: 0, y: 20 }}          
           transition={{ duration: 0.3 }}         
         >
        <Postadmin
          id={post.id}
          content={post.content}
          title={post.title}
          uploadAt={post.uploadAt}
          updatedAt={post.updatedAt}
          loadPost={loadPost}
        />
          </motion.div>
      ))}
    </motion.div>
  );
};

export default AdminList;
