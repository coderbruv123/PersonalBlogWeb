import axios from "axios";
import { FaPen } from 'react-icons/fa';
import {formatDistanceToNow} from 'date-fns';
const Postadmin = ({id, title, content, updatedAt, uploadAt,loadPost }) => {
  const formatDate =(date)=>{
    return formatDistanceToNow(new Date(date),{addSuffix:true});
  }
  const handleDelete = async () => {
      try {
        const response = await axios({
          method: 'delete',
          url: `https://localhost:7261/api/PostApi/${id}`,
        });
        console.log(response);
        if(response.status === 204){
          alert("Post deleted successfully");
        }
        else{
          alert("Post not deleted due to some error");
        }
        loadPost();
      } catch (ex) {
        console.log("Error posting data", ex);
      }
    };
  return (
    <div className=" relative rounded-lg  bg-[#030226]  min-w-[20rem] hover:shadow-lg text-white transition-shadow duration-300 ease-in-out pb-5 max-w-[20rem] ">    
           <button className="absolute -right-3 -top-3  bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition"><FaPen size={14}/></button>
            <img className='w-full rounded-lg  h-[13rem] w-[20rem] mb-4  bg-white '  src=""/>
            <span className='text-gray-400 w-4 ' >{formatDate(uploadAt)}</span>
      <h1 className="text-3xl font-semibold p-2  mb-4">{title}</h1>
      <p className='pb-1 text-gray-500 '>{content}</p>
      <div className="p">
      <button onClick={handleDelete} className='bg-blue-500 py-1 px-3 text-white'>Delete</button>
      </div>
    </div>
  );};
export default Postadmin;
