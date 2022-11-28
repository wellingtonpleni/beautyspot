/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://beautyspot-fatec.herokuapp.com/',
});

export default api;
