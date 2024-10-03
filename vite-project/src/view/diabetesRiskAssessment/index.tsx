import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popover, Space, Input, Radio, Select } from 'antd'
import "./index.css";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from 'antd';
import newCountries from "./country"
import { rootAddress } from '../../../env.tsx'
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
    foodList?.scrollIntoView({behavior: "smooth"});
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
              <span>Answer</span> the risk assessment questions
            </div>
          </div>
          <div className="step step-arrow">
            <ArrowRightOutlined />
          </div>
          <div className="step step-2">
            <div className="step-circle">2</div>
            <div className="step-text">
              Get the <span>result</span> right after you submit
            </div>
          </div>
        </div>

        <div className="diabetes-risk-box">
          <div className="diabetes-risk-title">Diabetes Risk Assessment</div>
          <p className="diabetes-risk-text">
            <b>Disclaimer</b>:
          </p>
          <p className="diabetes-risk-text">
            The information provided in this risk assessment is based on
            statistical research conducted by the{" "}
            <i className="blue-text">
              Australian Institute of Health and Welfare (AIHW)
            </i>
            . You can view the full report at AIHW - Social Determinants of Health
            among CALD Australians. This tool is intended to raise awareness and
            provide general insights. It is not a substitute for professional
            medical advice, diagnosis, or treatment. Please consult with a
            qualified healthcare professional for any personal medical concerns or
            decisions.
          </p>

          <p className="diabetes-risk-text-bold">
            <b>Direct causes</b>:
          </p>
          <p className="diabetes-risk-text-bold">
            <b>
              Direct causes like BMI, physical activity, family history, smoking,
              and alcohol consumption significantly influence diabetes risk. High
              BMI and low physical activity directly impact insulin sensitivity,
              while a family history of diabetes increases genetic susceptibility.
              Smoking and excessive alcohol intake disrupt metabolic health,
              further raising the risk.
            </b>
            :
          </p>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                What is your height and weight?
                <Popover placement="right" title="" content={tips("Higher BMI, particularly obesity, increases the risk of diabetes by contributing to insulin resistance.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>
            <p className="diabetes-risk-item-details">
              <Space direction="vertical">
                <Space>
                  Height: <Input placeholder="Height" value={height} onChange={(e) => { heightChange(e) }} /> cm
                </Space>
                <Space>
                  Weight: <Input placeholder="Weight" value={weight} onChange={(e) => { weightChange(e) }} /> kg
                </Space>
              </Space>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                How often do you engage in physical activitiy?
                <Popover placement="right" title="" content={tips("Regular physical activity lowers diabetes risk by improving insulin sensitivity and helping with weight management.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => Physical_activityChange(e)} value={physical_activity}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="Active (≥ 150 min/week)">Active (≥ 150 min/week)</Radio>
                  <Radio value="Moderately active (75–149 min/week)">Moderately active (75–149 min/week)</Radio>
                  <Radio value="Inactive (< 75 min/week)">{"Inactive (< 75 min/week)"}</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                Do you have a family history of diabetes (e.g., parent or sibling with diabetes)?
                <Popover placement="right" title="" content={tips("A family history of diabetes raises the likelihood of developing the condition due to genetic factors.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => family_historyChange(e)} value={family_history}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="No family history">No family history</Radio>
                  <Radio value="One parent with diabetes">One parent with diabetes</Radio>
                  <Radio value="Both parents with diabetes">Both parents with diabetes</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                How often do you smoke?
                <Popover placement="right" title="" content={tips("Smoking increases diabetes risk by contributing to inflammation, insulin resistance, and other metabolic issues.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => smokingChange(e)} value={smoking}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="Never smoked">Never smoked</Radio>
                  <Radio value="Former smoker">Former smoker</Radio>
                  <Radio value="Current smoker">Current smoker</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                How often do you drink?
                <Popover placement="right" title="" content={tips("Excessive alcohol intake can lead to weight gain and impaired insulin regulation, increasing diabetes risk.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => alcoholChange(e)} value={alcohol}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="Non-drinker">Non-drinker</Radio>
                  <Radio value="Moderate drinker">Moderate drinker</Radio>
                  <Radio value="Heavy drinker">Heavy drinker</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <p className="Socioeconomic-Factors">Socioeconomic Factors</p>
          <p className="socioeconomic-factors-text">Socioeconomic factors such as Country of Birth and Age Group affect diabetes risk by influencing access to healthcare, lifestyle habits, and genetic predispositions. Migrants from certain regions and older age groups may face higher diabetes risk due to these facto</p>

          <div className="diabetes-risk-item">
            <p className="diabetes-risk-item-text">
              <Space>
                What is your Country of birth?
                <Popover placement="right" title="" content={tips("Influences diabetes risk due to genetic predisposition and varying healthcare access in different regions.")}>
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
                Which age group do you belongs to?
                <Popover placement="right" title="" content={tips("Older age groups have a higher risk of diabetes due to metabolic changes and lifestyle factors.")}>
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
                <div className="dia-btn submit" onClick={submit}>Submit</div>
                <div className="dia-btn reset" onClick={reset}>Reset answers</div>
              </Space>
            </p>
          </div>

          <div className="diabetes-result-box" id="result">
            <p className="result-title">Assessment Result</p>
          </div>

          <p className="diabetes-result-text">Your Country of Birth: <span style={{ color: "#2C5665" }}>Australia</span></p>

          <p className="diabetes-result-text">{`It belongs to the ${country} region. The risk of diabetes here is ${result ? result.output_risk_vs_au : ""} compared to Australia's average.`}</p>

          <p style={{ textAlign: "left" }}><b>Your Diabetes Risk: <span style={{ color: "#FF7B00" }}>MODERATE RISK</span></b></p>

          <div className="diabetes-result-view">
            <div className="diabetes-result-view-point" style={{ left: score + '%' }}>
              <div className="diabetes-result-view-point-text">Your Score</div>
            </div>
            <div className="diabetes-result-green dr"></div>
            <div className="diabetes-result-orange dr"></div>
            <div className="diabetes-result-red dr"></div>
          </div>

          <p className="diabetes-result-text" style={{ marginTop: "50px" }}>Main contributing Factor: <span style={{ color: "#2C5665" }}>{result ? result.output_highest_contributor : ""}</span></p>

          <p className="diabetes-result-text">
            <div style={{ fontWeight: 100 }}><i>Note</i> :</div>
            <div><i>This assessment score is based on <b style={{ color: "#2C5665" }}>Australian Institute of Health and Wellbeing (AIHW)</b></i></div>
          </p>

          <p style={{
            marginTop: '30px',
            borderBottom: "1px solid #ccc"
          }}></p>

          <p className="diabetes-result-next">What's Next</p>

          <p>
            <Space>
              <ArrowRightOutlined />
              <div style={{ textAlign: "left", fontWeight: 600 }}>
                <div>
                  <div>
                    Learn More About Diabetes and Pregnancy: Discover essential information about diabetes management during pregnancy on our education page to stay informed and proactive.
                  </div>
                  <div>
                    <ArrowRightOutlined /> education page
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
                    Learn more about the importance and effect of antenatal visit during pregnancy here.
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
                    Explore more about nutritional advice that suits your pregnancy here.
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
                    Explore recommended exercise and physical activity for your best pregnancy experience here.
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
