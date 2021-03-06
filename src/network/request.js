import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return err;
    }
  );
  instance.interceptors.response.use(
    res => {
      console.log(res.data);
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  //发送真正的网络请求
  return instance(config);
}
