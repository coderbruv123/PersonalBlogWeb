import { useEffect } from "react";

const Modal = ({isVisible,onClose,children}) => {

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
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={handleBackgroundClick}  >
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-md" onClick={stopPropagation}>
          <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-800">✕</button>
          <div className="mt-4" >{children}</div>
        </div>
      </div>
    )
} 
export default Modal;