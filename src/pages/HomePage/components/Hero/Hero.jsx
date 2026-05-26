import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

// TODO: 后续从 API 获取这些数据
const getHeroData = () => ({
  badge: "TAS · 低空经济技术生态",
  title: "天枢智航 · 引领低空产业",
  titleGradient: "联合规范标杆",
  subtitle: "国内首个完全自主知识产权的低空经济技术生态（TAS）",
  stats: {
    scale: { value: 1.5, unit: "万亿元", label: "2025中国低空经济规模", trend: "↑ +187% YoY" },
    base: { value: 50, unit: "个", label: "首批低空导航基站", trend: "联合华为 · 北斗" },
    revenue: { value: 1.2, unit: "亿元", label: "首年飞控模块预估营收", trend: "毛利率 65%" },
    talents: { value: 2, unit: "万人", label: "年培养专业人才", trend: "带动就业20万+" }
  },
  cta: {
    primary: { text: "探索TAS技术", link: "/technology" },
    secondary: { text: "合作联系", link: "/contact" }
  }
});

// TODO: 后续从 API 获取背景资源
const getBackgroundAssets = (baseUrl) => [
  { type: 'video', src: `${baseUrl}assets/videos/flight-test.mp4`, poster: `${baseUrl}assets/images/flight-poster.png`, label: '固定翼飞行器试飞' },
  { type: 'video', src: `${baseUrl}assets/videos/tas-interface.mp4`, poster: `${baseUrl}assets/images/tas-poster.png`, label: 'TAS系统界面' },
  { type: 'video', src: `${baseUrl}assets/videos/base-station.mp4`, poster: `${baseUrl}assets/images/base-poster.png`, label: '基站网络图' },
];

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL; // 移到组件内部
  const [stats, setStats] = useState({ scale: 0, base: 0, revenue: 0, talents: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);
  const [bgIndex, setBgIndex] = useState(0);
  
  const heroData = getHeroData();
  const bgItems = getBackgroundAssets(baseUrl);
  const [videoErrors, setVideoErrors] = useState({});

  // 检测移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 数字滚动动画
  useEffect(() => {
    const targetStats = {
      scale: heroData.stats.scale.value,
      base: heroData.stats.base.value,
      revenue: heroData.stats.revenue.value,
      talents: heroData.stats.talents.value
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isAnimating) {
        setIsAnimating(true);
        const duration = 2000;
        const startTime = performance.now();
        
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          setStats({
            scale: (easeProgress * targetStats.scale).toFixed(1),
            base: Math.floor(easeProgress * targetStats.base),
            revenue: (easeProgress * targetStats.revenue).toFixed(1),
            talents: Math.floor(easeProgress * targetStats.talents),
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [heroData, isAnimating]);

  // 背景轮播
  useEffect(() => {
    if (bgItems.length <= 1) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [bgItems.length]);

  const currentBg = bgItems[bgIndex];
  const hasError = videoErrors[currentBg.src];
  return (
    <section className="hero-section">
      <div className="hero-background">
          {!hasError ? (
        <video
          key={currentBg.src}
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          poster={currentBg.poster}
          onError={() => {
            console.log('视频加载失败:', currentBg.src);
            setVideoErrors(prev => ({ ...prev, [currentBg.src]: true }));
          }}
        >
          <source src={currentBg.src} type="video/mp4" />
        </video>
      ) : (
        <img 
          src={currentBg.poster} 
          className="hero-bg-video"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          alt={currentBg.label}
        />
      )}
        <div className="hero-bg-overlay"></div>
        <div className="hero-tech-glow"></div>
        <div className="hero-scan-line"></div>
        <div className="hero-grid-particles"></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">{heroData.badge}</div>
            <h1 className="hero-title">
              {isMobile ? "天枢智航" : heroData.title}
              <span className="gradient-text">
                {isMobile ? "·引领低空" : heroData.titleGradient}
              </span>
            </h1>
            <p className="hero-subtitle">{heroData.subtitle}</p>
            <div className="hero-buttons">
              <Link to={heroData.cta.primary.link} className="btn-primary">
                {heroData.cta.primary.text}
                <span className="btn-arrow">→</span>
              </Link>
              <Link to={heroData.cta.secondary.link} className="btn-outline">
                {heroData.cta.secondary.text}
                <span className="btn-dot"></span>
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-placeholder">
                <div className="drone-icon">🚁</div>
                <div className="orbit-ring orbit-ring-1"></div>
                <div className="orbit-ring orbit-ring-2"></div>
                <div className="orbit-ring orbit-ring-3"></div>
                {/* 新增：脉冲光环 */}
                <div className="pulse-ring"></div>
                {/* 新增：雷达扫描效果 */}
                <div className="radar-scan"></div>
              </div>
              <div className="data-streams">
                <span className="stream">TAS</span>
                <span className="stream">5G</span>
                <span className="stream">AI</span>
                {isMobile && <span className="stream">北斗</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="stats-container" ref={statsRef}>
          <div className="stat-card">
            <div className="stat-number">{stats.scale}{heroData.stats.scale.unit}</div>
            <div className="stat-info">
              <div className="stat-label">{heroData.stats.scale.label}</div>
              <div className="stat-trend">{heroData.stats.scale.trend}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.base}{heroData.stats.base.unit}</div>
            <div className="stat-info">
              <div className="stat-label">{heroData.stats.base.label}</div>
              <div className="stat-trend">{heroData.stats.base.trend}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.revenue}{heroData.stats.revenue.unit}</div>
            <div className="stat-info">
              <div className="stat-label">{heroData.stats.revenue.label}</div>
              <div className="stat-trend">{heroData.stats.revenue.trend}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.talents}{heroData.stats.talents.unit}</div>
            <div className="stat-info">
              <div className="stat-label">{heroData.stats.talents.label}</div>
              <div className="stat-trend">{heroData.stats.talents.trend}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;