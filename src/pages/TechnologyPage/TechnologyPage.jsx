import React, { useState, useEffect } from "react";
import "./TechnologyPage.css";

// TODO: 后续从 API 获取技术阶段数据
const getTechSteps = () => [
  {
    phase: "阶段一",
    title: "TAFCS飞控系统",
    desc: "集成动力与舵面控制，自动调舵量及倾角，飞行员只需输入目标，大幅降低飞行操作难度与学习成本。",
    highlight: "三维→二维操作革命",
    icon: "🎮",
    tech: ["飞控算法", "自动控制", "降维操作"]
  },
  {
    phase: "阶段二",
    title: "专用机型设计与量产",
    desc: "设计超轻型载重50-200kg机型，航电系统成本压至千元以内，适配农业、物流等场景，量产成本降低60%。",
    highlight: "成本降低60%",
    icon: "✈️",
    tech: ["机型设计", "成本优化", "规模化量产"]
  },
  {
    phase: "阶段三",
    title: "模块化航电生态",
    desc: "开放SDK与接口，支持农药喷洒、医疗急救等模块快速换装，构建第三方开发者生态，形成软硬件闭环。",
    highlight: "开放生态",
    icon: "🔌",
    tech: ["SDK开放", "模块化设计", "开发者生态"]
  },
  {
    phase: "阶段四",
    title: "初步航路规划及自动驾驶",
    desc: "基于GPS四元数运算实现按预设点自动飞行，具备极高军用价值，同时向下兼容民用场景。",
    highlight: "军民两用",
    icon: "🛰️",
    tech: ["航路规划", "自动驾驶", "GPS融合"]
  },
  {
    phase: "阶段五",
    title: "无终端自主线路规划",
    desc: "飞行器间3-5km无线通讯，交换位置速度信息，自主计算避让航线，适应中等密度空域。",
    highlight: "自主避障",
    icon: "📡",
    tech: ["无线通讯", "自主避障", "分布式决策"]
  },
  {
    phase: "阶段六",
    title: "特定复杂航线终端系统",
    desc: "地面基站统一接收区域内飞行器数据，集中调度规划航线，实现高密度航线的安全高效管理。",
    highlight: "集中调度",
    icon: "🏢",
    tech: ["集中调度", "高密度管理", "空域协同"]
  },
];

// TODO: 后续从 API 获取技术壁垒数据
const getBarriers = () => [
  {
    icon: "🔒",
    title: "生态绑定",
    desc: "端口、通讯格式、密钥、专用接口",
    analogy: "类比USB/Type-C标准",
    tags: ["独占协议", "硬件绑定", "生态闭环"]
  },
  {
    icon: "📜",
    title: "专利布局",
    desc: "20余项申报，构建专利网络",
    analogy: "核心技术全面保护",
    tags: ["发明专利", "实用新型", "国际PCT"]
  },
  {
    icon: "🌐",
    title: "标准制定",
    desc: "国际通用信号灯、避障标准、无线电波段",
    analogy: "引领行业规范",
    tags: ["行业标准", "国际接轨", "规范制定"]
  },
];

const TechnologyPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const techSteps = getTechSteps();
  const barriers = getBarriers();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="technology-page">
      {/* Hero 区域 */}
      <section className="tech-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="tech-hero-content">
            <span className="hero-badge">TAS · 技术生态</span>
            <h1 className="page-title">
              <span className="gradient-text">TAS</span> 技术生态
            </h1>
            <p className="tech-subtitle">
              国内首个完全自主创新的低空经济技术应用服务综合项目
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value">6</span>
                <span className="stat-label">大技术阶段</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">20+</span>
                <span className="stat-label">专利申报</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">自主知识产权</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 六大阶段时间轴 */}
      <section className="tech-timeline">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">技术演进</span>
            <h2 className="section-title">六大<span className="gradient-text">核心技术</span>阶段</h2>
            <p className="section-desc">
              从飞控系统到空管网络，构建完整低空经济技术闭环
            </p>
          </div>

          {/* 横向滚动的时间轴导航（桌面端） */}
          <div className="timeline-nav-wrapper">
            <div className="timeline-nav">
              {techSteps.map((step, index) => (
                <button
                  key={index}
                  className={`timeline-btn ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="timeline-phase-num">{index + 1}</span>
                  <span className="timeline-phase">{step.phase}</span>
                  <span className="timeline-title">{step.title}</span>
                  {activeIndex === index && <span className="active-indicator"></span>}
                </button>
              ))}
            </div>
          </div>

          {/* 详细内容展示 */}
          <div className="timeline-detail glass-card" key={activeIndex}>
            <div className="detail-icon">{techSteps[activeIndex].icon}</div>
            <div className="detail-header">
              <span className="detail-phase">{techSteps[activeIndex].phase}</span>
              <h2 className="detail-title">{techSteps[activeIndex].title}</h2>
            </div>
            <p className="detail-desc">{techSteps[activeIndex].desc}</p>
            <div className="detail-tags">
              {techSteps[activeIndex].tech.map((tag, i) => (
                <span key={i} className="tech-tag">{tag}</span>
              ))}
            </div>
            <div className="highlight-badge">
              <span className="highlight-icon">✨</span>
              {techSteps[activeIndex].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 技术壁垒与标准制定 */}
      <section className="tech-barrier">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">核心竞争力</span>
            <h2 className="section-title">技术壁垒与<span className="gradient-text">标准制定</span></h2>
            <p className="section-desc">
              构建全方位的技术护城河，引领低空产业规范
            </p>
          </div>

          <div className="barrier-grid">
            {barriers.map((barrier, index) => (
              <div key={index} className="barrier-card glass-card">
                <div className="barrier-icon">{barrier.icon}</div>
                <h3 className="barrier-title">{barrier.title}</h3>
                <p className="barrier-desc">{barrier.desc}</p>
                <div className="barrier-analogy">
                  <span className="analogy-icon">💡</span>
                  {barrier.analogy}
                </div>
                <div className="barrier-tags">
                  {barrier.tags.map((tag, i) => (
                    <span key={i} className="barrier-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 变革对比图 */}
          <div className="comparison-box glass-card">
            <div className="comparison-icon">🔄</div>
            <h3>变革对比</h3>
            <div className="comparison-content">
              <div className="comparison-item old">
                <span className="comparison-label">传统飞行操作</span>
                <span className="comparison-value">三维控制</span>
                <span className="comparison-desc">油门/副翼/升降舵/方向舵多维度协同</span>
              </div>
              <div className="comparison-arrow">→</div>
              <div className="comparison-item new">
                <span className="comparison-label">TAFCS飞控系统</span>
                <span className="comparison-value">二维操作</span>
                <span className="comparison-desc">只需输入目标，飞控自动完成</span>
              </div>
            </div>
            <div className="comparison-analogy">
              <span className="analogy-icon">🚗</span>
              类比：手动挡汽车 → 自动挡，失速尾旋风险大幅降低
            </div>
          </div>
        </div>
      </section>

      {/* 专利布局详情 */}
      <section className="patent-section">
        <div className="container">
          <div className="patent-content">
            <div className="patent-stats">
              <div className="patent-stat">
                <span className="patent-number">20+</span>
                <span className="patent-label">专利申请中</span>
              </div>
              <div className="patent-stat">
                <span className="patent-number">5</span>
                <span className="patent-label">已授权发明专利</span>
              </div>
              <div className="patent-stat">
                <span className="patent-number">3</span>
                <span className="patent-label">国际PCT</span>
              </div>
            </div>
            <p className="patent-desc">
              围绕飞控算法、硬件架构、通讯协议等核心技术构建严密的专利网络，
              形成技术壁垒，确保技术领先优势。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;