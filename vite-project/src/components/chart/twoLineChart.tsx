import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface HealthyRiskLineChartProps {
  data: {
    chart_title: string;
    x_desc: string;
    y_desc: string;
    category_gd: string;
    category_gh: string;
    x_axis_gd: number[];
    y_axis_gd_value: number[];
    y_axis_gh_value: number[];
  };
}

export const TwoLineChart: React.FC<HealthyRiskLineChartProps> = ({ data }) => {
  return (
    <div style={{ height: "450px", width: "80%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-30px",
          transform: "rotate(-90deg)",
          transformOrigin: "left center",
          fontSize: "14px",
          color: "#333",
        }}
      >
        Number of People
      </div>
      {/* <h3>{data.chart_title}</h3> */}
      <LineChart
        series={[
          { data: data.y_axis_gd_value, label: data.category_gd },
          { data: data.y_axis_gh_value, label: data.category_gh },
        ]}
        xAxis={[
          { scaleType: "point", data: data.x_axis_gd, label: data.x_desc },
        ]}
        yAxis={[{ label: "" }]}
      />
    </div>
  );
};
