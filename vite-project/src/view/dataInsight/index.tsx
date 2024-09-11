import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/header";
import "./index.css";
import { TwoLineChart } from "../../components/chart/twoLineChart";
import HorizontalBarChart from "../../components/chart/horizontalBarChart";
import FirstVisitPieChart from "../../components/chart/FirstVisitPieChart";
import BirthMethodChart from "../../components/chart/birthMethodChart";
import PostLengthStackBarChart from "../../components/chart/postLengthStackbarChart";
import { Footer } from "../../components/footer";
import { rootAddress } from "../../../env";

export const DataInsight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("healthrisk");
  const [healthRiskData, setHealthRiskData] = useState<any>(null);
  const [firstVisitData, setFirstVisitData] = useState<any>(null);
  const [birthMethodData, setBirthMethodData] = useState<any>(null);
  const [cReasonData, setCReasonData] = useState<any>(null);
  const [postLengthData, setPostLengthData] = useState<any>(null);

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

  const fetchSec2Data = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/postlength`);
      const data = await response.json();

      setPostLengthData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  useEffect(() => {
    fetchSec2Data();
  }, []);

  return (
    <div className="data-insight-root">
      <Header />
      <div className="desc">
        <h1>
          Pregnancy Data Insights: Empowering Women’s Health Through Data
          Analytics
        </h1>
        <p>
          This section provides essential information for new immigrants in
          Australia about pregnancy and childbirth. Here, you will find various
          charts that offer insights into the risks of pregnancy-induced
          conditions, the timing of prenatal care, common childbirth methods,
          and reasons for choosing cesarean sections. These visual tools are
          designed to help you understand different aspects of pregnancy and
          make informed decisions that best suit your needs and circumstances.
        </p>
      </div>

      <div className="data-insight-sec1">
        {/* Tab Navigation */}
        <div className="tabs">
          <button
            className={activeTab === "healthrisk" ? "active" : ""}
            onClick={() => setActiveTab("healthrisk")}
          >
            <span className="tooltip">
              Health Risk
              <span className="tooltiptext">
                Health risk trend in AU from 2014 - 2021
              </span>
            </span>
          </button>
          <button
            className={activeTab === "firstvisit" ? "active" : ""}
            onClick={() => setActiveTab("firstvisit")}
          >
            <span className="tooltip">
              First Antenatal Visit
              <span className="tooltiptext">
                Time for the first antenatal visit
              </span>
            </span>
          </button>
          <button
            className={activeTab === "birthmethod" ? "active" : ""}
            onClick={() => setActiveTab("birthmethod")}
          >
            <span className="tooltip">
              Child Birth Method
              <span className="tooltiptext">Birth method percentage</span>
            </span>
          </button>
          <button
            className={activeTab === "creason" ? "active" : ""}
            onClick={() => setActiveTab("creason")}
          >
            <span className="tooltip">
              Common reasons for Cesarean Section
              <span className="tooltiptext">
                Common Reasons for Electing a Cesarean Section
              </span>
            </span>
          </button>
        </div>

        <div className="chart-container">
          {activeTab === "healthrisk" && (
            <div className="chart-section">
              {healthRiskData ? (
                <>
                  <div className="chart">
                    <TwoLineChart data={healthRiskData} />
                  </div>
                  <p className="chart-description">
                    This chart highlights the trends in gestational diabetes and
                    hypertension over recent years, providing crucial insights
                    into the increasing or decreasing risks associated with
                    these conditions.
                  </p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "firstvisit" && (
            <div className="chart-section">
              {firstVisitData ? (
                <>
                  <div className="chart">
                    <FirstVisitPieChart data={firstVisitData} />
                  </div>
                  <p className="chart-description">
                    This pie chart shows the most common times when mothers in
                    Australia have their first prenatal care visit, grouped into
                    different stages such as before 14 weeks, between 14-19
                    weeks, and after. Knowing when others have their first visit
                    can help you understand the importance of early prenatal
                    care. Early visits are essential because they can lower the
                    risk of developing health issues like diabetes and
                    hypertension during pregnancy. Use this chart to learn from
                    others' experiences and make informed decisions for a
                    healthy pregnancy. 79.6% of women started antenatal care
                    before 14 weeks of pregnancy. Among all pregnant women,
                    49.7% opted for non-instrumental vaginal deliveries, while
                    38.2% had cesarean sections.
                  </p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "birthmethod" && (
            <div className="chart-section">
              {birthMethodData ? (
                <>
                  <div className="chart">
                    <BirthMethodChart data={birthMethodData} />
                  </div>
                  <p className="chart-description">
                    This pie chart shows the different childbirth methods
                    commonly used by pregnant women in Australia. By
                    understanding the distribution of these methods, you can
                    learn about each option and its benefits and drawbacks. This
                    information will help you make an informed decision about
                    your own childbirth experience. Among women who gave birth
                    vaginally, 36.6% stayed in the postpartum ward for only 1
                    day. In contrast, only 3.6% of women who had a cesarean
                    section stayed for just 1 day, with 28% of them staying for
                    2 days.
                  </p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {activeTab === "creason" && (
            <div className="chart-section">
              {cReasonData ? (
                <>
                  <div className="chart">
                    <HorizontalBarChart data={cReasonData} />
                  </div>
                  <p className="chart-description">
                    This horizontal bar chart shows the different reasons why
                    pregnant women in Australia choose to have a cesarean
                    section. By looking at the chart, you can see how many
                    people opted for a cesarean section for each reason. This
                    information can help you compare your own situation with
                    others and decide if a cesarean section might be the right
                    choice for you.
                  </p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
        </div>

        <div className="desc">
          <p>
            Early antenatal care provides a broader range of birth method
            options, as evidenced by the data showing significant rates of both
            non-instrumental vaginal deliveries and cesarean sections. For women
            at higher risk of complications, like those from migrant
            backgrounds, starting antenatal care early can be crucial in
            managing risks and potentially avoiding more invasive interventions.
            Ensuring timely and high-quality antenatal care may help in
            detecting complications earlier and offer more choices for safer
            birth methods.
          </p>
        </div>
      </div>

      <div className="data-insight-sec2">
        <div className="desc">
          <h1>Understanding Hospital Stays After Childbirth</h1>
          <p>
            This section provides important information about the duration of
            hospital stays following different childbirth methods in Australia.
            By exploring the data presented in the chart, you can learn about
            the average number of days spent in the hospital for each childbirth
            method. This information helps you understand the recovery time and
            potential risks associated with various options, enabling you to
            make informed decisions about your childbirth plan.
          </p>
        </div>

        <div className="stack-bar-chart-container">
          {postLengthData ? (
            <>
              <div>
                <PostLengthStackBarChart data={postLengthData} />
                <p>Child Birth Method</p>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="desc">
          <p>
            Women who undergo cesarean sections generally have longer hospital
            stays and recovery times compared to those who have vaginal
            deliveries. Although cesarean sections are sometimes necessary and
            safe, they can involve extended healing and increased risks for both
            mother and baby. Understanding these factors helps in making
            informed delivery choices.
          </p>

          <h1>Conclusion</h1>
          <p>
            Early antenatal care broadens birth method options, including the
            opportunity to choose a natural birth, which generally involves less
            harm to the mother and baby and supports faster recovery. While
            cesarean sections are sometimes necessary, they typically require
            longer hospital stays and recovery times. By starting antenatal care
            early, women can better manage risks and increase their chances of
            opting for a vaginal delivery, which often leads to safer and
            quicker recovery outcomes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
