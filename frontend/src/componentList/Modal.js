import { useEffect } from "react";

const Modal = ({isVisible,onClose,showPost}) => {

    useEffect(() => {
        if(isVisible) {
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = '';
        }
        return()=>{
            document.body.style.overflow = '';
        };
    },[isVisible]);

    const handleBackgroundClick = ()=>{
        onClose();
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }


    return (
        <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-10  z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={handleBackgroundClick}  >
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 w-[100vh] " onClick={stopPropagation}>
          <button onClick={onClose} className="float-right text-gray-500  hover:text-gray-800">✕</button>
          <div className="mt-4 "  >
          <h1 className='text-blue-500 text-5xl'>  {showPost.title}</h1>
        <h3 className='bg-blue-500 text-white'> Category: {showPost.category}</h3>

        <p className='text-blue-500 text-2xl'>{showPost.content}</p>
   
        <div className='flex  gap-3'> 
          <span>{showPost.uploadAt}</span>
          <span>{showPost.uploadAt}</span>
        </div>
          </div>
        </div>
      </div>
    )
} 
export default Modal;