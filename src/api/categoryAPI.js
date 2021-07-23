import { axiosClient } from "./axiosClient";
import axios from 'axios';
export const CategoryAPI = {
  list() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  read(id) {
    const url = `/categories/${id}`;
    return axios.get(url);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axios.delete(url);
  },
};
export default CategoryAPI;
