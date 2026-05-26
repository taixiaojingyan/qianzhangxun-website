import api from "./api";

export const newsService = {
  // 获取新闻列表
  getNewsList: (params = { page: 1, pageSize: 10 }) => {
    return api.get("/news", { params });
  },

  // 获取新闻详情
  getNewsDetail: (id) => {
    return api.get(`/news/${id}`);
  },

  // 按年份筛选
  getNewsByYear: (year, page = 1, pageSize = 10) => {
    return api.get("/news", { params: { year, page, pageSize } });
  },

  // 按分类筛选
  getNewsByCategory: (category, page = 1, pageSize = 10) => {
    return api.get("/news", { params: { category, page, pageSize } });
  },

  // 获取新闻分类列表
  getCategories: () => {
    return api.get("/news/categories");
  },

  // 获取新闻年份列表
  getYears: () => {
    return api.get("/news/years");
  },
};

export default newsService;
