import axios, { AxiosError } from "axios";
import { setHandler, setAxiosInstance, axiosHandler } from "hn-api-sdk";

export * from "hn-api-sdk/lib/user-api";
export * from "hn-api-sdk/lib/apiconf-refs";
export * from "hn-api-sdk/lib/shared-refs";

export const baseURL = `https://hacker-news.firebaseio.com`;

const apiURL = baseURL;

const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error?.message);
  }
);

setAxiosInstance(axiosInstance);
setHandler(axiosHandler);