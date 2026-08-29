import Hero from "../../components/sections/Hero/Hero";
import WhatWeDo from "../../components/sections/WhatWeDo/WhatWeDo";
import Industries from "../../components/sections/Industries/Industries";
import FinalCTA from "../../components/sections/FinalCTA/FinalCTA";

import "./Home.css";


function Home() {

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="home-section home-section--hero">
        <Hero />
      </div>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <div
        className="home-section home-section--01"
        data-section-number="01"
        data-section-name="WHAT WE DO"
      >
        <WhatWeDo />
      </div>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <div
        className="home-section home-section--02"
        data-section-number="02"
        data-section-name="INDUSTRIES"
      >
        <Industries />
      </div>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <div
        className="home-section home-section--03"
        data-section-number="03"
        data-section-name="LET'S WORK TOGETHER"
      >
        <FinalCTA />
      </div>

    </main>
  );
}


export default Home;