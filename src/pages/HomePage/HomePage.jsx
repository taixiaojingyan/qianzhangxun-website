import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Partners from "./components/Partners";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage">
      <Hero />
      <CoreValues />
      <Partners />
    </div>
  );
};

export default HomePage;
