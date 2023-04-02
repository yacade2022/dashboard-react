import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chartt from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chartt, FusionTheme);

const Chart = ({ data }) => {
  const chartConfigs = {
    type: "pie2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "InStock",
        theme: "fusion",
        decimals: 0,
      },

      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart;
