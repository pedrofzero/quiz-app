import axios from "axios";

export const api = axios.create({
    baseURL: 'http://45.136.70.211:8000/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });

