import { axiosClient } from "./axiosClient";
export const ProductAPI = {
  list() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  read(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  add(product){
    const url = `/products`;
    return axiosClient.post(url,product); 
  },
  update(id,data){
    const url = `/products/${id}`;
    return axiosClient.put(url,data);
  }
};
export default ProductAPI;
