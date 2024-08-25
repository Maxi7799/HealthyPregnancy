import React from "react";
import { AxisOptions, Chart } from "react-charts";

type DataType = {
  primary: number;
  secondary: number;
};

interface TwoLineChartProps {
  data: {
    chart_title: string;
    x_desc: string;
    y_desc: string;
    category_gd: string;
    category_gh: string;
    x_axis_gd: number[];
    x_axis_gh: number[];
    y_axis_gd_value: number[];
    y_axis_gh_value: number[];
  };
}

export const TwoLineChart: React.FC<TwoLineChartProps> = ({ data }) => {
  const chartData = React.useMemo(
    () => [
      {
        label: data.category_gd,
        data: data.x_axis_gd.map((year, index) => ({
          primary: year,
          secondary: data.y_axis_gd_value[index],
        })),
      },
      {
        label: data.category_gh,
        data: data.x_axis_gh.map((year, index) => ({
          primary: year,
          secondary: data.y_axis_gh_value[index],
        })),
      },
    ],
    [data]
  );

  const primaryAxis = React.useMemo<AxisOptions<DataType>>(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<DataType>[]>(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div style={{ height: "450px", width: "100%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-50px",
          transform: "rotate(-90deg)",
          transformOrigin: "left center",
          fontSize: "14px",
          color: "#333",
        }}
      >
        Population
      </div>
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
        {data.x_desc}
      </div>
    </div>
  );
};
