import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">千嶂巡 · 天枢智航</h3>
            <p>杭州千嶂巡智能科技有限责任公司</p>
            <p>地址：杭州市临平区长三角新消费总部基地2栋1304</p>
          </div>
          <div className="footer-links">
            <h4>快速链接</h4>
            <a href="/about">关于我们</a>
            <a href="/technology">核心技术</a>
            <a href="/contact">联系我们</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 千嶂巡 · 天枢智航 版权所有 | 浙ICP备2026XXXX号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
