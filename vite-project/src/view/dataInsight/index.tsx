import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/header";
import "./index.css";

export const DataInsight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("lineChart");
  const [lineChartData, setLineChartData] = useState<any>(null);
  const [pieChartData1, setPieChartData1] = useState<any>(null);
  const [pieChartData2, setPieChartData2] = useState<any>(null);
  const [barChartData, setBarChartData] = useState<any>(null);

  const rootAddress = "http://127.0.0.1:8000";

  // Function to fetch data for a specific chart
  const fetchData = async (chartType: string) => {
    try {
      const response = await fetch(rootAddress + `/api/data/${chartType}`); // Adjust the endpoint as needed
      const data = await response.json();

      switch (chartType) {
        case "lineChart":
          setLineChartData(data);
          break;
        case "pieChart1":
          setPieChartData1(data);
          break;
        case "pieChart2":
          setPieChartData2(data);
          break;
        case "barChart":
          setBarChartData(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts or when the active tab changes
  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  return (
    <div>
      <Header />
      <div className="desc">
        <h1>
          Pregnancy Data Insights: Empowering Women’s Health Through Analytics
        </h1>
        <p>
          Explore detailed insights into pregnancy trends and health indicators.
          Our analytics provide valuable information to support expecting
          mothers and healthcare providers in making informed decisions for a
          healthier pregnancy journey.
        </p>
      </div>

      <div className="data-insight-sec1">
        {/* Tab Navigation */}
        <div className="tabs">
          <button
            className={activeTab === "lineChart" ? "active" : ""}
            onClick={() => setActiveTab("lineChart")}
          >
            Line Chart
          </button>
          <button
            className={activeTab === "pieChart1" ? "active" : ""}
            onClick={() => setActiveTab("pieChart1")}
          >
            Pie Chart 1
          </button>
          <button
            className={activeTab === "pieChart2" ? "active" : ""}
            onClick={() => setActiveTab("pieChart2")}
          >
            Pie Chart 2
          </button>
          <button
            className={activeTab === "barChart" ? "active" : ""}
            onClick={() => setActiveTab("barChart")}
          >
            Horizontal Bar Chart
          </button>
        </div>

        {/* Chart Content */}
        <div className="chart-container">
          {activeTab === "lineChart" && (
            <div className="chart">
              {lineChartData ? (
                <p>Render Line Chart with Data</p>
              ) : (
                // Render your Line chart here using lineChartData
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "pieChart1" && (
            <div className="chart">
              {pieChartData1 ? (
                <p>Render Pie Chart 1 with Data</p>
              ) : (
                // Render your Pie chart 1 here using pieChartData1
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "pieChart2" && (
            <div className="chart">
              {pieChartData2 ? (
                <p>Render Pie Chart 2 with Data</p>
              ) : (
                // Render your Pie chart 2 here using pieChartData2
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "barChart" && (
            <div className="chart">
              {barChartData ? (
                <p>Render Horizontal Bar Chart with Data</p>
              ) : (
                // Render your Horizontal Bar chart here using barChartData
                <p>Loading...</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="data-insight-sec2">
        <h2>hello this is section 2</h2>
        <p></p>
      </div>
    </div>
  );
};
