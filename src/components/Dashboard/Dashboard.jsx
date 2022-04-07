import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className="dashboard-container">
        <aside>
          <h1>Sidebar</h1>
        </aside>
        <div className="dashboard-content">
          <h1>Content will goes here</h1>
        </div>
      </div>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.section`
  position: relative;
  .dashboard-container {
    position: relative;
    aside {
      position: fixed;
      inset: 0;
      max-width: 300px;
      height: 100%;
      background-color: var(--main-color);
      z-index: 3;
      padding: 1rem;
    }
  }
`;

export default Dashboard;
