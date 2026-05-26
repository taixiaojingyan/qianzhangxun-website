import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">联系我们</h1>
          <p className="hero-subtitle">期待与您携手，共创低空经济未来</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <h3>📧 官方邮箱</h3>
                <p>contact@qianzhangxun.com</p>
              </div>
              <div className="info-card">
                <h3>📍 办公地址</h3>
                <p>杭州市临平区长三角新消费总部基地2栋1304</p>
              </div>
              <div className="info-card">
                <h3>👥 人才合作</h3>
                <p>hr@qianzhangxun.com</p>
              </div>
              <div className="info-card">
                <h3>📞 商务咨询</h3>
                <p>biz@qianzhangxun.com</p>
              </div>
              <div className="working-hours">
                <h3>⏰ 工作时间</h3>
                <p>周一至周五 9:00 - 18:00</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="姓名 *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="邮箱 *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="电话"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="单位/公司"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="留言内容 *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="btn-primary">
                  提交合作意向
                </button>
                {submitted && (
                  <div className="success-message">
                    ✓ 已收到！我们将于3个工作日内回复
                  </div>
                )}
                <p className="form-note">
                  我们将严格保密您的信息，3个工作日内回复。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
