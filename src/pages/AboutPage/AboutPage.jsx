import React, { useEffect } from "react";
import "./AboutPage.css";
import { setMeta } from "../../utils/meta";

// TODO: 后续从 API 获取团队数据
const getTeamMembers = () => [
  {
    name: "CTO / 专利第一受益人",
    role: "首席技术官",
    desc: "宁波诺丁汉大学国际商务背景，莫斯科鲍曼国立技术大学录取。具备飞行器全套设计能力，主导TAFCS飞控系统开发。",
    tags: ["飞控系统", "专利布局", "TAS生态"]
  },
  {
    name: "PCB工程师",
    role: "硬件工程负责人",
    desc: "辽宁大学，全国科创大赛金牌、科协主席奖。发明雷击预警手环，ISEF资格，拥有多项青少年科技创新荣誉。",
    tags: ["PCB设计", "硬件创新", "青少年科创"]
  },
  {
    name: "人工智能工程师",
    role: "AI算法负责人",
    desc: "郑州大学，RoboMaster战队负责人。深度多模态聚类研究，六个数据集准确率提升1-5%，预投CVPR 2026。",
    tags: ["深度学习", "多模态聚类", "计算机视觉"]
  },
  {
    name: "系统架构工程师",
    role: "系统架构师",
    desc: "莫斯科鲍曼国立技术大学，火箭系统与航空航天方向，国际低空经济渠道桥接，民兵应急连背景。",
    tags: ["火箭系统", "航空航天", "国际渠道"]
  },
];

// TODO: 后续从 API 获取公司介绍
const getCompanyIntro = () => ({
  title: "千嶂巡（天枢智航）",
  description: `是一家专注低空经济领域核心技术研发与商业化集成的科技公司，总部位于杭州。
    公司自主研创拥有全套知识产权的TAS（Troposphere Aviation System）技术生态，
    涵盖TAFCS飞控系统、专用机型设计、模块化航电、自动驾驶及空管网络，
    其中TAFCS飞控系统可将飞行操作难度从三维降至二维（类似于手动挡到自动挡的变革），
    大幅降低航空门槛与人才培养成本。`,
  highlights: [
    "联合华为、北斗、中电科、商飞等合作伙伴",
    "长三角规划建设50个低空导航基站",
    "覆盖物流配送、农业植保、医疗救护、应急救援、城市交通及文旅观光等场景",
    "以'低成本、低难度、高安全、智能化'为使命"
  ]
});

const AboutPage = () => {
  const teamMembers = getTeamMembers();
  const companyIntro = getCompanyIntro();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setMeta({
      title: `${companyIntro.title} - 关于我们`,
      description: companyIntro.description.replace(/\s+/g, ' ').trim().slice(0, 160),
      keywords: '低空经济, TAS, 飞控, 无人机, 千嶂巡',
    });

    return () => {
      // optional: cleanup if needed
    };
  }, [companyIntro]);

  return (
    <main className="about-page">
      {/* Hero 区域 - 科技风 */}
      <header className="about-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="about-hero-content">
            <span className="hero-badge">关于我们</span>
            <h1 className="page-title">
              引领低空产业<span className="gradient-text">联合规范标杆</span>
            </h1>
            <p className="hero-subtitle">
              专注低空经济领域核心技术研发与商业化集成
            </p>
          </div>
        </div>
      </header>

      {/* 公司简介 - 玻璃卡片风格 */}
      <section className="company-section" aria-labelledby="company-intro">
        <div className="container">
          <article className="company-card glass-card">
            <div className="company-icon">🚁</div>
            <h2 id="company-intro" className="company-name">{companyIntro.title}</h2>
            <p className="company-description">{companyIntro.description}</p>
            <div className="company-highlights">
              {companyIntro.highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-dot"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">精英团队</span>
            <h2 className="section-title">核心<span className="gradient-text">技术团队</span></h2>
            <p className="section-desc">
              汇聚航空航天、人工智能、硬件工程等多领域顶尖人才
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article key={index} className="team-card glass-card" data-aos="fade-up">
                <div className="team-icon" aria-hidden>👨‍🚀</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
                <div className="team-tags">
                  {member.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 - 占位 */}
      <section className="development-section" aria-labelledby="dev-title">
        <div className="container">
          <div className="dev-content">
            <div className="dev-icon" aria-hidden>📅</div>
            <h2 id="dev-title" className="section-title">发展历程</h2>
            <p className="dev-message">更多精彩内容正在筹备中，敬请期待</p>
            <button className="btn-outline" disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>
              即将上线
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;