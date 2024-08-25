import React from "react";
import { AxisOptions, Chart } from "react-charts";

type BarChartData = {
  chart_title: string;
  y_axis: string[];
  x_axis_value: number[];
};

interface BarProps {
  data: BarChartData;
}

export default function HorizontalBarChart({ data }: BarProps) {
  const chartData = React.useMemo(
    () => [
      {
        label: data.chart_title,
        data: data.y_axis.map((label, index) => ({
          primary: label,
          secondary: data.x_axis_value[index],
        })),
      },
    ],
    [data]
  );

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof chartData)[number]["data"][number]>
  >(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof chartData)[number]["data"][number]>[]
  >(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        options={{
          data: chartData,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
}
