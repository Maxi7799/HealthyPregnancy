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
    <div style={{ height: "450px", width: "100%", position: "relative" }}>
      <Chart
        options={{
          data: chartData,
          primaryAxis,
          secondaryAxes,
        }}
      />
      <div
        style={{
          textAlign: "center",
          marginTop: "470px",
          fontSize: "14px",
          color: "#333",
        }}
      >
        number of people
      </div>
    </div>
  );
}
