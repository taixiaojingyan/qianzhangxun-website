import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "首页" },
    { path: "/about", label: "关于我们" },
    { path: "/technology", label: "核心技术" },
    { path: "/solutions", label: "解决方案" },
    { path: "/business", label: "商业化平台" },
    { path: "/news", label: "新闻动态" },
    { path: "/join", label: "加入我们" },
    { path: "/contact", label: "联系我们" },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          千嶂巡 · 天枢智航
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
