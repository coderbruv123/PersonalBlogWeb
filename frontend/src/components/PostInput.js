import axios from "axios";
import { useState } from "react";

const PostInput = () => {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");

  const contentchange = (e) => {
    setContent(e.target.value);
  };

  const Titlechange = (e) => {
    setTitle(e.target.value);
  };

  // Function to format the date into "YYYY-MM-DDTHH:mm:ss"
  const formatDate = (date) => {
    return date.toISOString().split(".")[0]; // Format date and remove milliseconds
  };

  const showObj = async () => {
    const updatedA = formatDate(new Date());
    const uploadedA = formatDate(new Date());
    console.log([{ Title, Content, uploadedA, updatedA }]);

    try {
      // Await the response from axios
      const response = await axios({
        method: 'post',
        url: 'https://localhost:7261/api/PostApi',
        data: {
          title: Title,
          content: Content,
          uploadAt: uploadedA,
          updatedAt: updatedA,
        },
      });
      
      console.log("Post successful", response);
    } catch (ex) {
      console.log("Error posting data", ex);
    }
  };

  return (
    <div className=" bg-[#02002e] flex flex-col items-center pb-4 pb-2">
      <div className="w-full max-w-md bg-white p-3 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">Create a Post</h2>

        <div className="space-y-4">
          <div>
            <input
              onChange={Titlechange}
              placeholder="Title"
              value={Title}
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              onChange={contentchange}
              placeholder="Content"
              value={Content}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
        </div>

        <button
          onClick={showObj}
          className="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
