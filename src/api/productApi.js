import axiosClient from './axiosClient';

const productApi = {
   getAll(params) {
      const url = '/products';
      console.log('param' + params);
      return axiosClient.get(url, { params });
   },
   get(id) {
      const url = `/products/${id}`;
      return axiosClient.get(url, id);
   },
   add(data) {
      const url = '/products';
      return axiosClient.post(url, data);
   },
   update(data) {
      const url = `/products/${data.id}`;
      return axiosClient.patch(url, data);
   },
   delete(id) {
      const url = `/products/${id}`;
      return axiosClient.delete(url, id);
   },
};

export default productApi;
