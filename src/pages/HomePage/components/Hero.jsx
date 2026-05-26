import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    scale: 0,
    base: 0,
    revenue: 0,
    talents: 0,
  });
  const statsRef = useRef(null);

  useEffect(() => {
    const targetStats = { scale: 1.5, base: 50, revenue: 1.2, talents: 2 };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          setStats({
            scale: (progress * targetStats.scale).toFixed(1),
            base: Math.floor(progress * targetStats.base),
            revenue: (progress * targetStats.revenue).toFixed(1),
            talents: Math.floor(progress * targetStats.talents),
          });
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">天枢智航 · 引领低空产业联合规范标杆</h1>
            <p className="hero-subtitle">
              国内首个完全自主知识产权的低空经济技术生态（TAS）
            </p>
            <div className="hero-buttons">
              <Link to="/technology" className="btn-primary">
                探索TAS技术
              </Link>
              <Link to="/contact" className="btn-outline">
                合作联系
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-placeholder">
              <div className="drone-icon">🚁</div>
            </div>
          </div>
        </div>

        <div className="stats-container" ref={statsRef}>
          <div className="stat-card">
            <div className="stat-number">{stats.scale}万亿元</div>
            <div className="stat-label">2025中国低空经济规模</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.base}个</div>
            <div className="stat-label">首批低空导航基站</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.revenue}亿元</div>
            <div className="stat-label">首年飞控模块预估营收</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.talents}万人</div>
            <div className="stat-label">年培养专业人才</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
