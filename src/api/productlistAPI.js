import { axiosClient } from "./axiosClient";
export const ProductlistAPI = {
  list() {
    const url = `/productlists`;
    return axiosClient.get(url);
  },
  read(id) {
    const url = `/productlists/${id}`;
    return axiosClient.get(url);
  },
  remove(id) {
    const url = `/productlists/${id}`;
    return axiosClient.delete(url);
  },
  add(product) {
    const url = `/productlists`;
    return axiosClient.post(url, product);
  },
  update(id, data) {
    const url = `/productlists/${id}`;
    return axiosClient.put(url, data);
  },
};
export default ProductlistAPI;
