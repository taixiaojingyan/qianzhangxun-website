import React, { useEffect } from "react";
import "./SolutionsPage.css";

// TODO: 后续从 API 获取解决方案数据
const getSolutions = () => [
  {
    icon: "📦",
    title: "物流配送",
    description: "低空物流网络，800亿市场规模，解决偏远地区时效痛点。",
    features: ["快速送达", "覆盖偏远地区", "成本降低40%"],
    marketSize: "800亿",
    status: "已落地",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,102,255,0.08))"
  },
  {
    icon: "🌾",
    title: "农业植保",
    description: "适配农业合作社，单机成本降低60%，精准喷洒效率提升。",
    features: ["精准喷洒", "自动巡航", "数据监测"],
    marketSize: "300亿",
    status: "规模化",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,102,255,0.06))"
  },
  {
    icon: "🚑",
    title: "医疗救护",
    description: "紧急物资快速投送，血液/疫苗即时响应通道。",
    features: ["5分钟响应", "全天候运行", "恒温运输"],
    marketSize: "200亿",
    status: "试点中",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.14), rgba(0,102,255,0.07))"
  },
  {
    icon: "🔥",
    title: "应急救援",
    description: "固定翼高速蜂群投放，灾害搜救与物资空投。",
    features: ["蜂群协同", "快速部署", "夜间作业"],
    marketSize: "150亿",
    status: "已部署",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.13), rgba(0,102,255,0.06))"
  },
  {
    icon: "🚁",
    title: "城市交通",
    description: "立体交通、城市群走廊，缓解地面拥堵。",
    features: ["立体网络", "智能调度", "零排放"],
    marketSize: "500亿",
    status: "规划中",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.11), rgba(0,102,255,0.05))"
  },
  {
    icon: "🏞️",
    title: "文旅观光",
    description: "低空旅游，产值超300亿元，独特空中视角体验。",
    features: ["定制航线", "安全保障", "沉浸体验"],
    marketSize: "300亿",
    status: "运营中",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,102,255,0.06))"
  },
];

// TODO: 后续从 API 获取行业数据
const getIndustryStats = () => [
  { value: "800亿+", label: "物流配送市场规模", trend: "年增长45%" },
  { value: "60%", label: "成本降低幅度", trend: "规模化效应" },
  { value: "30城", label: "覆盖城市", trend: "长三角核心区" },
  { value: "24/7", label: "全天候运营", trend: "不间断服务" },
];

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = getSolutions();
  const industryStats = getIndustryStats();

  return (
    <div className="solutions-page">
      {/* Hero 区域 */}
      <section className="solutions-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="solutions-hero-content">
            <span className="hero-badge">解决方案</span>
            <h1 className="page-title">
              应用场景<span className="gradient-text">解决方案</span>
            </h1>
            <p className="hero-subtitle">
              覆盖六大核心场景，构建全方位低空经济生态
            </p>
            <div className="hero-stats">
              {industryStats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-trend">{stat.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案网格 */}
      <section className="solutions-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">全场景覆盖</span>
            <h2 className="section-title">六大<span className="gradient-text">核心应用</span>场景</h2>
            <p className="section-desc">
              从物流到文旅，从农业到救援，TAS技术赋能千行百业
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="solution-card glass-card"
                style={{ background: solution.gradient }}
              >
                <div className="card-header">
                  <div className="solution-icon">{solution.icon}</div>
                  <div className="solution-status">
                    <span className={`status-badge status-${solution.status === '已落地' ? 'active' : solution.status === '规模化' ? 'success' : 'pending'}`}>
                      {solution.status}
                    </span>
                  </div>
                </div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-market">
                  <span className="market-icon">📊</span>
                  <span className="market-value">{solution.marketSize}</span>
                  <span className="market-label">市场规模</span>
                </div>
                <ul className="solution-features">
                  {solution.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <button className="learn-more-btn">
                    了解详情 <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示区域 */}
      <section className="case-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">成功案例</span>
            <h2 className="section-title">典型<span className="gradient-text">应用案例</span></h2>
            <p className="section-desc">
              真实的落地场景，验证TAS技术的价值与可靠性
            </p>
          </div>

          <div className="case-grid">
            <div className="case-card glass-card">
              <div className="case-icon">🏥</div>
              <div className="case-content">
                <h4>紧急医疗物资配送</h4>
                <p>浙江省某县级医院，通过TAS无人机实现血浆15分钟急速送达，救援效率提升70%</p>
                <div className="case-meta">
                  <span>📍 浙江 · 湖州</span>
                  <span>⚡ 15分钟送达</span>
                </div>
              </div>
            </div>
            <div className="case-card glass-card">
              <div className="case-icon">🌾</div>
              <div className="case-content">
                <h4>智慧农业植保</h4>
                <p>江苏某农业合作社，单日作业面积800亩，农药使用量减少30%，产量提升15%</p>
                <div className="case-meta">
                  <span>📍 江苏 · 盐城</span>
                  <span>⚡ 800亩/日</span>
                </div>
              </div>
            </div>
            <div className="case-card glass-card">
              <div className="case-icon">📦</div>
              <div className="case-content">
                <h4>低空物流网络</h4>
                <p>长三角示范区，无人机物流配送时效从2天缩短至4小时，覆盖30个乡镇站点</p>
                <div className="case-meta">
                  <span>📍 长三角示范区</span>
                  <span>⚡ 4小时达</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="solutions-cta">
        <div className="container">
          <div className="cta-content glass-card">
            <div className="cta-icon">🚀</div>
            <h2>定制您的专属解决方案</h2>
            <p>无论您是物流企业、农业合作社还是政府部门，TAS技术都能为您提供量身定制的低空经济解决方案</p>
            <div className="cta-buttons">
              <button className="btn-primary">立即咨询</button>
              <button className="btn-outline">下载方案手册</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;