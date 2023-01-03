import axios from 'axios';
import configs from '../store/config';

export default axios.create({
    baseURL: configs.BaseUrl,
    headers: {
      Authorization: 'Bearer ' + (localStorage.getItem('UserToken')?localStorage.getItem('UserToken'):localStorage.getItem('Token'))
    }
  })