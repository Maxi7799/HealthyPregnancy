import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popover, Space, Input, Radio, Select } from 'antd'
import "./index.css";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from 'antd';
import newCountries from "./country"
import { rootAddress } from '../../../env.tsx'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
newCountries.shift()

export function DiabetesRiskAssessment() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alcohol, setAlcohol] = useState("")
  const [smoking, setSmoking] = useState("")
  const [family_history, setfamily_history] = useState("")
  const [physical_activity, setPhysical_activity] = useState("")
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [result, setReult] = useState(null);
  const [score, setScore] = useState(0)
  const [t] = useTranslation("global");

  const heightChange = (e: any) => {
    // console.log(e).
    setHeight(e.target.value)
  }

  const weightChange = (e: any) => {
    // console.log(e).
    setWeight(e.target.value)
  }

  const alcoholChange = (e: RadioChangeEvent) => {
    setAlcohol(e.target.value)
  }

  const smokingChange = (e: RadioChangeEvent) => {
    setSmoking(e.target.value)
  }

  const family_historyChange = (e: RadioChangeEvent) => {
    setfamily_history(e.target.value)
  }

  const Physical_activityChange = (e: RadioChangeEvent) => {
    setPhysical_activity(e.target.value)
  }

  const ageChange = (e: RadioChangeEvent) => {
    setAge(e.target.value)
  }
  const tips = (title: string) => {
    return (
      <>
        <div className="tip-cont">{title}</div>
      </>
    )
  }

  const riskResult = (result: any) => {
    if (!result) {
      setScore(0);
      return;
    }
    console.log(result)
    if (result.output_risk_level == "High Risk") {
      console.log('High Risk')
      setScore(83.4);
      return;
    }

    if (result.output_risk_level == "Moderate Risk") {
      console.log('Moderate Risk')
      setScore(50);
      return;
    }

    if (result.output_risk_level == "Low Risk") {
      console.log('Low Risk')
      setScore(16.6);
      return;
    }
  }
  const handleChange = (value: string) => {
    setCountry(value)
  }

  const submit = async () => {
    const paramData = {
      country,
      age,
      physical_activity,
      family_history,
      smoking,
      alcohol,
      height_cm: height,
      weight_kg: weight
    }

    console.log(paramData)
    const riskassessment = "/risk/riskassessment";
    const response = await fetch(rootAddress + riskassessment, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(paramData),
    });
    const data = await response.json();
    setReult(data)
    riskResult(data)
    const foodList = document.getElementById("result");
    foodList?.scrollIntoView({ behavior: "smooth" });
    // console.log(data)
  }

  const reset = () => {
    setHeight("")
    setWeight("")
    setAlcohol("")
    setSmoking("")
    setfamily_history("")
    setPhysical_activity("")
    setAge("")
    setCountry("")
    setReult(null)
    setScore(0)
  }
  return (
    <>
      <Header />
      <div className="Diabetes-risk">
        <div className="Diabetes-risk-top">
          <div className="step step-1">
            <div className="step-circle">1</div>
            <div className="step-text">
              {/* {t("riskassessment.point1")} */}
              <span>{t("riskassessment.point-bold")}</span> {t("riskassessment.point1")}
            </div>
          </div>
          <div className="step step-arrow">
            <ArrowRightOutlined />
          </div>
          <div className="step step-2">
            <div className="step-circle">2</div>
            <div className="step-text">
              {t("riskassessment.point2-1")} <span>{t("riskassessment.point2-bold")}</span> {t("riskassessment.point2-2")}
            </div>
          </div>
        </div>

        <div className="diabetes-risk-box">
          <div className="diabetes-risk-title">{t("riskassessment.title")}</div>
          <p className="diabetes-risk-text">
            <b>{t("riskassessment.Disclaimer")}</b>:
          </p>
          <p className="diabetes-risk-text">
            {t("riskassessment.text")}
            <i className="blue-text">
              {t("riskassessment.bule-text")}
            </i>
            . {t("riskassessment.text2-text")}
          </p>

          <p className="diabetes-risk-text-bold">
            <b>{t("riskassessment.Direct-causes")}</b>:
          </p>
          <p className="diabetes-risk-text-bold">
            <b>
              {t("riskassessment.text2")}
            </b>
            :
          </p>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card1.title")}
                <Popover placement="right" title="" content={tips(t("riskassessment.card1.tips"))}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>
            <p className="diabetes-risk-item-details">
              <Space direction="vertical">
                <Space>
                  {t("riskassessment.card1.Height")}: <Input placeholder="Height" value={height} onChange={(e) => { heightChange(e) }} /> {t("riskassessment.card1.cm")}
                </Space>
                <Space>
                  {t("riskassessment.card1.Weight")}: <Input placeholder="Weight" value={weight} onChange={(e) => { weightChange(e) }} /> {t("riskassessment.card1.kg")}
                </Space>
              </Space>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card2.title")}
                <Popover placement="right" title="" content={tips(t("riskassessment.card2.tips"))}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => Physical_activityChange(e)} value={physical_activity}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="Active (≥ 150 min/week)">{t("riskassessment.card2.roadio1")}</Radio>
                  <Radio value="Moderately active (75–149 min/week)">{t("riskassessment.card2.roadio2")}</Radio>
                  <Radio value="Inactive (< 75 min/week)">{t("riskassessment.card2.roadio3")}</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card3.title")}
                <Popover placement="right" title="" content={tips(t("riskassessment.card3.tips"))}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => family_historyChange(e)} value={family_history}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="No family history">{t("riskassessment.card3.roadio1")}</Radio>
                  <Radio value="One parent with diabetes">{t("riskassessment.card3.roadio2")}</Radio>
                  <Radio value="Both parents with diabetes">{t("riskassessment.card3.roadio3")}</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card4.title")}
                <Popover placement="right" title="" content={tips(t("riskassessment.card4.tips"))}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => smokingChange(e)} value={smoking}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="Never smoked">{t("riskassessment.card4.roadio1")}</Radio>
                  <Radio value="Former smoker">{t("riskassessment.card4.roadio2")}</Radio>
                  <Radio value="Current smoker">{t("riskassessment.card4.roadio3")}</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card5.title")}
                <Popover placement="right" title="" content={tips("Excessive alcohol intake can lead to weight gain and impaired insulin regulation, increasing diabetes risk.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => alcoholChange(e)} value={alcohol}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="Non-drinker">{t("riskassessment.card5.roadio1")}</Radio>
                  <Radio value="Moderate drinker">{t("riskassessment.card5.roadio2")}</Radio>
                  <Radio value="Heavy drinker">{t("riskassessment.card5.roadio3")}</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <p className="Socioeconomic-Factors">{t("riskassessment.SocioeconomicFactors")}</p>
          <p className="socioeconomic-factors-text">{t("riskassessment.SocioeconomicText")}</p>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card6.WhatisyourCountryofbirth")}?
                <Popover placement="right" title="" content={tips(t("riskassessment.card6.tips"))}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Select
                defaultValue={newCountries[0]}
                style={{ width: 120 }}
                onChange={handleChange}
                value={country}
                options={newCountries.map((item) => {
                  return { value: item, label: item };
                })}
              />
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                {t("riskassessment.card7.Whichagegroupdoyoubelongsto")}?
                <Popover placement="right" title="" content={tips(t("riskassessment.card7.tips"))}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => ageChange(e)} value={age}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="18-24">18-24</Radio>
                  <Radio value="25-34">25-34</Radio>
                  <Radio value="35-44">35-44</Radio>
                  <Radio value="45-54">45-54</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div>
            <p className="diabetes-risk-item-details">
              <Space>
                <div className="dia-btn submit" onClick={submit}>{t("riskassessment.Submit")}</div>
                <div className="dia-btn reset" onClick={reset}>{t("riskassessment.ResetAnswers")}</div>
              </Space>
            </p>
          </div>

          <div className="diabetes-result-box" id="result">
            <p className="result-title">{t("riskassessment.AssessmentResult")}</p>
          </div>

          <p className="diabetes-result-text">{t("riskassessment.YourCountryofBirth")}: <span style={{ color: "#2C5665" }}>Australia</span></p>

          <p className="diabetes-result-text">{`It belongs to the ${country} region. The risk of diabetes here is ${result ? result.output_risk_vs_au : ""} compared to Australia's average.`}</p>

          <p style={{ textAlign: "left" }}><b>{t("riskassessment.YourDiabetesRisk")}: <span style={{ color: "#FF7B00" }}>{t("MODERATERISK")}</span></b></p>

          <div className="diabetes-result-view">
            <div className="diabetes-result-view-point" style={{ left: score + '%' }}>
              <div className="diabetes-result-view-point-text">{t("riskassessment.YourScore")}</div>
            </div>
            <div className="diabetes-result-green dr"></div>
            <div className="diabetes-result-orange dr"></div>
            <div className="diabetes-result-red dr"></div>
          </div>

          <p className="diabetes-result-text" style={{ marginTop: "50px" }}>{t("riskassessment.MaincontributingFacto")}: <span style={{ color: "#2C5665" }}>{result ? result.output_highest_contributor : ""}</span></p>

          <p className="diabetes-result-text">
            <div style={{ fontWeight: 100 }}><i>{t("riskassessment.Note")}</i> :</div>
            <div><i>{t("riskassessment.row2-1")} <b style={{ color: "#2C5665" }}>{t("riskassessment.row2-2")}</b></i></div>
          </p>

          <p style={{
            marginTop: '30px',
            borderBottom: "1px solid #ccc"
          }}></p>

          <p className="diabetes-result-next">{t("riskassessment.What'sNext")}</p>

          {/* <p>
            <Space>
              <ArrowRightOutlined />
              <div style={{ textAlign: "left", fontWeight: 600 }}>
                <div>
                  <div>
                    {t("riskassessment.row3")}
                  </div>
                  <div>
                    <ArrowRightOutlined /> {t("riskassessment.educationpage")}
                  </div>
                </div>
              </div>
            </Space>
          </p> */}

          <p style={{ textAlign: "left" }}>
            <Space>
              <ArrowRightOutlined />
              <div>
                <div>
                  <div>
                    <Link to="/educational">{t("riskassessment.row4")}</Link>
                  </div>
                </div>
              </div>
            </Space>
          </p>

          <p style={{ textAlign: "left" }}>
            <Space>
              <ArrowRightOutlined />
              <div>
                <div>
                  <div>
                    <Link to="/nutrition-analysis">{t("riskassessment.row5")}</Link>
                  </div>
                </div>
              </div>
            </Space>
          </p>

          <p style={{ textAlign: "left" }}>
            <Space>
              <ArrowRightOutlined />
              <div>
                <div>
                  <div>
                    <Link to="/exercise">{t("riskassessment.row6")}</Link>
                  </div>
                </div>
              </div>
            </Space>
          </p>
        </div >
      </div >
      <Footer />
    </>
  );
}
