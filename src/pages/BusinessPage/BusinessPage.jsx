import React from "react";
import "./BusinessPage.css";

const BusinessPage = () => {
  const revenueSources = [
    {
      title: "TAS系统与专利授权",
      amount: "1.2亿元",
      desc: "销售TAFCS飞控模块并进行专利授权，首年预估营收1.2亿元，随市场推广持续增长。",
    },
    {
      title: "渠道服务",
      amount: "持续增长",
      desc: "提供无人机、直升机、eVTOL等全品类航空器供应，覆盖农业、文旅、医疗等场景，获取稳定渠道收入。",
    },
    {
      title: "应用场景解决方案定制",
      amount: "可观营收",
      desc: "针对物流配送、医疗救护、应急救援等行业，提供定制化解决方案并牵头实操，创造可观营收。",
    },
    {
      title: "数据增值服务",
      amount: "增值收益",
      desc: "整合内部数据，为客户提供供需渠道对接及行业智库服务，满足市场分析需求，获取数据增值收益。",
    },
    {
      title: "人才产出与衍生服务",
      amount: "2万人/年",
      desc: "年培养专业人才超2万人，提供设备租赁、资质认证等衍生服务，进一步拓展营收渠道。",
    },
  ];

  const cities = [
    "上海",
    "苏州",
    "杭州",
    "南京",
    "无锡",
    "常州",
    "镇江",
    "扬州",
    "南通",
    "嘉兴",
    "湖州",
    "绍兴",
    "宁波",
    "舟山",
    "台州",
    "合肥",
    "芜湖",
    "马鞍山",
    "铜陵",
    "安庆",
    "池州",
    "宣城",
    "滁州",
    "蚌埠",
    "淮南",
    "淮北",
    "黄山",
    "阜阳",
    "六安",
    "亳州",
  ];

  return (
    <div className="business-page">
      <section className="business-hero">
        <div className="container">
          <h1 className="page-title">商业化平台</h1>
          <p className="hero-subtitle">构建可持续的低空经济商业生态</p>
        </div>
      </section>

      <section className="revenue-section">
        <div className="container">
          <h2 className="section-title">商业模式</h2>
          <div className="revenue-grid">
            {revenueSources.map((source, index) => (
              <div key={index} className="revenue-card">
                <div className="revenue-header">
                  <h3>{source.title}</h3>
                  <span className="revenue-amount">{source.amount}</span>
                </div>
                <p className="revenue-desc">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="network-section">
        <div className="container">
          <h2 className="section-title">蛛网节点布局</h2>
          <div className="network-visual">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-title">长三角低空导航基站网络</div>
                <div className="cities-cloud">
                  {cities.map((city, idx) => (
                    <span key={idx} className="city-tag">
                      {city}
                    </span>
                  ))}
                </div>
                <div className="hub-cities">
                  <div className="hub shanghai">上海</div>
                  <div className="hub suzhou">苏州</div>
                  <div className="hub hangzhou">杭州</div>
                </div>
              </div>
            </div>
            <div className="network-stats">
              <div className="stat-badge">
                <span className="stat-number">50个</span>
                <span className="stat-label">首批低空导航基站</span>
              </div>
              <div className="stat-badge">
                <span className="stat-number">30+</span>
                <span className="stat-label">覆盖城市</span>
              </div>
              <div className="stat-badge">
                <span className="stat-number">华为·北斗</span>
                <span className="stat-label">联合建设</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="forecast-section">
        <div className="container">
          <h2 className="section-title">营收预测</h2>
          <div className="forecast-card">
            <div className="forecast-stats">
              <div className="forecast-item">
                <div className="forecast-number">50亿元+</div>
                <div className="forecast-label">5年保底累计收入</div>
              </div>
              <div className="forecast-item">
                <div className="forecast-number">120%</div>
                <div className="forecast-label">年复合增长率</div>
              </div>
            </div>
            <div className="margin-stats">
              <div className="margin-item">
                <span className="margin-label">硬件利润率</span>
                <span className="margin-value">65%</span>
              </div>
              <div className="margin-item">
                <span className="margin-label">服务利润率</span>
                <span className="margin-value">35%</span>
              </div>
            </div>
            <div className="growth-chart">
              <div className="chart-bar">
                <div className="bar year1" style={{ width: "30%" }}>
                  第1年
                </div>
                <div className="bar year2" style={{ width: "50%" }}>
                  第2年
                </div>
                <div className="bar year3" style={{ width: "70%" }}>
                  第3年
                </div>
                <div className="bar year4" style={{ width: "85%" }}>
                  第4年
                </div>
                <div className="bar year5" style={{ width: "100%" }}>
                  第5年
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
