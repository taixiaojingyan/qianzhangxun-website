import React from "react";

const coreValues = [
  {
    icon: "✈️",
    title: "低成本航空技术",
    description: "极简飞控与模块化硬件，量产成本降低60%，普惠低空经济。",
  },
  {
    icon: "🎮",
    title: "极简飞控",
    description: "三维→二维操作，如同自动挡革命，飞行培训门槛大幅降低。",
  },
  {
    icon: "🔗",
    title: "生态式技术壁垒",
    description: "端口/通讯格式/密钥绑定，类比USB-C标准，构建专利网络。",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <h2 className="section-title">核心技术价值</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
