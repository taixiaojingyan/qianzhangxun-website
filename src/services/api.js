import axios from "axios";

// 获取环境配置
const getBaseURL = () => {
  const mode = import.meta.env.MODE;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  console.log(`[API] Current mode: ${mode}, API URL: ${apiUrl}`);
  return apiUrl;
};

// 创建 axios 实例
const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 添加请求时间戳（防止缓存）
    if (config.method === "get") {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    // 从 localStorage 获取 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(
      `[API Request] ${config.method.toUpperCase()} ${config.url}`,
      config.params || config.data,
    );
    return config;
  },
  (error) => {
    console.error("[API Request Error]", error);
    return Promise.reject(error);
  },
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.config.url}`, response.status);
    return response.data;
  },
  (error) => {
    if (error.response) {
      // 服务器响应了错误状态码
      console.error(
        "[API Response Error]",
        error.response.status,
        error.response.data,
      );

      switch (error.response.status) {
        case 401:
          // 未授权，清除 token 并跳转登录
          localStorage.removeItem("token");
          // window.location.href = '/login'
          break;
        case 403:
          console.error("权限不足");
          break;
        case 404:
          console.error("请求的资源不存在");
          break;
        case 500:
          console.error("服务器内部错误");
          break;
        default:
          console.error("未知错误");
      }

      return Promise.reject(error.response.data || { message: "请求失败" });
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error("[API No Response]", error.request);
      return Promise.reject({ message: "网络连接失败，请检查网络设置" });
    } else {
      // 请求配置出错
      console.error("[API Config Error]", error.message);
      return Promise.reject({ message: error.message || "请求配置错误" });
    }
  },
);

// 导出不同环境的 API 实例创建函数
export const createApiClient = (customConfig) => {
  return axios.create({
    baseURL: getBaseURL(),
    timeout: 15000,
    ...customConfig,
  });
};

export default api;
