import axios from "axios";

const axiosPublic = axios.create({
   baseURL: 'https://retail-store-pos-server.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;