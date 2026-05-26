import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./ContactPage.css";

// 修复 Leaflet 默认图标问题
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// TODO: 后续从 API 获取联系方式数据
const getContactInfo = () => ({
  emails: [
    { label: "官方邮箱", address: "contact@qianzhangxun.com", icon: "📧", desc: "一般咨询与合作" },
    { label: "人才合作", address: "hr@qianzhangxun.com", icon: "👥", desc: "招聘与人才合作" },
    { label: "商务咨询", address: "biz@qianzhangxun.com", icon: "💼", desc: "商务合作与洽谈" },
    { label: "技术支持", address: "support@qianzhangxun.com", icon: "🔧", desc: "技术支持与售后" }
  ],
  address: {
    full: "杭州市临平区长三角新消费总部基地2栋1304",
    city: "杭州",
    district: "临平区",
    building: "长三角新消费总部基地2栋1304",
    lat: 30.299,
    lng: 120.301
  },
  workingHours: "周一至周五 9:00 - 18:00",
  phone: "0571-8888 6666"
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // TODO: 替换为实际 API 调用
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    console.log("Form submitted:", formData);
    
    // 模拟 API 请求
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = getContactInfo();

  return (
    <div className="contact-page">
      {/* Hero 区域 */}
      <section className="contact-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="contact-hero-content">
            <span className="hero-badge">联系 · 合作</span>
            <h1 className="page-title">
              联系<span className="gradient-text">我们</span>
            </h1>
            <p className="hero-subtitle">
              期待与您携手，共创低空经济未来
            </p>
            <div className="hero-quote">
              <span className="quote-icon">💡</span>
              <span>我们将于3个工作日内回复您的咨询</span>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* 左侧联系方式 */}
            <div className="contact-info">
              <div className="info-header">
                <span className="info-badge">联系方式</span>
                <h2 className="info-title">让我们<span className="gradient-text">保持联系</span></h2>
                <p className="info-desc">无论您是寻求合作、咨询业务，还是有其他问题，我们都竭诚为您服务</p>
              </div>

              {/* 邮箱卡片 */}
              <div className="info-section">
                <div className="section-icon">📧</div>
                <h3>邮件联系</h3>
                <div className="email-list">
                  {contactInfo.emails.map((email, index) => (
                    <div key={index} className="email-item glass-card">
                      <div className="email-icon">{email.icon}</div>
                      <div className="email-content">
                        <div className="email-label">{email.label}</div>
                        <a href={`mailto:${email.address}`} className="email-address">
                          {email.address}
                        </a>
                        <div className="email-desc">{email.desc}</div>
                      </div>
                      <button 
                        className="copy-btn" 
                        onClick={() => {
                          navigator.clipboard.writeText(email.address);
                          alert('邮箱地址已复制');
                        }}
                      >
                        📋
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 地址卡片 */}
              <div className="info-section">
                <div className="section-icon">📍</div>
                <h3>办公地址</h3>
                <div className="address-card glass-card">
                  <div className="address-icon">🏢</div>
                  <div className="address-content">
                    <p className="address-full">{contactInfo.address.full}</p>
                    <div className="address-detail">
                      <span>📍 {contactInfo.address.city}</span>
                      <span>🏢 {contactInfo.address.building}</span>
                    </div>
                  </div>
                  <button 
                    className="copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(contactInfo.address.full);
                      alert('地址已复制');
                    }}
                  >
                    📋
                  </button>
                </div>
              </div>

              {/* 工作时间与电话 */}
              <div className="info-row">
                <div className="info-card-mini glass-card">
                  <div className="mini-icon">⏰</div>
                  <div className="mini-content">
                    <div className="mini-label">工作时间</div>
                    <div className="mini-value">{contactInfo.workingHours}</div>
                  </div>
                </div>
                <div className="info-card-mini glass-card">
                  <div className="mini-icon">📞</div>
                  <div className="mini-content">
                    <div className="mini-label">商务热线</div>
                    <div className="mini-value">{contactInfo.phone}</div>
                  </div>
                </div>
              </div>

              {/* 社交链接占位 */}
              <div className="social-links">
                <div className="social-label">关注我们</div>
                <div className="social-icons">
                  <button className="social-icon" disabled>🔷 微信</button>
                  <button className="social-icon" disabled>📱 公众号</button>
                  <button className="social-icon" disabled>💼 领英</button>
                </div>
              </div>
            </div>

            {/* 右侧表单 */}
            <div className="contact-form-wrapper glass-card">
              <div className="form-header">
                <span className="form-badge">在线留言</span>
                <h3 className="form-title">发送<span className="gradient-text">消息</span></h3>
                <p className="form-desc">填写以下信息，我们会尽快与您联系</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="input-group">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="姓名 *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-icon">📧</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="邮箱 *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <span className="input-icon">📞</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="电话"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-icon">🏢</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="单位/公司"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-group textarea-group">
                  <span className="input-icon">💬</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="留言内容 *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>
                      提交合作意向
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="success-message">
                    <span className="success-icon">✓</span>
                    已收到！我们将于3个工作日内回复您
                  </div>
                )}

                <p className="form-note">
                  <span className="note-icon">🔒</span>
                  我们将严格保密您的信息，绝不会泄露给第三方
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 地图区域 - 使用 Leaflet + 高德瓦片 */}
      <section className="map-section">
        <div className="container">
          <div className="map-card glass-card">
            <div className="map-header">
              <span className="map-badge">位置指引</span>
              <h3>找到<span className="gradient-text">我们</span></h3>
            </div>
            <div className="map-placeholder">
              <MapContainer
                center={[contactInfo.address.lat, contactInfo.address.lng]}
                zoom={16}
                style={{ height: '100%', width: '100%', borderRadius: '20px', zIndex: 1 }}
                zoomControl={true}
                scrollWheelZoom={true}
              >
                {/* 高德中文地图瓦片 */}
                <TileLayer
                  url="https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
                  attribution='&copy; <a href="https://www.amap.com/" target="_blank" style="color: #888">高德地图</a>'
                />
                <Marker position={[contactInfo.address.lat, contactInfo.address.lng]}>
                  <Popup>
                    <div style={{ padding: '4px 0' }}>
                      <strong style={{ color: '#00D4FF' }}>千嶂巡 · 天枢智航</strong><br />
                      {contactInfo.address.full}
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
              <div className="map-overlay">
                <div className="map-marker">
                  <span className="marker-icon">📍</span>
                  <span className="marker-text">千嶂巡 · 天枢智航</span>
                </div>
                <div className="map-note">
                  {contactInfo.address.full}
                </div>
              </div>
            </div>
            <div className="map-actions">
              <button 
                className="map-btn"
                onClick={() => window.open(`https://uri.amap.com/marker?position=${contactInfo.address.lng},${contactInfo.address.lat}&name=千嶂巡`, '_blank')}
              >
                高德地图
              </button>
              <button 
                className="map-btn"
                onClick={() => window.open(`https://map.baidu.com/search/${encodeURIComponent(contactInfo.address.full)}`, '_blank')}
              >
                百度地图
              </button>
              <button 
                className="map-btn"
                onClick={() => {
                  navigator.clipboard.writeText(contactInfo.address.full);
                  alert('地址已复制');
                }}
              >
                复制地址
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 区域 */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">常见问题</span>
            <h2 className="section-title">您可能<span className="gradient-text">想了解</span></h2>
            <p className="section-desc">关于合作、产品、服务的常见问题解答</p>
          </div>

          <div className="faq-grid">
            <div className="faq-card glass-card">
              <div className="faq-icon">❓</div>
              <h4>如何获取TAS技术资料？</h4>
              <p>请通过左侧表单或邮件联系我们，我们的商务团队会为您提供详细的技术资料和解决方案。</p>
            </div>
            <div className="faq-card glass-card">
              <div className="faq-icon">🤝</div>
              <h4>如何成为合作伙伴？</h4>
              <p>欢迎各类企业、高校、机构与我们联系，发送邮件至 biz@qianzhangxun.com 洽谈合作。</p>
            </div>
            <div className="faq-card glass-card">
              <div className="faq-icon">🎓</div>
              <h4>如何加入千嶂巡？</h4>
              <p>查看"加入我们"页面中的热招岗位，或发送简历至 hr@qianzhangxun.com。</p>
            </div>
            <div className="faq-card glass-card">
              <div className="faq-icon">⚙️</div>
              <h4>产品支持与售后？</h4>
              <p>技术支持请发送邮件至 support@qianzhangxun.com，我们提供7x12小时技术支持。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;