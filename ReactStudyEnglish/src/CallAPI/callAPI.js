import axios from 'axios';
import * as Config from '../Constant/Config';

export default function apiCaller(endPoint,method ="POST",body) {
    return axios({
        method:method,
        url:Config.API_URL + "/" + endPoint,
        data: body,
    }).catch(err =>{
        console.log(err);
    });
}