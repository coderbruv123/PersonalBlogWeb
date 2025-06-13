import axios from "./axiosInstance";

export const getPosts = async() =>{
    const response = await axios.get("/PostApi");
    return response.data;
};

export const deletePosts = async()=>{
    const response = await axios.delete("/");
    return response.data;
}