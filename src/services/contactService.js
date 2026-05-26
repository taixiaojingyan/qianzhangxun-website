import api from "./api";

export const contactService = {
  // 提交联系表单
  submitForm: (data) => {
    return api.post("/contact", data);
  },

  // 获取联系方式
  getContactInfo: () => {
    return api.get("/contact/info");
  },

  // 订阅新闻
  subscribeNewsletter: (email) => {
    return api.post("/newsletter/subscribe", { email });
  },

  // 获取咨询列表（管理员用）
  getInquiries: (params) => {
    return api.get("/contact/inquiries", { params });
  },

  // 更新咨询状态
  updateInquiryStatus: (id, status) => {
    return api.put(`/contact/inquiries/${id}`, { status });
  },
};

export default contactService;
