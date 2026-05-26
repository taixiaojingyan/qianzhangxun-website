import React from "react";
import "./AboutPage.css";

const teamMembers = [
  {
    name: "CTO / 专利第一受益人",
    desc: "宁波诺丁汉大学国际商务背景，莫斯科鲍曼国立技术大学录取。具备飞行器全套设计能力，主导TAFCS飞控系统开发。",
  },
  {
    name: "PCB工程师",
    desc: "辽宁大学，全国科创大赛金牌、科协主席奖。发明雷击预警手环，ISEF资格，拥有多项青少年科技创新荣誉。",
  },
  {
    name: "人工智能工程师",
    desc: "郑州大学，RoboMaster战队负责人。深度多模态聚类研究，六个数据集准确率提升1-5%，预投CVPR 2026。",
  },
  {
    name: "系统架构工程师",
    desc: "莫斯科鲍曼国立技术大学，火箭系统与航空航天方向，国际低空经济渠道桥接，民兵应急连背景。",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">关于我们</h1>
          <div className="company-intro">
            <p>
              <strong>千嶂巡（天枢智航）</strong>{" "}
              是一家专注低空经济领域核心技术研发与商业化集成的科技公司，总部位于杭州。
              公司自主研创拥有全套知识产权的TAS（Troposphere Aviation
              System）技术生态，涵盖TAFCS飞控系统、专用机型设计、
              模块化航电、自动驾驶及空管网络，其中TAFCS飞控系统可将飞行操作难度从三维降至二维（类似于手动挡到自动挡的变革），
              大幅降低航空门槛与人才培养成本。
            </p>
            <p>
              目前已联合华为、北斗、中电科、商飞等伙伴，在长三角规划建设50个低空导航基站，覆盖物流配送、农业植保、医疗救护、
              应急救援、城市交通及文旅观光等场景。公司以"低成本、低难度、高安全、智能化"为使命，致力于成为低空产业的标准引领者与生态构建者。
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">核心团队</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="development-section">
        <div className="container">
          <h2 className="section-title">发展历程</h2>
          <button
            className="btn-outline"
            disabled
            style={{ opacity: 0.5, cursor: "not-allowed" }}
          >
            敬请期待
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
