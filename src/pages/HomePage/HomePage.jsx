import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import CoreValues from "./components/CoreValues/CoreValues";
import Partners from "./components/Partners/Partners";
import "./HomePage.css";

const HomePage = () => {
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