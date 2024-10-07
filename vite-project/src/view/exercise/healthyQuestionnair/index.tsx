import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popover, Space, Input, Radio, Select, Row, Col } from 'antd'
import "./index.css";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from 'antd';
// import newCountries from "./country"
import json from './videoLinks.json'
import { useTranslation } from "react-i18next";
// newCountries.shift()

export function ExerciseQuestionari() {
    const [actValue, setActValue] = useState(0)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("");
    const [vedio, setVedio] = useState([])
    const [t] = useTranslation("global");

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
        console.log(e.target.value)
    }

    const change3 = (e: RadioChangeEvent) => {
        setValue3(e.target.value)
    }

    const handleChange = (value: string) => {
        console.log(value)
    }

    const submit = () => {
        console.log(json)
        console.log(actValue);
        let data: any = [];
        if (actValue === "15-24") {
            // data = json.filter((item) => item.age_group === "< 25"));
            data = json.filter((item) => item.age_group === "< 25");
        }

        if (actValue === "25-34") {
            // data = json.filter((item) => item.age_group === "< 25"));
            data = json.filter((item) => item.age_group === "< 25");
        }

        if (actValue === "35-44") {
            // data = json.filter((item) => item.age_group === "< 25"));
            data = json.filter((item) => item.age_group === "< 25");
        }

        if (actValue === "45-54" || actValue === "55-64" || actValue === "65-74" || actValue === "75 and over") {
            // data = json.filter((item) => item.age_group === "< 25"));
            data = json.filter((item) => item.age_group === "45+");
        }
        console.log(data)

        const data2 = data.filter((item) => item.activity_level === value1);
        console.log(data2, value1)
        // # Calculate BMI
        const bmi_value = getFat(value2, value3)

        let bmi_cat = "";

        if (bmi_value < 18.5) {
            bmi_cat = "Underweight"
        } else if (18.5 <= bmi_value && bmi_value < 24.9) {
            bmi_cat = "Healthy Weight"
        } else if (25 <= bmi_value && bmi_value < 29.9) {
            bmi_cat = "Overweight"
        } else {
            bmi_cat = "Obese"
        }

        console.log(bmi_cat)


        const result = data2.filter((item) => item.bmi_category === bmi_cat);

        console.log(result)

        if (result.length == 0) return;
        setVedio(result[0].recommended_exercises)

        // print(bmi_cat)
    }

    const getFat = (weight: number, height: number) => {
        const bmi = weight / (height ** 2)
        return bmi


    }

    const clear = () => {
        setActValue("");
        setValue1("")
        setValue2("");
        setValue3("");
        setVedio([])
    }



    return (
        <>
            <Header />
            <div className="Diabetes-risk" style={{ paddingTop: "20px" }}>
                {/* <div className="Diabetes-risk-top">
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
                </div> */}



                <div className="diabetes-risk-box">
                    <div className="diabetes-risk-title">{t("collection.title")}</div>
                    <div style={{ textAlign: "left" }}>
                        <div>{t("collection.text-1")}</div>
                        {/* <div>{t("collection.text-2")}</div> */}
                    </div>
                    {/* <p className="diabetes-risk-text">
                        <b>Disclaimer</b>:
                    </p> */}
                    {/* <p className="diabetes-risk-text">
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
                    </p> */}

                    {/* <p className="diabetes-risk-text-bold">
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
                    </p> */}

                    <div className="diabetes-risk-item">
                        <p className="diabetes-risk-item-text">
                            <Space>
                                {t("collection.card-1.title")}
                                <Popover placement="right" title="" content={tips("Higher BMI, particularly obesity, increases the risk of diabetes by contributing to insulin resistance.")}>
                                    <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                                </Popover>
                            </Space>
                        </p>
                        <p className="diabetes-risk-item-details">
                            <Select
                                // defaultValue={t("collection.card-1.options-1")}
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[{
                                    label: t("collection.card-1.options-1"),
                                    value: t("collection.card-1.options-1"),
                                }, {
                                    label: t("collection.card-1.options-2"),
                                    value: t("collection.card-1.options-2"),
                                }
                                ]}
                            />
                        </p>
                    </div>

                    <div className="diabetes-risk-item">
                        <p className="diabetes-risk-item-text">
                            <Space>
                                {t("collection.card-2.title")}
                                <Popover placement="right" title="" content={tips("Regular physical activity lowers diabetes risk by improving insulin sensitivity and helping with weight management.")}>
                                    <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                                </Popover>
                            </Space>
                        </p>

                        <p className="diabetes-risk-item-details">
                            <Radio.Group onChange={(e) => activitiy(e)} value={actValue} style={{ width: "100%" }}>
                                {/* <Space style={{ textAlign: "left", width: "100%"}}> */}
                                <Row>
                                    <Col span={12}>
                                        <Space direction="vertical" style={{ width: "100%", textAlign: 'left' }}>
                                            <Radio value="15-24">15-24</Radio>
                                            <Radio value="25-34">25-34</Radio>
                                            <Radio value="35-44">35-44</Radio>
                                            <Radio value="45-54">45-54</Radio>
                                        </Space>
                                    </Col>
                                    <Col span={12}>
                                        <Space direction="vertical" style={{ width: "100%", textAlign: 'left' }}>
                                            <Radio value="55-64">55-64</Radio>
                                            <Radio value="65-74">65-74</Radio>
                                            <Radio value="75 and over">75 and over</Radio>
                                        </Space>
                                    </Col>
                                </Row>


                                {/* </Space> */}
                            </Radio.Group>
                        </p>
                    </div>

                    <div className="diabetes-risk-item">
                        <p className="diabetes-risk-item-text">
                            <Space>
                                {t("collection.card-3.title")}
                                <Popover placement="right" title="" content={tips("A family history of diabetes raises the likelihood of developing the condition due to genetic factors.")}>
                                    <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                                </Popover>
                            </Space>
                        </p>

                        <p className="diabetes-risk-item-details">
                            <Radio.Group onChange={(e) => change1(e)} value={value1}>
                                <Space direction="vertical" style={{ textAlign: "left" }}>
                                    <Radio value="Lightly Active (1-2 times a week)">Lightly Active (1-2 times a week)</Radio>
                                    <Radio value="Moderately Active (3-4 times a week)">Moderately Active (3-4 times a week)</Radio>
                                    <Radio value="Highly Active (more than 5 times a week)">Highly Active (more than 5 times a week)</Radio>
                                    <Radio value="Sedentary (no regular exercise)">Sedentary (no regular exercise)</Radio>
                                </Space>
                            </Radio.Group>
                        </p>
                    </div>

                    <div className="diabetes-risk-item">
                        <p className="diabetes-risk-item-text">
                            <Space>
                                What is your weight （kg）?
                                <Popover placement="right" title="" content={tips("Smoking increases diabetes risk by contributing to inflammation, insulin resistance, and other metabolic issues.")}>
                                    <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                                </Popover>
                            </Space>
                        </p>

                        <p className="diabetes-risk-item-details">
                            <Input placeholder="weight" style={{ width: "200px" }} value={value2} onChange={(e) => change2(e)} />
                        </p>
                    </div>

                    <div className="diabetes-risk-item">
                        <p className="diabetes-risk-item-text">
                            <Space>
                                What is your height （cm）?
                                <Popover placement="right" title="" content={tips("Excessive alcohol intake can lead to weight gain and impaired insulin regulation, increasing diabetes risk.")}>
                                    <span style={{ cursor: "pointer" }}><QuestionCircleOutlined /></span>
                                </Popover>
                            </Space>
                        </p>

                        <p className="diabetes-risk-item-details">

                            <Input placeholder="height" style={{ width: "200px" }} value={value3} onChange={(e) => change3(e)} />
                        </p>
                    </div>

                    {/* <p className="Socioeconomic-Factors">Socioeconomic Factors</p>
                    <p className="socioeconomic-factors-text">Socioeconomic factors such as Country of Birth and Age Group affect diabetes risk by influencing access to healthcare, lifestyle habits, and genetic predispositions. Migrants from certain regions and older age groups may face higher diabetes risk due to these facto</p> */}

                    {/* <div className="diabetes-risk-item">
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
                    </div> */}

                    {/* <div className="diabetes-risk-item">
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
                    </div> */}

                    <div>
                        <p className="diabetes-risk-item-details">
                            <Space>
                                <div className="dia-btn submit" onClick={() => submit()}>Submit</div>
                                <div className="dia-btn reset"  onClick={() => clear()}>Reset answers</div>
                            </Space>
                        </p>
                    </div>

                    <div>
                        <Row style={{overflowX: "scroll"}}>
                            <Space>

                                {
                                    vedio.map((item, index) => {
                                        return (
                                            <><Col span={6}>
                                                <div className="result-bottom-item" style={{border: "none"}}>
                                                    <div className="result-bottom-item-top" style={{border: "none"}}>
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${item.link}`}
                                                            title={`YouTube Video ${index + 1}`}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                    <div className="result-bottom-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas </div>
                                                </div>
                                            </Col></>
                                        )
                                    })
                                }
                            </Space>

                        </Row>
                        {/* <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>

                    {/* <div className="diabetes-result-box">
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
                    </div> */}

                    {/* <p className="diabetes-result-text" style={{ marginTop: "50px" }}>Main contributing Factor: <span style={{ color: "#2C5665" }}>{"{output_highest_contributor}"}</span></p>

                    <p className="diabetes-result-text">
                        <div style={{ fontWeight: 100 }}><i>Note</i> :</div>
                        <div><i>This assessment score is based on <b style={{ color: "#2C5665" }}>Australian Institute of Health and Wellbeing (AIHW)</b></i></div>
                    </p>

                    <p style={{
                        marginTop: '30px',
                        borderBottom: "1px solid #ccc"
                    }}></p>

                    <p className="diabetes-result-next">What's Next</p> */}

                    {/* <p>
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
                    </p> */}

                    {/* <p style={{ textAlign: "left" }}>
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
                    </p> */}

                    {/* <p style={{ textAlign: "left" }}>
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
                    </p> */}

                    {/* <p style={{ textAlign: "left" }}>
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
                    </p> */}
                </div >
            </div >
            <Footer />
        </>
    );
}
