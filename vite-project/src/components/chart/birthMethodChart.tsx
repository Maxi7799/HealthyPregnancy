import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

interface PieChartProps {
  data: {
    chart_title: string;
    pie_chart: {
      method: string;
      value: number;
      percent: string;
    }[];
  };
}

const birthMethodChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <PieChart
      series={[
        {
          data: data.pie_chart.map((item, index) => ({
            id: index,
            value: item.value,
            label: `${item.method} accounts for ${item.percent}%`,
          })),
          innerRadius: 20,
          outerRadius: 150,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: 0,
          endAngle: 360,
        },
      ]}
      height={300}
    />
  );
};

export default birthMethodChart;
