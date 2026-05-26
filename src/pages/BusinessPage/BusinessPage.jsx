import React, { useEffect } from "react";
import "./BusinessPage.css";

// TODO: 后续从 API 获取营收来源数据
const getRevenueSources = () => [
  {
    title: "TAS系统与专利授权",
    amount: "1.2亿元",
    amountValue: 1.2,
    unit: "亿元",
    desc: "销售TAFCS飞控模块并进行专利授权，首年预估营收1.2亿元，随市场推广持续增长。",
    trend: "+85% YoY",
    icon: "🔑"
  },
  {
    title: "渠道服务",
    amount: "持续增长",
    amountValue: null,
    unit: "",
    desc: "提供无人机、直升机、eVTOL等全品类航空器供应，覆盖农业、文旅、医疗等场景，获取稳定渠道收入。",
    trend: "年增长45%",
    icon: "📡"
  },
  {
    title: "应用场景解决方案定制",
    amount: "可观营收",
    amountValue: null,
    unit: "",
    desc: "针对物流配送、医疗救护、应急救援等行业，提供定制化解决方案并牵头实操，创造可观营收。",
    trend: "项目制",
    icon: "🎯"
  },
  {
    title: "数据增值服务",
    amount: "增值收益",
    amountValue: null,
    unit: "",
    desc: "整合内部数据，为客户提供供需渠道对接及行业智库服务，满足市场分析需求，获取数据增值收益。",
    trend: "高毛利",
    icon: "📊"
  },
  {
    title: "人才产出与衍生服务",
    amount: "2万人/年",
    amountValue: 2,
    unit: "万人/年",
    desc: "年培养专业人才超2万人，提供设备租赁、资质认证等衍生服务，进一步拓展营收渠道。",
    trend: "培训+服务",
    icon: "👨‍🎓"
  },
];

// TODO: 后续从 API 获取城市数据
const getCities = () => ({
  core: ["上海", "苏州", "杭州"],
  surrounding: [
    "南京", "无锡", "常州", "镇江", "扬州", "南通", "嘉兴", "湖州", "绍兴", "宁波",
    "舟山", "台州", "合肥", "芜湖", "马鞍山", "铜陵", "安庆", "池州", "宣城", "滁州",
    "蚌埠", "淮南", "淮北", "黄山", "阜阳", "六安", "亳州"
  ]
});

// TODO: 后续从 API 获取预测数据
const getForecastData = () => ({
  fiveYearRevenue: 50,
  cagr: 120,
  hardwareMargin: 65,
  serviceMargin: 35,
  yearlyGrowth: [
    { year: "第1年", value: 1.2, percentage: 15 },
    { year: "第2年", value: 2.6, percentage: 30 },
    { year: "第3年", value: 5.5, percentage: 50 },
    { year: "第4年", value: 10.2, percentage: 75 },
    { year: "第5年", value: 18.5, percentage: 100 }
  ]
});

const BusinessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const revenueSources = getRevenueSources();
  const cities = getCities();
  const forecast = getForecastData();

  return (
    <div className="business-page">
      {/* Hero 区域 */}
      <section className="business-hero">
        <div className="hero-bg-particles"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="business-hero-content">
            <span className="hero-badge">商业化 · 生态</span>
            <h1 className="page-title">
              商业化<span className="gradient-text">平台</span>
            </h1>
            <p className="hero-subtitle">
              构建可持续的低空经济商业生态，实现多方共赢
            </p>
            <div className="hero-quote">
              <span className="quote-icon">💎</span>
              <span>5年保底累计收入超50亿元 · 年复合增长率120%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 商业模式 - 营收来源 */}
      <section className="revenue-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">多元营收</span>
            <h2 className="section-title">商业<span className="gradient-text">模式</span></h2>
            <p className="section-desc">
              五大核心营收来源，构建稳定可持续的商业闭环
            </p>
          </div>

          <div className="revenue-grid">
            {revenueSources.map((source, index) => (
              <div key={index} className="revenue-card glass-card">
                <div className="revenue-icon">{source.icon}</div>
                <div className="revenue-content">
                  <h3 className="revenue-title">{source.title}</h3>
                  {source.amountValue && (
                    <div className="revenue-amount">
                      <span className="amount-value">{source.amount}</span>
                      <span className="amount-trend">{source.trend}</span>
                    </div>
                  )}
                  {!source.amountValue && (
                    <div className="revenue-badge">{source.amount}</div>
                  )}
                  <p className="revenue-desc">{source.desc}</p>
                  <div className="revenue-footer">
                    <span className="trend-icon">📈</span>
                    <span className="trend-text">{source.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 蛛网节点布局 */}
      <section className="network-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">基础设施</span>
            <h2 className="section-title">蛛网<span className="gradient-text">节点布局</span></h2>
            <p className="section-desc">
              长三角核心区全覆盖，构建低空经济基础设施网络
            </p>
          </div>

          <div className="network-visual glass-card">
            <div className="map-container">
              <div className="map-header">
                <div className="map-title">
                  <span className="title-icon">🗺️</span>
                  长三角低空导航基站网络
                </div>
                <div className="map-stats">
                  <div className="map-stat">
                    <span className="stat-value">50</span>
                    <span className="stat-unit">个</span>
                    <span className="stat-label">首批基站</span>
                  </div>
                  <div className="map-stat">
                    <span className="stat-value">30+</span>
                    <span className="stat-unit">城</span>
                    <span className="stat-label">覆盖城市</span>
                  </div>
                </div>
              </div>

              {/* 节点可视化 */}
              <div className="network-visualization">
                {/* 核心枢纽 */}
                <div className="hub-connections">
                  <div className="connection-line line-sz-hz"></div>
                  <div className="connection-line line-hz-sz"></div>
                  <div className="connection-line line-sh-sz"></div>
                </div>
                
                {/* 核心城市 */}
                <div className="core-hubs">
                  {cities.core.map((city, idx) => (
                    <div key={idx} className={`hub-node hub-${city === '上海' ? 'shanghai' : city === '苏州' ? 'suzhou' : 'hangzhou'}`}>
                      <div className="hub-pulse"></div>
                      <div className="hub-name">{city}</div>
                      <div className="hub-role">核心枢纽</div>
                    </div>
                  ))}
                </div>

                {/* 周边城市云 */}
                <div className="surrounding-cities">
                  <div className="cities-cloud">
                    {cities.surrounding.map((city, idx) => (
                      <span key={idx} className="city-tag">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="partner-badges">
                <div className="partner-badge">
                  <span className="partner-icon">🤝</span>
                  联合建设 · 华为
                </div>
                <div className="partner-badge">
                  <span className="partner-icon">🛰️</span>
                  联合建设 · 北斗
                </div>
                <div className="partner-badge">
                  <span className="partner-icon">🏗️</span>
                  中电科战略合作
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 营收预测 */}
      <section className="forecast-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">财务展望</span>
            <h2 className="section-title">营收<span className="gradient-text">预测</span></h2>
            <p className="section-desc">
              高速增长轨迹，清晰的商业变现路径
            </p>
          </div>

          <div className="forecast-card glass-card">
            <div className="forecast-stats">
              <div className="forecast-stat">
                <div className="stat-icon">💰</div>
                <div className="stat-number">{forecast.fiveYearRevenue}亿元+</div>
                <div className="stat-label">5年保底累计收入</div>
                <div className="stat-trend">复合增长强劲</div>
              </div>
              <div className="forecast-stat">
                <div className="stat-icon">📈</div>
                <div className="stat-number">{forecast.cagr}%</div>
                <div className="stat-label">年复合增长率</div>
                <div className="stat-trend">高于行业平均</div>
              </div>
            </div>

            <div className="margin-stats">
              <div className="margin-card">
                <div className="margin-icon">⚙️</div>
                <div className="margin-info">
                  <span className="margin-label">硬件利润率</span>
                  <span className="margin-value">{forecast.hardwareMargin}%</span>
                </div>
                <div className="margin-bar">
                  <div className="margin-fill" style={{ width: `${forecast.hardwareMargin}%` }}></div>
                </div>
              </div>
              <div className="margin-card">
                <div className="margin-icon">☁️</div>
                <div className="margin-info">
                  <span className="margin-label">服务利润率</span>
                  <span className="margin-value">{forecast.serviceMargin}%</span>
                </div>
                <div className="margin-bar">
                  <div className="margin-fill" style={{ width: `${forecast.serviceMargin}%` }}></div>
                </div>
              </div>
            </div>

            <div className="growth-chart">
              <div className="chart-header">
                <span className="chart-title">5年营收增长趋势</span>
                <span className="chart-unit">单位：亿元</span>
              </div>
              <div className="chart-bars">
                {forecast.yearlyGrowth.map((item, idx) => (
                  <div key={idx} className="chart-item">
                    <div className="chart-label">{item.year}</div>
                    <div className="chart-bar-container">
                      <div 
                        className="chart-bar-fill" 
                        style={{ width: `${item.percentage}%` }}
                      >
                        <span className="bar-value">{item.value}亿</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="forecast-note">
              <span className="note-icon">📋</span>
              <span>注：营收预测基于当前市场分析和业务规划，实际数据可能因市场环境变化而有所调整</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="business-cta">
        <div className="container">
          <div className="cta-card glass-card">
            <div className="cta-icon">🤝</div>
            <h3>寻求商业合作</h3>
            <p>无论是技术授权、渠道合作还是投资洽谈，我们都期待与您共创低空经济未来</p>
            <button className="btn-primary">成为合作伙伴</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;