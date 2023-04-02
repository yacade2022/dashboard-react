import React from "react";
import styled from "styled-components";
import Widgets from "../components/Widgets";
import Pie from "../Chart/Pie";
import Bar from "../Chart/Bar";

const Dashboard = () => {
  return (
    <Wrapper>
      <div>
        <Widgets />
        <div className="container-chart">
          <div className="chart">
            <Pie />
            <Bar />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container-chart {
    display: flex;
    justify-content: center;
  }
  .chart {
    width: 90% !important;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  @media (min-width: 768px) {
    .chart {
      grid-template-columns: 1fr 1fr;
    }
  }

  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: 5px !important;
  }
`;
export default Dashboard;
