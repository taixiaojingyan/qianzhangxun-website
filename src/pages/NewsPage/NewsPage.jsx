import React, { useState, useEffect } from "react";
import "./NewsPage.css";

// TODO: 后续从 API 获取新闻数据
const getNewsData = () => [
  {
    id: 1,
    title: "千嶂巡将参加2026珠海航展",
    date: "2026-11-15",
    summary: "展示TAS全系列技术生态，包括TAFCS飞控系统、专用机型及航电模块。",
    category: "展会",
    icon: "✈️",
    tags: ["航展", "TAS生态"],
    highlight: true
  },
  {
    id: 2,
    title: "TAS系统正式上线，首批合作伙伴签约",
    date: "2026-10-20",
    summary: "携手华为、北斗完成基站部署签约，标志着TAS技术生态进入商业化阶段。",
    category: "合作",
    icon: "🤝",
    tags: ["TAS上线", "战略合作"],
    highlight: true
  },
  {
    id: 3,
    title: "长三角低空导航基站建设启动",
    date: "2026-09-10",
    summary: "首批50个基站进入规划阶段，覆盖长三角核心城市，预计年底投运。",
    category: "基建",
    icon: "🏗️",
    tags: ["基站建设", "长三角"],
    highlight: false
  },
  {
    id: 4,
    title: "与江苏大学达成科研课题合作",
    date: "2026-08-05",
    summary: "双方将共同开展低空经济关键技术研究，培养专业人才。",
    category: "科研",
    icon: "🎓",
    tags: ["产学研", "人才培养"],
    highlight: false
  },
  {
    id: 5,
    title: "TAFCS飞控系统通过专业认证",
    date: "2026-07-12",
    summary: "系统安全性、稳定性获权威机构认证，为大规模商用奠定基础。",
    category: "技术",
    icon: "📋",
    tags: ["飞控认证", "安全认证"],
    highlight: false
  },
  {
    id: 6,
    title: "完成新一轮战略融资",
    date: "2026-06-01",
    summary: "引入多家产业资本，加速低空导航基站建设和技术研发。",
    category: "融资",
    icon: "💰",
    tags: ["融资", "资本运作"],
    highlight: false
  },
];

const categories = [
  { key: "全部", label: "全部动态", icon: "📰" },
  { key: "展会", label: "展会活动", icon: "🎪" },
  { key: "合作", label: "战略合作", icon: "🤝" },
  { key: "基建", label: "基础设施", icon: "🏗️" },
  { key: "科研", label: "科研进展", icon: "🔬" },
  { key: "技术", label: "技术突破", icon: "⚡" },
  { key: "融资", label: "融资动态", icon: "💰" },
];

const years = ["2026", "2025", "2024"];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsData = getNewsData();

  const filteredNews = newsData.filter((news) => {
    // 分类筛选
    if (activeCategory !== "全部" && news.category !== activeCategory) {
      return false;
    }
    // 年份筛选
    const newsYear = news.date.split("-")[0];
    if (newsYear !== selectedYear) {
      return false;
    }
    // 关键词搜索
    if (searchKeyword && !news.title.includes(searchKeyword) && !news.summary.includes(searchKeyword)) {
      return false;
    }
    return true;
  });

  // 高亮新闻（置顶显示）
  const highlightedNews = filteredNews.filter(n => n.highlight);
  const normalNews = filteredNews.filter(n => !n.highlight);

  return (
    <div className="news-page">
      {/* Hero 区域 */}
      <section className="news-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="news-hero-content">
            <span className="hero-badge">最新资讯</span>
            <h1 className="page-title">
              新闻与<span className="gradient-text">动态</span>
            </h1>
            <p className="hero-subtitle">
              了解千嶂巡最新进展，见证低空经济生态的每一步成长
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value">{newsData.length}</span>
                <span className="stat-label">动态资讯</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">{categories.length - 1}</span>
                <span className="stat-label">资讯分类</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">2024-2026</span>
                <span className="stat-label">时间跨度</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻内容区域 */}
      <section className="news-content">
        <div className="container">
          {/* 筛选栏 */}
          <div className="news-filters glass-card">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="搜索新闻..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="search-input"
              />
              {searchKeyword && (
                <button className="clear-search" onClick={() => setSearchKeyword("")}>
                  ✕
                </button>
              )}
            </div>

            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`filter-btn ${activeCategory === cat.key ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <span className="filter-icon">{cat.icon}</span>
                  <span className="filter-label">{cat.label}</span>
                </button>
              ))}
            </div>

            <div className="year-filter">
              <span className="year-icon">📅</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="year-select"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 新闻列表 */}
          {filteredNews.length === 0 ? (
            <div className="empty-state glass-card">
              <div className="empty-icon">📭</div>
              <h3>暂无新闻</h3>
              <p>暂时没有找到符合条件的新，请尝试其他筛选条件</p>
              <button
                className="btn-outline"
                onClick={() => {
                  setActiveCategory("全部");
                  setSelectedYear("2026");
                  setSearchKeyword("");
                }}
              >
                重置筛选
              </button>
            </div>
          ) : (
            <>
              {/* 高亮新闻展示 */}
              {highlightedNews.length > 0 && (
                <div className="highlight-section">
                  <div className="section-label">
                    <span className="label-icon">⭐</span>
                    重点推荐
                  </div>
                  <div className="highlight-grid">
                    {highlightedNews.map((news) => (
                      <div key={news.id} className="highlight-card glass-card">
                        <div className="highlight-icon">{news.icon}</div>
                        <div className="highlight-content">
                          <div className="highlight-meta">
                            <span className="highlight-category">{news.category}</span>
                            <span className="highlight-date">{news.date}</span>
                          </div>
                          <h3 className="highlight-title">{news.title}</h3>
                          <p className="highlight-summary">{news.summary}</p>
                          <div className="highlight-tags">
                            {news.tags.map((tag, idx) => (
                              <span key={idx} className="tag">{tag}</span>
                            ))}
                          </div>
                          <button className="read-more-btn" disabled>
                            查看详情 <span className="arrow">→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 普通新闻网格 */}
              <div className="news-grid">
                {normalNews.map((news) => (
                  <div key={news.id} className="news-card glass-card">
                    <div className="news-card-header">
                      <div className="news-icon">{news.icon}</div>
                      <div className="news-category-badge">{news.category}</div>
                    </div>
                    <div className="news-info">
                      <div className="news-date">
                        <span className="date-icon">📅</span>
                        {news.date}
                      </div>
                      <h3 className="news-title">{news.title}</h3>
                      <p className="news-summary">{news.summary}</p>
                      <div className="news-tags">
                        {news.tags.map((tag, idx) => (
                          <span key={idx} className="news-tag">{tag}</span>
                        ))}
                      </div>
                      <button className="read-more" disabled>
                        查看详情 →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 统计信息 */}
              <div className="news-stats">
                <span className="stats-text">
                  共 <strong>{filteredNews.length}</strong> 条动态
                </span>
              </div>
            </>
          )}

          {/* 加载更多（占位） */}
          <div className="more-news">
            <button className="btn-outline" disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>
              <span className="btn-icon">📡</span>
              更多动态筹备中
            </button>
          </div>
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-card glass-card">
            <div className="subscribe-icon">📧</div>
            <h3>获取最新动态</h3>
            <p>订阅我们的邮件通知，第一时间获取千嶂巡最新资讯</p>
            <div className="subscribe-form">
              <input type="email" placeholder="请输入您的邮箱地址" className="subscribe-input" />
              <button className="subscribe-btn">订阅</button>
            </div>
            <div className="subscribe-note">
              <span className="note-icon">🔒</span>
              我们承诺不会向您发送垃圾邮件
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;