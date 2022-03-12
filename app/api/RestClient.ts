import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getHttpHeaders = ({ isAuthenticated }): AxiosRequestConfig => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
      },
    };
  }

  return {};
};

const get = (path: string, options: any = {}): Promise<AxiosResponse> =>
  axios.get(path, getHttpHeaders(options));

const del = (path: string, options: any = {}): Promise<AxiosResponse> =>
  axios.delete(path, getHttpHeaders(options));

const post = (
  path: string,
  data: any,
  options: any = {}
): Promise<AxiosResponse> => axios.post(path, data, getHttpHeaders(options));

const put = (
  path: string,
  data: any,
  options: any = {}
): Promise<AxiosResponse> => axios.post(path, data, getHttpHeaders(options));

const patch = (
  path: string,
  data: any,
  options: any = {}
): Promise<AxiosResponse> => axios.post(path, data, getHttpHeaders(options));

export default {
  get,
  del,
  post,
  put,
  patch,
};
