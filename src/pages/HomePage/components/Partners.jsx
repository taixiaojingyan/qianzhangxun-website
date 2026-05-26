import React from "react";

const partners = {
  industry: ["华为", "北斗", "中电科", "商飞", "深圳嘉立创"],
  research: ["江苏大学", "上海交通大学", "加州大学"],
  government: ["长三角G60科创走廊", "中关村智能科技发展促进会"],
};

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="section-title">合作伙伴</h2>
        <div className="partner-category">
          <h3 className="category-title">产业伙伴</h3>
          <div className="partner-logos">
            {partners.industry.map((partner, index) => (
              <span key={index} className="partner-item">
                {partner}
              </span>
            ))}
          </div>
        </div>
        <div className="partner-category">
          <h3 className="category-title">科研伙伴</h3>
          <div className="partner-logos">
            {partners.research.map((partner, index) => (
              <span key={index} className="partner-item">
                {partner}
              </span>
            ))}
          </div>
        </div>
        <div className="partner-category">
          <h3 className="category-title">政府/协会</h3>
          <div className="partner-logos">
            {partners.government.map((partner, index) => (
              <span key={index} className="partner-item">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
