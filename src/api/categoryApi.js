import axiosClient from './axiosClient';

const categoryApi = {
   getAll(param) {
      const url = '/categories';
      return axiosClient.get(url, { param });
   },
   get(id) {
      const url = `/categories/${id}`;
      return axiosClient.get(url, id);
   },
   add(data) {
      const url = '/categories';
      return axiosClient.post(url, data);
   },
   update(data) {
      const url = `/categories/${data.id}`;
      return axiosClient.patch(url, data);
   },
   delete(id) {
      const url = `/categories/${id}`;
      return axiosClient.delete(url, id);
   },
};

export default categoryApi;
