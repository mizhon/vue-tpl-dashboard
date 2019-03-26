import axios from 'axios';
import apiConfig from './api-config';

export default function $axios(options) {

  return new Promise((resolve, reject) => {
    const createAxios = ((res) => {
      const headers = {
        "Authorization": res.responseObject.token,
        "Content-Type": "application/json;charset=UTF-8",
        "X-App-ID": res.responseObject.xAppId || apiConfig.develop.xAppId,
        "X-Device-ID": res.responseObject.xDeviceId || apiConfig.develop.xDeviceId
      };

      const instance = axios.create({
        baseURL: apiConfig.develop.baseURL + options.url,
        headers: headers,
        responseType: "json",
        params: options.params || null,
        data: options.data || null,
        method: options.method || "GET",
        transformResponse: [
          function (data) {
            let res = typeof data == "string" ? JSON.parse(data) : data;
            return res;
          }
        ]
      })

      // --------------------------------------------
      // request 拦截器
      // --------------------------------------------
      instance.interceptors.request.use(
        config => {
          return config;
        },
        error => {
          console.error("request: ", error)
          return Promise.reject(error);
        }
      )

      // --------------------------------------------
      // response 拦截器
      // --------------------------------------------
      instance.interceptors.response.use(
        res => {

          // 处理请求相应
          // 1. 未登陆
          // 2. session 过期
          // 3. 网络连接等

          console.log("response 响应数据: ", res.data);
          return resolve(res);
        },
        err => {
          // 处理 response 错误
          if (err && err.response) {
            switch (err.response.status) {
              case 400:
                err.message = "请求参数错误";
                break;
              case 404:
                err.message = "请求资源错误";
                break;

              default:
            }
          }

          console.error("axios 请求错误: ", err)
          return reject(err); // 返回接口返回的错误
        }
      );

      // 处理请求
      instance();
    })

    console.log(createAxios);
  })
}
