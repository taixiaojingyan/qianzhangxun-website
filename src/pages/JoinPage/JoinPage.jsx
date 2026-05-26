import React, { useEffect } from "react";
import "./JoinPage.css";

// TODO: 后续从 API 获取岗位数据
const getPositions = () => [
  {
    title: "飞控算法工程师",
    location: "杭州",
    type: "全职",
    level: "资深",
    description: "负责飞控算法开发、优化与仿真验证，参与TAFCS飞控系统核心算法迭代。",
    requirements: ["精通C++/Python", "熟悉控制理论", "有无人机开发经验优先"],
    salary: "30-60K",
    icon: "⚙️"
  },
  {
    title: "无人机飞手/空域规划师",
    location: "杭州/长三角",
    type: "全职",
    level: "中级",
    description: "负责飞行任务规划、航线设计与现场执行，统筹无人机编队作业。",
    requirements: ["持无人机驾驶员执照", "熟悉空域法规", "有编队飞行经验"],
    salary: "15-30K",
    icon: "🚁"
  },
  {
    title: "PCB硬件工程师",
    location: "杭州",
    type: "全职",
    level: "资深",
    description: "负责航电模块硬件设计、调试与量产，优化电路性能和成本。",
    requirements: ["精通Altium Designer", "熟悉EMC/EMI", "有量产经验"],
    salary: "25-50K",
    icon: "🔧"
  },
  {
    title: "低空运营管理",
    location: "长三角各城市",
    type: "全职",
    level: "管理",
    description: "负责基站运营、客户对接与团队管理，推动区域业务落地。",
    requirements: ["3年以上团队管理经验", "熟悉低空经济", "具备商务能力"],
    salary: "35-60K",
    icon: "📊"
  },
  {
    title: "嵌入式软件开发工程师",
    location: "杭州",
    type: "全职",
    level: "中级",
    description: "负责飞控嵌入式系统开发，驱动开发及系统性能优化。",
    requirements: ["精通C/RTOS", "熟悉ARM架构", "有驱动开发经验"],
    salary: "20-45K",
    icon: "💻"
  },
  {
    title: "算法工程师（计算机视觉）",
    location: "杭州",
    type: "全职",
    level: "资深",
    description: "负责视觉感知算法开发，包括目标检测、跟踪、避障等。",
    requirements: ["精通PyTorch/TensorFlow", "有CVPR论文优先", "熟悉点云处理"],
    salary: "35-70K",
    icon: "👁️"
  },
];

// TODO: 后续从 API 获取合作高校数据
const getPartnerUniversities = () => [
  { name: "江苏大学", icon: "🎓", type: "战略合作" },
  { name: "上海交通大学", icon: "🎓", type: "科研合作" },
  { name: "浙江大学", icon: "🎓", type: "产学研基地" },
  { name: "南京航空航天大学", icon: "🎓", type: "人才培养" },
  { name: "杭州电子科技大学", icon: "🎓", type: "实习基地" },
  { name: "宁波诺丁汉大学", icon: "🎓", type: "国际交流" },
  { name: "加州大学", icon: "🌎", type: "学术合作" },
  { name: "莫斯科鲍曼国立技术大学", icon: "🌎", type: "国际联合实验室" },
];

// TODO: 后续从 API 获取培训数据
const getTrainingStats = () => ({
  annualTalent: 20000,
  employmentDriven: 200000,
  courses: 12,
  partners: 25
});

const JoinPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const positions = getPositions();
  const universities = getPartnerUniversities();
  const trainingStats = getTrainingStats();

  return (
    <div className="join-page">
      {/* Hero 区域 */}
      <section className="join-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="join-hero-content">
            <span className="hero-badge">加入我们</span>
            <h1 className="page-title">
              与我们一起，<span className="gradient-text">定义低空经济的未来</span>
            </h1>
            <p className="hero-subtitle">
              我们正在寻找热爱技术、敢于创新的伙伴，共同构建低空经济新生态
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}>
                查看热招岗位
                <span className="btn-arrow">↓</span>
              </button>
              <button className="btn-outline" onClick={() => document.getElementById('cooperation')?.scrollIntoView({ behavior: 'smooth' })}>
                高校合作
                <span className="btn-dot"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 人才培训计划 */}
      <section className="training-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">人才培养</span>
            <h2 className="section-title">人才<span className="gradient-text">培训计划</span></h2>
            <p className="section-desc">
              打造低空经济人才培养体系，为行业持续输送高质量人才
            </p>
          </div>

          <div className="training-stats">
            <div className="training-stat glass-card">
              <div className="stat-icon">👨‍🎓</div>
              <div className="stat-number">{trainingStats.annualTalent.toLocaleString()}+</div>
              <div className="stat-label">年培养专业人才</div>
              <div className="stat-trend">覆盖飞控、航电、运营等方向</div>
            </div>
            <div className="training-stat glass-card">
              <div className="stat-icon">💼</div>
              <div className="stat-number">{trainingStats.employmentDriven.toLocaleString()}+</div>
              <div className="stat-label">带动就业</div>
              <div className="stat-trend">持续增长中</div>
            </div>
            <div className="training-stat glass-card">
              <div className="stat-icon">📚</div>
              <div className="stat-number">{trainingStats.courses}+</div>
              <div className="stat-label">专业课程体系</div>
              <div className="stat-trend">理论与实践结合</div>
            </div>
            <div className="training-stat glass-card">
              <div className="stat-icon">🤝</div>
              <div className="stat-number">{trainingStats.partners}+</div>
              <div className="stat-label">合作机构</div>
              <div className="stat-trend">产教融合</div>
            </div>
          </div>

          <div className="training-desc glass-card">
            <div className="desc-icon">📖</div>
            <p>
              千嶂巡联合高校及行业机构，打造低空经济人才培养体系，
              涵盖飞控技术、航电系统、空域管理、运营服务等方向，
              为行业持续输送高质量人才。通过"理论+实践+项目"的培养模式，
              确保学员掌握前沿技术，快速适应行业需求。
            </p>
            <div className="training-features">
              <span className="feature">✅ 实战项目驱动</span>
              <span className="feature">✅ 企业导师带教</span>
              <span className="feature">✅ 就业推荐服务</span>
            </div>
          </div>
        </div>
      </section>

      {/* 热门岗位 */}
      <section id="positions" className="positions-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">职业机会</span>
            <h2 className="section-title">热门<span className="gradient-text">岗位</span></h2>
            <p className="section-desc">
              加入我们，与顶尖团队一起改变世界
            </p>
          </div>

          <div className="positions-grid">
            {positions.map((position, index) => (
              <div key={index} className="position-card glass-card">
                <div className="position-header">
                  <div className="position-icon">{position.icon}</div>
                  <div className="position-badge">{position.level}</div>
                </div>
                <h3 className="position-title">{position.title}</h3>
                <div className="position-meta">
                  <span className="meta-item">
                    <span className="meta-icon">📍</span>
                    {position.location}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">💼</span>
                    {position.type}
                  </span>
                  <span className="meta-item salary">
                    <span className="meta-icon">💰</span>
                    {position.salary}
                  </span>
                </div>
                <p className="position-desc">{position.description}</p>
                <div className="position-requirements">
                  <div className="req-title">任职要求：</div>
                  <ul>
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="apply-btn" disabled>
                  立即申请
                  <span className="apply-icon">→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="more-positions">
            <button className="btn-outline" disabled>
              <span className="btn-icon">📢</span>
              更多岗位筹备中
            </button>
          </div>
        </div>
      </section>

      {/* 合作高校 */}
      <section id="cooperation" className="universities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">产教融合</span>
            <h2 className="section-title">合作<span className="gradient-text">高校</span></h2>
            <p className="section-desc">
              携手顶尖高校，共育低空经济人才
            </p>
          </div>

          <div className="universities-grid">
            {universities.map((uni, index) => (
              <div key={index} className="uni-card glass-card">
                <div className="uni-icon">{uni.icon}</div>
                <div className="uni-name">{uni.name}</div>
                <div className="uni-type">{uni.type}</div>
              </div>
            ))}
          </div>

          <div className="cooperation-note glass-card">
            <div className="cooperation-icon">🤝</div>
            <h3>诚邀合作</h3>
            <p>
              我们诚邀更多高校及培训机构合作，共同培养低空经济专业人才。
              提供实习基地、联合实验室、课程共建等多种合作模式。
            </p>
            <div className="contact-email">
              <span className="email-icon">📧</span>
              <a href="mailto:hr@qianzhangxun.com">hr@qianzhangxun.com</a>
            </div>
            <div className="cooperation-tags">
              <span className="coop-tag">实习基地</span>
              <span className="coop-tag">联合实验室</span>
              <span className="coop-tag">课程共建</span>
              <span className="coop-tag">定向培养</span>
            </div>
          </div>
        </div>
      </section>

      {/* 福利待遇 */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">加入我们</span>
            <h2 className="section-title">我们<span className="gradient-text">提供</span></h2>
            <p className="section-desc">
              让每一位伙伴都能在这里实现价值、收获成长
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card glass-card">
              <div className="benefit-icon">💰</div>
              <h4>竞争力薪酬</h4>
              <p>行业领先的薪资待遇，年度调薪机制，项目奖金+股权激励</p>
            </div>
            <div className="benefit-card glass-card">
              <div className="benefit-icon">🏖️</div>
              <h4>假期福利</h4>
              <p>弹性工作制，15天带薪年假，法定节假日+节日福利</p>
            </div>
            <div className="benefit-card glass-card">
              <div className="benefit-icon">📚</div>
              <h4>成长空间</h4>
              <p>技术培训、行业会议、导师制、快速晋升通道</p>
            </div>
            <div className="benefit-card glass-card">
              <div className="benefit-icon">🏥</div>
              <h4>全面保障</h4>
              <p>五险一金+补充商业保险，年度体检，员工关怀计划</p>
            </div>
            <div className="benefit-card glass-card">
              <div className="benefit-icon">🚀</div>
              <h4>前沿项目</h4>
              <p>参与国家级低空经济项目，接触最前沿的技术和场景</p>
            </div>
            <div className="benefit-card glass-card">
              <div className="benefit-icon">🏢</div>
              <h4>舒适环境</h4>
              <p>现代化办公环境，免费零食咖啡，团队建设活动</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-card glass-card">
            <div className="cta-icon">🌟</div>
            <h3>找不到合适的岗位？</h3>
            <p>我们一直在寻找优秀的人才，如果您认为自己适合千嶂巡，欢迎投递简历</p>
            <div className="cta-buttons">
              <button className="btn-primary" disabled>
                发送简历
                <span className="btn-arrow">📧</span>
              </button>
              <button className="btn-outline" disabled>
                加入人才库
              </button>
            </div>
            <div className="cta-note">
              <span className="note-icon">💡</span>
              简历请发送至 hr@qianzhangxun.com，标题格式：姓名+应聘岗位
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;