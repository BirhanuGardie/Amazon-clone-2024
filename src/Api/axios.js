import axios from 'axios';


const axiosInstance = axios.create({
    // local instance of firebase functions
    baseURL: "http://127.0.0.1:5001/clone-165c5/us-central1/api",
    // deployed server of amazon clone
    baseURL: "https://amazon-backend-deploy-3wie.onrender.com/",
})
export {axiosInstance}