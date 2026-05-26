import React, { useState } from "react";
import "./TechnologyPage.css";

const techSteps = [
  {
    phase: "阶段一",
    title: "TAFCS飞控系统",
    desc: "集成动力与舵面控制，自动调舵量及倾角，飞行员只需输入目标，大幅降低飞行操作难度与学习成本。",
    highlight: "三维→二维操作革命",
  },
  {
    phase: "阶段二",
    title: "专用机型设计与量产",
    desc: "设计超轻型载重50-200kg机型，航电系统成本压至千元以内，适配农业、物流等场景，量产成本降低60%。",
    highlight: "成本降低60%",
  },
  {
    phase: "阶段三",
    title: "模块化航电生态",
    desc: "开放SDK与接口，支持农药喷洒、医疗急救等模块快速换装，构建第三方开发者生态，形成软硬件闭环。",
    highlight: "开放生态",
  },
  {
    phase: "阶段四",
    title: "初步航路规划及自动驾驶",
    desc: "基于GPS四元数运算实现按预设点自动飞行，具备极高军用价值，同时向下兼容民用场景。",
    highlight: "军民两用",
  },
  {
    phase: "阶段五",
    title: "无终端自主线路规划",
    desc: "飞行器间3-5km无线通讯，交换位置速度信息，自主计算避让航线，适应中等密度空域。",
    highlight: "自主避障",
  },
  {
    phase: "阶段六",
    title: "特定复杂航线终端系统",
    desc: "地面基站统一接收区域内飞行器数据，集中调度规划航线，实现高密度航线的安全高效管理。",
    highlight: "集中调度",
  },
];

const TechnologyPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="technology-page">
      <section className="tech-hero">
        <div className="container">
          <h1 className="page-title">TAS技术生态</h1>
          <p className="tech-subtitle">
            国内首个完全自主创新的低空经济技术应用服务综合项目
          </p>
        </div>
      </section>

      <section className="tech-timeline">
        <div className="container">
          <div className="timeline-nav">
            {techSteps.map((step, index) => (
              <button
                key={index}
                className={`timeline-btn ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="phase">{step.phase}</span>
                <span className="title">{step.title}</span>
              </button>
            ))}
          </div>
          <div className="timeline-detail">
            <h2>{techSteps[activeIndex].title}</h2>
            <p className="detail-desc">{techSteps[activeIndex].desc}</p>
            <div className="highlight-badge">
              {techSteps[activeIndex].highlight}
            </div>
          </div>
        </div>
      </section>

      <section className="tech-barrier">
        <div className="container">
          <h2 className="section-title">技术壁垒与标准制定</h2>
          <div className="barrier-grid">
            <div className="barrier-card">
              <h3>🔒 生态绑定</h3>
              <p>端口、通讯格式、密钥、专用接口（类比USB/Type-C）</p>
            </div>
            <div className="barrier-card">
              <h3>📜 专利布局</h3>
              <p>20余项申报，构建专利网络</p>
            </div>
            <div className="barrier-card">
              <h3>🌐 标准制定</h3>
              <p>国际通用信号灯、避障标准、无线电波段</p>
            </div>
          </div>
          <div className="comparison-box">
            <h3>变革对比</h3>
            <p>
              手动挡汽车 →
              自动挡类比：飞行操作从三维降为二维，失速尾旋风险大幅降低
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
