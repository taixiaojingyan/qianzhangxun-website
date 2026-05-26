import React, { useState } from "react";
import "./NewsPage.css";

const newsData = [
  {
    id: 1,
    title: "千嶂巡将参加2026珠海航展",
    date: "2026-11-15",
    summary: "展示TAS全系列技术生态，包括TAFCS飞控系统、专用机型及航电模块。",
    category: "展会",
    image: "✈️",
  },
  {
    id: 2,
    title: "TAS系统正式上线，首批合作伙伴签约",
    date: "2026-10-20",
    summary:
      "携手华为、北斗完成基站部署签约，标志着TAS技术生态进入商业化阶段。",
    category: "合作",
    image: "🤝",
  },
  {
    id: 3,
    title: "长三角低空导航基站建设启动",
    date: "2026-09-10",
    summary: "首批50个基站进入规划阶段，覆盖长三角核心城市，预计年底投运。",
    category: "基建",
    image: "🏗️",
  },
  {
    id: 4,
    title: "与江苏大学达成科研课题合作",
    date: "2026-08-05",
    summary: "双方将共同开展低空经济关键技术研究，培养专业人才。",
    category: "科研",
    image: "🎓",
  },
  {
    id: 5,
    title: "TAFCS飞控系统通过专业认证",
    date: "2026-07-12",
    summary: "系统安全性、稳定性获权威机构认证，为大规模商用奠定基础。",
    category: "技术",
    image: "📋",
  },
  {
    id: 6,
    title: "完成新一轮战略融资",
    date: "2026-06-01",
    summary: "引入多家产业资本，加速低空导航基站建设和技术研发。",
    category: "融资",
    image: "💰",
  },
];

const categories = ["全部", "展会", "合作", "基建", "科研", "技术", "融资"];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selectedYear, setSelectedYear] = useState("2026");

  const filteredNews = newsData.filter((news) => {
    if (activeCategory === "全部") return true;
    return news.category === activeCategory;
  });

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <h1 className="page-title">新闻与动态</h1>
          <p className="hero-subtitle">了解千嶂巡最新资讯</p>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="news-filters">
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="year-filter">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="2026">2026年</option>
                <option value="2025">2025年</option>
                <option value="2024">2024年</option>
              </select>
            </div>
          </div>

          <div className="news-grid">
            {filteredNews.map((news) => (
              <div key={news.id} className="news-card">
                <div className="news-icon">{news.image}</div>
                <div className="news-info">
                  <div className="news-meta">
                    <span className="news-category">{news.category}</span>
                    <span className="news-date">{news.date}</span>
                  </div>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-summary">{news.summary}</p>
                  <button
                    className="read-more"
                    disabled
                    style={{ opacity: 0.5, cursor: "not-allowed" }}
                  >
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="more-news">
            <button className="btn-outline" disabled style={{ opacity: 0.5 }}>
              加载更多（筹备中）
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
