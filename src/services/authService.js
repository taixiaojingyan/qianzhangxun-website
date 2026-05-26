import api from "./api";

export const authService = {
  // 登录
  login: (credentials) => {
    return api.post("/auth/login", credentials);
  },

  // 登出
  logout: () => {
    localStorage.removeItem("token");
    return api.post("/auth/logout");
  },

  // 获取当前用户信息
  getCurrentUser: () => {
    return api.get("/auth/me");
  },

  // 更新用户信息
  updateProfile: (data) => {
    return api.put("/auth/profile", data);
  },
};

export default authService;
