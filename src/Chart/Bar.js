import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/productContext";
import ChartBar from "./BarChart";

const Bar = () => {
  const { filter_Products } = useGlobalContext();
  const chartData = filter_Products.map((product) => {
    return { label: product.title, value: product.discountPercentage };
  });
  return (
    <Wrapper>
      <div className="chart-bar">
        <ChartBar data={chartData} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .chart-bar {
    width: 90%;
  }
  svg {
    border-radius: 5px;
  }
`;
export default Bar;
