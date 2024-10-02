import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popover, Space, Input, Radio, Select } from 'antd'
import "./index.css";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from 'antd';
import newCountries from "./country"
newCountries.shift()

export function DiabetesRiskAssessment() {
  const [actValue, setActValue] = useState(0)
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)

  const tips = (title: string) => {
    return (
      <>
        <div className="tip-cont">{title}</div>
      </>
    )
  }

  const activitiy = (e: RadioChangeEvent) => {
    setActValue(e.target.value)
  }

  const change1 = (e: RadioChangeEvent) => {
    setValue1(e.target.value)
  }

  const change2 = (e: RadioChangeEvent) => {
    setValue2(e.target.value)
  }

  const change3 = (e: RadioChangeEvent) => {
    setValue3(e.target.value)
  }

  const handleChange = (value: string) => {
    console.log(value)
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
                  Height: <Input placeholder="Height" /> cm
                </Space>
                <Space>
                  Weight: <Input placeholder="Weight" /> kg
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
              <Radio.Group onChange={(e) => activitiy(e)} value={actValue}>
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
                Do you have a family history of diabetes (e.g., parent or sibling with diabetes)?
                <Popover placement="right" title="" content={tips("A family history of diabetes raises the likelihood of developing the condition due to genetic factors.")}>
                  <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                </Popover>
              </Space>
            </p>

            <p className="diabetes-risk-item-details">
              <Radio.Group onChange={(e) => change1(e)} value={value1}>
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
              <Radio.Group onChange={(e) => change2(e)} value={value2}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="No family history">Never smoked</Radio>
                  <Radio value="One parent with diabetes">Former smoker</Radio>
                  <Radio value="Both parents with diabetes">Current smoker</Radio>
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
              <Radio.Group onChange={(e) => change3(e)} value={value3}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="No family history">Non-drinker</Radio>
                  <Radio value="One parent with diabetes">Moderate drinker</Radio>
                  <Radio value="Both parents with diabetes">Heavy drinker</Radio>
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
              <Radio.Group onChange={(e) => change3(e)} value={value3}>
                <Space direction="vertical" style={{ textAlign: "left" }}>
                  <Radio value="No family history">No family history</Radio>
                  <Radio value="One parent with diabetes">One parent with diabetes</Radio>
                  <Radio value="Both parents with diabetes">Both parents with diabetes</Radio>
                </Space>
              </Radio.Group>
            </p>
          </div>

          <div>
            <p className="diabetes-risk-item-details">
              <Space>
                <div className="dia-btn submit">Submit</div>
                <div className="dia-btn reset">Reset answers</div>
              </Space>
            </p>
          </div>

          <div className="diabetes-result-box">
            <p className="result-title">Assessment Result</p>
          </div>

          <p className="diabetes-result-text">Your Country of Birth: <span style={{ color: "#2C5665" }}>Australia</span></p>

          <p className="diabetes-result-text">{`It belongs to the {output_country_region} region. The risk of diabetes here is {output_risk_vs_au} compared to Australia's average.`}</p>

          <p style={{ textAlign: "left" }}><b>Your Diabetes Risk: <span style={{ color: "#FF7B00" }}>MODERATE RISK</span></b></p>

          <div className="diabetes-result-view">
            <div className="diabetes-result-view-point">
              <div className="diabetes-result-view-point-text">Your Score</div>
            </div>
            <div className="diabetes-result-green dr"></div>
            <div className="diabetes-result-orange dr"></div>
            <div className="diabetes-result-red dr"></div>
          </div>

          <p className="diabetes-result-text" style={{ marginTop: "50px" }}>Main contributing Factor: <span style={{ color: "#2C5665" }}>{"{output_highest_contributor}"}</span></p>

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
