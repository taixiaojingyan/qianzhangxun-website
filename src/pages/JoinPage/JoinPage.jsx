import React from "react";
import "./JoinPage.css";

const positions = [
  {
    title: "飞控算法工程师",
    location: "杭州",
    type: "全职",
    description: "负责飞控算法开发、优化与仿真验证。",
  },
  {
    title: "无人机飞手/空域规划师",
    location: "杭州/长三角",
    type: "全职",
    description: "负责飞行任务规划、航线设计与现场执行。",
  },
  {
    title: "PCB硬件工程师",
    location: "杭州",
    type: "全职",
    description: "负责航电模块硬件设计、调试与量产。",
  },
  {
    title: "低空运营管理",
    location: "长三角各城市",
    type: "全职",
    description: "负责基站运营、客户对接与团队管理。",
  },
];

const partnerUniversities = [
  "江苏大学",
  "上海交通大学",
  "浙江大学",
  "南京航空航天大学",
  "杭州电子科技大学",
  "宁波诺丁汉大学",
  "加州大学",
];

const JoinPage = () => {
  return (
    <div className="join-page">
      <section className="join-hero">
        <div className="container">
          <h1 className="page-title">加入我们</h1>
          <p className="hero-subtitle">与我们一起，定义低空经济的未来</p>
        </div>
      </section>

      <section className="training-section">
        <div className="container">
          <h2 className="section-title">人才培训计划</h2>
          <div className="training-stats">
            <div className="training-stat">
              <div className="stat-number">2万+</div>
              <div className="stat-label">年培养专业人才</div>
            </div>
            <div className="training-stat">
              <div className="stat-number">20万+</div>
              <div className="stat-label">带动就业</div>
            </div>
          </div>
          <div className="training-desc">
            <p>
              千嶂巡联合高校及行业机构，打造低空经济人才培养体系，
              涵盖飞控技术、航电系统、空域管理、运营服务等方向，
              为行业持续输送高质量人才。
            </p>
          </div>
        </div>
      </section>

      <section className="positions-section">
        <div className="container">
          <h2 className="section-title">热门岗位</h2>
          <div className="positions-grid">
            {positions.map((position, index) => (
              <div key={index} className="position-card">
                <h3 className="position-title">{position.title}</h3>
                <div className="position-meta">
                  <span className="location">📍 {position.location}</span>
                  <span className="type">💼 {position.type}</span>
                </div>
                <p className="position-desc">{position.description}</p>
                <button className="btn-outline-small" disabled>
                  查看详情（筹备中）
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="universities-section">
        <div className="container">
          <h2 className="section-title">合作高校</h2>
          <div className="universities-grid">
            {partnerUniversities.map((uni, index) => (
              <div key={index} className="uni-card">
                <span className="uni-icon">🎓</span>
                <span className="uni-name">{uni}</span>
              </div>
            ))}
          </div>
          <div className="cooperation-note">
            <p>
              诚邀更多高校及培训机构合作，共同培养低空经济专业人才。
              <br />
              合作联系：
              <a href="mailto:hr@qianzhangxun.com">hr@qianzhangxun.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
