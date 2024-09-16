import React from "react";
import { AxisOptions, Chart } from "react-charts";

// interface ChartData {
//   method: string;
//   length_of_stay: string;
//   value: number;
// }

export default function PostLengthStackBarChart({ data }: { data: any }) {
  const chartData = React.useMemo(() => {
    const { method, chart_data } = data;
    const formattedData: {
      label: string;
      data: { primary: string; secondary: number }[];
    }[] = [];

    method.forEach((methodName: string) => {
      const methodData = chart_data[methodName];
      methodData.length_of_stay.forEach((stay: string, index: number) => {
        const stayData = formattedData.find((d) => d.label === stay);
        if (stayData) {
          stayData.data.push({
            primary: methodName,
            secondary: methodData.value[index],
          });
        } else {
          formattedData.push({
            label: stay,
            data: [
              {
                primary: methodName,
                secondary: methodData.value[index],
              },
            ],
          });
        }
      });
    });

    return formattedData;
  }, [data]);

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof chartData)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof chartData)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
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
        Number of People
      </div>
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
