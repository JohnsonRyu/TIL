// import axiosInstance from "axios";
import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export class RequestAPI {
  private BASE_URL: string;

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl;
  }

  public publicRequest = async (
    url: string,
    method: "get" | "post",
    data?: any
  ) => {
    return await axiosInstance({
      method: method,
      url: this.BASE_URL + url,
      data: data
    });
  };
}
