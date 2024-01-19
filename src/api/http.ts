import axios from "axios";
const http = axios.create({
    baseURL: 'http://backend-api-01.newbee.ltd/api/v1', 
})
http.interceptors.request.use(config => {
    return config
})
http.interceptors.response.use(config => {
    return config
})
export default http