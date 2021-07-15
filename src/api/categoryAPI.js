// import { axiosClient } from "./axiosClient";
import axios from 'axios';
export const CategoryAPI = {
  list() {
    const url = `http://localhost:3001/categories`;
    return axios.get(url);
  },
  read(id) {
    const url = `http://localhost:3001/categories/${id}`;
    return axios.get(url);
  },
  remove(id) {
    const url = `http://localhost:3001/categories/${id}`;
    return axios.delete(url);
  },
};
export default CategoryAPI;
