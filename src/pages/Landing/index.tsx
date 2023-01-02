import React from "react";
import { Link } from "react-router-dom";

import { StyledLandingPage } from "./style";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <main>
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <h2>Center your finances control</h2>
        <p>in a simple and fast way</p>
        <Link to={"/dashboard"}>Start</Link>
      </main>
      <img src="../assets/group-landing-page.svg" alt="Decorative image" />
    </StyledLandingPage>
  );
};

export default LandingPage;
