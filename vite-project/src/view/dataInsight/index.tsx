import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/header";
import "./index.css";
import { TwoLineChart } from "../../components/chart/twoLineChart";
import HorizontalBarChart from "../../components/chart/horizontalBarChart";
import FirstVisitPieChart from "../../components/chart/FirstVisitPieChart";
import birthMethodChart from "../../components/chart/birthMethodChart";
import BirthMethodChart from "../../components/chart/birthMethodChart";

export const DataInsight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("healthrisk");
  const [healthRiskData, setHealthRiskData] = useState<any>(null);
  const [firstVisitData, setFirstVisitData] = useState<any>(null);
  const [birthMethodData, setBirthMethodData] = useState<any>(null);
  const [cReasonData, setCReasonData] = useState<any>(null);

  const rootAddress = "http://127.0.0.1:8000";

  // Function to fetch data for a specific chart
  const fetchData = async (chartType: string) => {
    try {
      const response = await fetch(rootAddress + `/datainsight/${chartType}`);
      const data = await response.json();

      switch (chartType) {
        case "healthrisk":
          setHealthRiskData(data);
          break;
        case "firstvisit":
          setFirstVisitData(data);
          break;
        case "birthmethod":
          setBirthMethodData(data);
          break;
        case "creason":
          setCReasonData(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
            className={activeTab === "healthrisk" ? "active" : ""}
            onClick={() => setActiveTab("healthrisk")}
          >
            Health Risk
          </button>
          <button
            className={activeTab === "firstvisit" ? "active" : ""}
            onClick={() => setActiveTab("firstvisit")}
          >
            First Visit
          </button>
          <button
            className={activeTab === "birthmethod" ? "active" : ""}
            onClick={() => setActiveTab("birthmethod")}
          >
            Birth Method
          </button>
          <button
            className={activeTab === "creason" ? "active" : ""}
            onClick={() => setActiveTab("creason")}
          >
            C Reason
          </button>
        </div>

        {/* Chart Content */}
        <div className="chart-container">
          {activeTab === "healthrisk" && (
            <div className="chart">
              {healthRiskData ? (
                <>
                  {console.log("Health Risk Data:", healthRiskData)}
                  <TwoLineChart data={healthRiskData} />
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "firstvisit" && (
            <div className="chart">
              {firstVisitData ? (
                <>
                  {console.log(firstVisitData)}
                  <FirstVisitPieChart data={firstVisitData} />
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "birthmethod" && (
            <div className="chart">
              {birthMethodData ? (
                <>
                  {console.log(birthMethodData)}
                  <BirthMethodChart data={birthMethodData} />
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "creason" && (
            <div className="chart">
              {cReasonData ? (
                <>
                  {console.log(cReasonData)}
                  <HorizontalBarChart data={cReasonData} />
                </>
              ) : (
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
