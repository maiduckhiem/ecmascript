import { axiosClient } from "./axiosClient";
export const CategoryAPI = {
  list() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  read(id) {
    const url = `/category/${id}`;
    return axios.get(url);
  },
  remove(id) {
    const url = `/category/${id}`;
    return axios.delete(url);
  },
};
export default CategoryAPI;
