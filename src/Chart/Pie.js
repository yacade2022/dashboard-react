import React from "react";
import styled from "styled-components";
import Chart from "./PieChart";
import { useGlobalContext } from "../context/productContext";

const Pie = () => {
  const { filter_Products } = useGlobalContext();  
  const chartData = filter_Products.map((product) => {
    return { label: product.title.substring(0, 14), value: product.stock };
  });
  return (
    <Wrapper>
      <div className="pie-chart">
        <Chart data={chartData} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .pie-chart {
    width: 90%;
  }
  svg {
    border-radius: 5px;
  }
`;
export default Pie;
