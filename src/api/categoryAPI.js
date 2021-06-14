import { axiosClient } from "./axiosClient";
export const CategoryAPI = {
  list() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  read(id) {
    const url = "/categories/${id}";
    return axiosClient.get(url);
  },
  remove(id) {
    const url = "/categories/${id}";
    return axiosClient.delete(url);
  },
};
export default CategoryAPI;
