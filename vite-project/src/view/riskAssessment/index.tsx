import "./index.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { Select, Space, Radio, Row, Col } from "antd";
import { useState } from "react";
import { countries } from "./country";
import type { RadioChangeEvent, SelectChangeEvent } from "antd";
console.log(countries.shift());
console.log(countries);

type paramDataType = {
  Country: string;
  Age: string;
  Educational: string;
  Employmet: string;
  Income: string;
  Status: string;
  Remoteness: string;
};

export const RiskAssessment: React.FC = () => {
  const [age, setAge] = useState("");
  const [edu, setEdu] = useState("");
  const [sta, setSta] = useState("");
  const [income, setIncome] = useState("");
  const [marital, setMarital] = useState("");
  const [remote, setRemote] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = (country: string) => {
    setCountry(country);
  };

  // age
  const onAgeChange = (change: RadioChangeEvent) => {
    // console.log(change)
    setAge(change.target.value);
  };

  const onEducationChange = (change: RadioChangeEvent) => {
    setEdu(change.target.value);
  };

  const onStatusChange = (change: RadioChangeEvent) => {
    setSta(change.target.value);
  };

  const onIncomeChange = (change: RadioChangeEvent) => {
    setIncome(change.target.value);
  };

  const onMaritalChange = (change: RadioChangeEvent) => {
    setMarital(change.target.value);
  };

  const onRemoteChange = (change: RadioChangeEvent) => {
    setRemote(change.target.value);
  };

  const submit = () => {
    console.log("submit");
    const paramData: paramDataType = {
      Country: country,
      Age: age,
      Educational: edu,
      Employmet: sta,
      Income: income,
      Status: marital,
      Remoteness: remote,
    };

    submitAssessment(paramData);
    // const [tree, setTree] = useState([]);

    // const fetchTree = async () => {
    //   const treePath = "api/name";
    //   const response = await fetch("http://127.0.0.1:8000/" + treePath);
    //   const data = await response.json();
    //   setTree(data);
    // };

    // useEffect(() => {
    //   fetchTree();
    // }, []);
  };

  const submitAssessment = async (paramData: paramDataType) => {
    const riskassessment = "/riskassessment";
    const response = await fetch("http://127.0.0.1:8000" + riskassessment, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paramData), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    // setTree(data);
  };
  return (
    <>
      <Header></Header>
      <div className="risk-top">
        <div className="step step-1">
          <div className="step-circle">1</div>
          <div className="step-text">Answer the risk assessment questions</div>
        </div>
        <div className="step step-arrow">
          <ArrowRightOutlined />
        </div>
        <div className="step step-2">
          <div className="step-circle">2</div>
          <div className="step-text">Get the result right after you submit</div>
        </div>
      </div>

      <div className="risk-main">
        <div className="risk-main-title">Diabetes Risk Assessment</div>
        <div className="risk-main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </div>

        <div className="risk-sub-box">
          <div className="risk-sub-title">What is your Country of birth?</div>
          <Select
            defaultValue={countries[0]}
            style={{ width: 120 }}
            onChange={handleChange}
            options={countries.map((item) => {
              return { value: item, label: item };
            })}
          />
        </div>
        <div className="risk-sub-box">
          <div className="risk-sub-title">
            Which age group do you belongs to?
          </div>
          <Radio.Group onChange={onAgeChange} value={age}>
            <Space direction="vertical">
              <Radio value={"18-24"}>18-24</Radio>
              <Radio value={"25-34"}>25-34</Radio>
              <Radio value={"35-44"}>35-44</Radio>
              <Radio value={"45-54"}>45-54</Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="risk-sub-box">
          <div className="risk-sub-title">
            What is your highest level of education?
          </div>
          <Radio.Group onChange={onEducationChange} value={edu}>
            <Space direction="vertical">
              <Radio value={"Bachelor degree or higher"}>
                Bachelor degree or higher
              </Radio>
              <Radio value={"Diploma and certificate"}>
                Diploma and certificate
              </Radio>
              <Radio value={"Secondary education or lower"}>
                Secondary education or lower
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="risk-sub-box">
          <div className="risk-sub-title">What is your labor force status?</div>
          <Radio.Group onChange={onStatusChange} value={sta}>
            <Space direction="vertical">
              <Radio value={"Employed"}>Employed</Radio>
              <Radio value={"Unemployed"}>Unemployed</Radio>
              <Radio value={"Not in the labour force"}>
                Not in the labour force
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="risk-sub-box">
          <div className="risk-sub-title">
            What is your total income (anually)?
          </div>
          <Radio.Group
            onChange={onIncomeChange}
            value={income}
            style={{ width: "100%" }}
          >
            {/* <Space align="start" size="large"> */}
            <Row>
              <Col span={12}>
                <Space direction="vertical">
                  <Radio value={"$130,000 or more"}>$130,000 or more</Radio>
                  <Radio value={"$91,000-129,999"}>$91,000-129,999</Radio>
                  <Radio value={"$65,000-90,999"}>$65,000-90,999</Radio>
                  <Radio value={"$41,600-64,999"}>$41,600-64,999</Radio>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical">
                  <Radio value={"$26,000-41,599"}>$26,000-41,599</Radio>
                  <Radio value={"$15,600-25,999"}>$15,600-25,999</Radio>
                  <Radio value={"$0-15,599"}>$0-15,599</Radio>
                </Space>
              </Col>
            </Row>
            {/* </Space> */}
            {/* <Space direction="vertical">
                <Radio value={"$130,000 or more"}>$130,000 or more</Radio>
                <Radio value={"$91,000-129,999"}>$91,000-129,999</Radio>
                <Radio value={"$65,000-90,999"}>$65,000-90,999</Radio>
                <Radio value={"$41,600-64,999"}>$41,600-64,999</Radio>
              </Space>
              <Space direction="vertical">
                <Radio value={"$26,000-41,599"}>$26,000-41,599</Radio>
                <Radio value={"$15,600-25,999"}>$15,600-25,999</Radio>
                <Radio value={"$0-15,599"}>$0-15,599</Radio>
              </Space>
            </Space> */}
          </Radio.Group>
        </div>
        <div className="risk-sub-box">
          <div className="risk-sub-title">What is your marital status?</div>
          <Radio.Group
            onChange={onMaritalChange}
            value={marital}
            style={{ width: "100%" }}
          >
            <Row>
              <Col span={12}>
                <Space direction="vertical">
                  <Radio value={"Married in registered marriage"}>
                    Married in registered marriage
                  </Radio>
                  <Radio value={"Married in de facto marriage"}>
                    Married in de facto marriage
                  </Radio>
                  <Radio value={"Never married"}>Never married</Radio>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical">
                  <Radio value={"Widowed"}>Widowed</Radio>
                  <Radio value={"Divorced"}>Divorced</Radio>
                  <Radio value={"Separated"}>Separated</Radio>
                </Space>
              </Col>
            </Row>
          </Radio.Group>
        </div>
        <div className="risk-sub-box">
          <div className="risk-sub-title">How is your remoteness?</div>
          <Radio.Group
            onChange={onRemoteChange}
            value={remote}
            style={{ width: "100%" }}
          >
            <Row>
              <Col span={12}>
                <Space direction="vertical">
                  <Radio value={"Major cities of Australia"}>
                    Major cities of Australia
                  </Radio>
                  <Radio value={"Inner Regional Australia"}>
                    Inner Regional Australia
                  </Radio>
                  <Radio value={"Outer Regional Australia"}>
                    Outer Regional Australia
                  </Radio>
                </Space>
              </Col>
              <Col>
                <Space direction="vertical">
                  <Radio value={"Remote Australia"}>Remote Australia</Radio>
                  <Radio value={">Very Remote Australia"}>
                    Very Remote Australia\
                  </Radio>
                </Space>
              </Col>
            </Row>
          </Radio.Group>
        </div>

        <div className="submit-group">
          <div className="risk-submit" onClick={submit}>
            submit
          </div>
          <div className="rest-answers">Reset answers</div>
        </div>

        <div className="assessment-result">
          <div className="risk-main-title">Assessment Result</div>
          <div className="your-result">
            <span>Your Result:</span>
            <span className="risk-orange">MODERATE RISK</span>
          </div>

          <div className="result-box">
            <div className="result-one result"></div>
            <div className="result-two result"></div>
            <div className="result-three result"></div>
            <div className="result-point">
              <div className="point-label">Your Score</div>
            </div>
          </div>
          <div className="note">
            <div>
              <i className="note-title"> Note:</i>
            </div>
            <div>
              <i>
                <b>
                  This assessment score is based on
                  <a> Australian Institute of Health and Wellbeing (AIHW)</a>
                </b>
              </i>
            </div>
          </div>
        </div>

        <div className="what-next">
          <div className="risk-main-title">What's Next</div>
          <div className="nex-item">
            <span>
              <ArrowRightOutlined />
            </span>
            <i>
              Learn more about the importance and effect of antenatal visit
              during pregnancy <a>here</a>.
            </i>
          </div>
          <div className="nex-item">
            <span>
              <ArrowRightOutlined />
            </span>
            <i>
              Explore more about nutritional advice that suits your pregnancy{" "}
              <a>here</a>.
            </i>
          </div>
          <div className="nex-item">
            <span>
              <ArrowRightOutlined />
            </span>
            <i>
              Explore recommended exercise and physical activity for your best
              pregnancy experience <a>here</a>.
            </i>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
