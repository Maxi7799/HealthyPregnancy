import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { Input, Select, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "./index.css";
import { useEffect, useState } from "react";
export const NutritionAnalysis: React.FC = () => {
  type GuideType = {
    Qty: string;
    Unit: string;
    IngredientName: string;
  };
  const { TextArea } = Input;
  const [actTab, setActTab] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [guideList, setGuideList] = useState<GuideType[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setGuideList([
      {
        Qty: "",
        Unit: "",
        IngredientName: "",
      },
    ]);
  }, []);

  const TabClick = (index: number) => {
    setActTab(index);
  };

  const textAreaChange = (
    input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTextAreaValue(input.target.value);
  };

  const handleChange = () => {};

  const clear = () => {
    setShowResult(false);
    setGuideList([
      {
        Qty: "",
        Unit: "",
        IngredientName: "",
      },
    ]);
  };

  const addItem = () => {
    setGuideList([
      ...guideList,
      {
        Qty: "",
        Unit: "",
        IngredientName: "",
      },
    ]);
  };

  const QtyInput = (
    x: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newData = [...guideList];
    newData[index].Qty = x.target.value;
    // console.log(x, index, x.target.value);
    setGuideList(newData);
  };

  const UnitChange = (input: string, index: number) => {
    const newData = [...guideList];
    newData[index].Unit = input;
    setGuideList(newData);
  };

  const IngredientNameInput = (
    x: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newData = [...guideList];
    newData[index].IngredientName = x.target.value;
    // console.log(x, index, x.target.value);
    setGuideList(newData);
  };

  const deleteItem = (index: number) => {
    const newData = [...guideList];
    newData.splice(index, 1);
    setGuideList(newData);
  };
  return (
    <>
      <Header />
      <div className="button-group">
        <div className="button-item button-active">Nutrition Analysis</div>
        <div className="button-item button-center">Recommendation</div>
        {/* <div className="button-item">Recipes</div> */}
      </div>

      <div className="analyze-box">
        <div className="analyze-title">Food Nutrition Analysis</div>

        <div className="analyze-text">
          Analyse each of your ingredient. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>

        <div className="tab-switch">
          <div
            className={
              "tab-item tab-item1" + " " + (actTab == 0 ? "tab-act" : "")
            }
            onClick={() => TabClick(0)}
          >
            Free Text
          </div>
          <div
            className={"tab-item" + " " + (actTab == 1 ? "tab-act" : "")}
            onClick={() => TabClick(1)}
          >
            Guided Input
          </div>
        </div>
        <div className="input-main-box">
          <div className="input-main-left">
            {actTab == 0 ? (
              <>
                <div className="text-area-box">
                  <TextArea
                    onChange={textAreaChange}
                    value={textAreaValue}
                    style={{ width: "100%" }}
                    rows={10}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="input-table">
                  <div className="input-table-header">
                    <Space>
                      <div className="table-col index-col"></div>
                      <div className="table-col qty-col">Qty</div>
                      <div className="table-col qty-col">Unit</div>
                      <div className="table-col">Ingredient Name</div>
                    </Space>
                  </div>
                  {guideList.map((item, index) => {
                    return (
                      <div className="input-table-header">
                        <div className="input-table-header">
                          <Space>
                            <div className="table-col index-col">
                              {index + 1}
                            </div>
                            <div className="table-col qty-col">
                              <Input
                                placeholder="e.g. 100"
                                style={{ width: 100 }}
                                value={item.Qty}
                                onChange={(e) => QtyInput(e, index)}
                              />
                            </div>
                            <div className="table-col qty-col">
                              <Select
                                defaultValue="Ounce"
                                style={{ width: 100 }}
                                onChange={(e) => UnitChange(e, index)}
                                value={item.Unit}
                                options={[
                                  { value: "Ounce", label: "Ounce" },
                                  { value: "Gram", label: "Gram" },
                                  { value: "Pound", label: "Pound" },
                                  { value: "Kilogram", label: "Kilogram" },
                                  { value: "Pinch", label: "Pinch" },
                                  { value: "Liter", label: "Liter" },
                                  {
                                    value: "Fluid ounce",
                                    label: "Fluid ounce",
                                  },
                                  { value: "Pint", label: "Pint" },
                                  { value: "Quart", label: "Quart" },
                                  { value: "Milliliter", label: "Milliliter" },
                                  { value: "Drop", label: "Drop" },
                                  { value: "Cup", label: "Cup" },
                                  { value: "Tablespoon", label: "Tablespoon" },
                                  { value: "Teaspoon", label: "Teaspoon" },
                                ]}
                              />
                            </div>
                            <div className="table-col">
                              <Input
                                placeholder="e.g. 1"
                                value={item.IngredientName}
                                style={{ width: 160 }}
                                onChange={(e) => IngredientNameInput(e, index)}
                              />
                            </div>
                            <div
                              className="table-col del-col"
                              onClick={() => deleteItem(index)}
                            >
                              <DeleteOutlined />
                            </div>
                          </Space>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="add-item" onClick={addItem}>
                  Add another item
                </div>
              </>
            )}

            <div className="button-group-submit">
              <div
                className="submit-analyze"
                onClick={() => setShowResult(true)}
              >
                Analyze
              </div>
              <div className="clear-analyze" onClick={clear}>
                clear
              </div>
            </div>

            {showResult ? (
              <>
                <div className="analyze">
                  <div className="analyze-title">Ingredients Summary</div>
                </div>
                <div className="analyze-result-table">
                  <div className="result-header">
                    <div>Qty</div>
                    <div>Unit</div>
                    <div>Name</div>
                    <div>Calories</div>
                    <div>Weight</div>
                  </div>
                  <div className="table-line"></div>{" "}
                  <div className="result-row">
                    <div>1</div>
                    <div>Unit</div>
                    <div>Name</div>
                    <div>Calories</div>
                    <div>cup</div>
                  </div>
                  <div className="result-row">
                    <div>100</div>
                    <div>gram</div>
                    <div>chicken breast</div>
                    <div>200 kcal</div>
                    <div>200 g</div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          {showResult ? (
            <>
              <div className="input-main-right">
                <div className="result-box-right">
                  <div className="result-right-title">Nutrition Facts</div>
                  <div className="result-line"></div>
                  <div className="result-sub">Amount Per Serving</div>
                  <div className="result-Calories">
                    <span>Calories</span>
                    <span>300</span>
                  </div>
                  <div className="result-line2"></div>

                  <div className="daily-value">% Daily Value*</div>

                  <div className="result-item">
                    <div className="item-main">
                      <div>
                        <b>Total Fat </b>31.3 g
                      </div>
                      <div>
                        <b>48%</b>
                      </div>
                    </div>
                    <div className="item-details">
                      <span>Saturated Fat 8.9 g</span>
                      <b>45%</b>
                    </div>
                    <div className="item-details">
                      <span>Trans Fat 0.2 g</span>
                    </div>
                    <div className="item-main">
                      <div>
                        <b>Cholesterol </b>150 mg
                      </div>
                      <div>
                        <b>50%</b>
                      </div>
                    </div>
                    <div className="item-main">
                      <div>
                        <b>Sodium</b>142 mg
                      </div>
                      <div>
                        <b>6%</b>
                      </div>
                    </div>
                    <div className="item-main">
                      <div>
                        <b>Total Carbohydrate</b>154.6 g
                      </div>
                      <div>
                        <b>52 %</b>
                      </div>
                    </div>
                    <div className="item-details">
                      <span>Dietary Fiber 0 g</span>
                      <b>0%</b>
                    </div>
                    <div className="item-details">
                      <span>Total Sugars 0 g</span>
                      <b></b>
                    </div>
                    <div className="item-details">
                      <span>Includes - Added Sugars</span>
                      <b></b>
                    </div>
                    <div className="item-main">
                      <div>
                        <b>Protein</b>50.1 g
                      </div>
                      <div>
                        <b>100%</b>
                      </div>
                    </div>
                    <div className="item-main">
                      <div>Vitamin D 0.4 µg</div>
                      <div>
                        <b>3 %</b>
                      </div>
                    </div>
                    <div className="item-main">
                      <div>Calcium 39.6 mg</div>
                      <div>
                        <b>4 %</b>
                      </div>
                    </div>{" "}
                    <div className="item-main">
                      <div>Iron 3.4 mg</div>
                      <div>
                        <b>19%</b>
                      </div>
                    </div>{" "}
                    <div className="item-main">
                      <div>Potassium 545.7 mg</div>
                      <div>
                        <b>12%</b>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-bottom">
                  *Percent Daily Values are based on a 2000 calorie diet
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};
