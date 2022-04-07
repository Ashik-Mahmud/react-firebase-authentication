import React from "react";
import styled from "styled-components";

const Overview = () => {
  return (
    <OverviewContainer>
      <div className="title">
        <h1>Overview</h1>
        <p>you will get all the over view here</p>
      </div>
      <div className="overview-container">
        <h1>
          Welcome to dashboard <span className="colorize">Ashik Mahmud</span>
        </h1>
      </div>
    </OverviewContainer>
  );
};
const OverviewContainer = styled.section`
  position: relative;
  .overview-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    font-size: 3rem;
  }
`;
export default Overview;
