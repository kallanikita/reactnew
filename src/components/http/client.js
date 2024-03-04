import axios from 'axios';

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com`
});
client.interceptors.request.use(req=>{
    console.log(req); 
    req.headers.authorization = 'some value';
    return req;
})
export default client;