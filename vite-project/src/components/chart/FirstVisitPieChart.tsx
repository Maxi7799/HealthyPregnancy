import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

interface PieChartProps {
  data: {
    chart_title: string;
    pie_chart: {
      duration: string;
      value: number;
      percent: string;
    }[];
  };
}

const FirstVisitPieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <PieChart
      series={[
        {
          data: data.pie_chart.map((item, index) => ({
            id: index,
            value: item.value,
            label: `Group of "${item.duration}" accounts for ${item.percent}%`,
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

export default FirstVisitPieChart;
