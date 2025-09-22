import axios from "axios";
import router from "@/router/index";

const requestAxios = axios.create({
    baseURL: 'https://vue-online-bank-ce304-default-rtdb.firebaseio.com/'
})

requestAxios.interceptors.request.use(null, error=>{
    if ( error.response.status === 401) {
        router.push('/auth?message=auth');
    }
    return Promise.reject(error);
})
export default requestAxios;