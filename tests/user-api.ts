import xior, { XiorError } from "xior";
import { setHandler, setXiorInstance, xiorHandler } from "hn-api-sdk";

export * from "hn-api-sdk/lib/user-api";
export * from "hn-api-sdk/lib/apiconf-refs";
export * from "hn-api-sdk/lib/shared-refs";

export const baseURL = `https://hacker-news.firebaseio.com`;

const apiURL = baseURL;

const xiorInstance = xior.create({
  baseURL: apiURL,
  headers: {},
});

xiorInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

xiorInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: XiorError) => {
    return Promise.reject(error?.message);
  }
);

setXiorInstance(xiorInstance);
setHandler(xiorHandler);
