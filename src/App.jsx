import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ParticleBackground from "./components/Common/ParticleBackground";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
