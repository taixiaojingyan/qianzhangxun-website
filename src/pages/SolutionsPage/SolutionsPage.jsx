import React from "react";
import "./SolutionsPage.css";

const solutions = [
  {
    icon: "📦",
    title: "物流配送",
    description: "低空物流网络，800亿市场规模，解决偏远地区时效痛点。",
    features: ["快速送达", "覆盖偏远地区", "成本降低40%"],
  },
  {
    icon: "🌾",
    title: "农业植保",
    description: "适配农业合作社，单机成本降低60%，精准喷洒效率提升。",
    features: ["精准喷洒", "自动巡航", "数据监测"],
  },
  {
    icon: "🚑",
    title: "医疗救护",
    description: "紧急物资快速投送，血液/疫苗即时响应通道。",
    features: ["5分钟响应", "全天候运行", "恒温运输"],
  },
  {
    icon: "🔥",
    title: "应急救援",
    description: "固定翼高速蜂群投放，灾害搜救与物资空投。",
    features: ["蜂群协同", "快速部署", "夜间作业"],
  },
  {
    icon: "🚁",
    title: "城市交通",
    description: "立体交通、城市群走廊，缓解地面拥堵。",
    features: ["立体网络", "智能调度", "零排放"],
  },
  {
    icon: "🏞️",
    title: "文旅观光",
    description: "低空旅游，产值超300亿元，独特空中视角体验。",
    features: ["定制航线", "安全保障", "沉浸体验"],
  },
];

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="container">
          <h1 className="page-title">应用场景解决方案</h1>
          <p className="hero-subtitle">
            覆盖六大核心场景，构建全方位低空经济生态
          </p>
        </div>
      </section>

      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
