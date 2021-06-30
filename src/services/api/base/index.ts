import axios from "axios";
import * as Auth from "../auth";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

axios.interceptors.request.use((config) => {
  if (!Auth.getToken()) throw new axios.Cancel("No auth token found");

  return config;
});

export const basePath = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1",
  post = (path: string = "", body = {}, config = {}) => {
    return axios
      .post(`${basePath}${path}`, body, config)
      .then((res) => res.data);
  },
  get = (path = "") => {
    return axios.get(`${basePath}${path}`).then((res) => res.data);
  },
  put = (path = "", body = {}, config = {}) => {
    return axios.put(`${basePath}${path}`, body, config);
  },
  del = (path = "") => {
    return axios.delete(`${basePath}${path}`).then((res) => res.data);
  };
