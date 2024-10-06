import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { Input, Select, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { rootAddress } from "../../../env.tsx";
import { Link } from "react-router-dom";

import grains_icon from "./images/grains.webp";
import beverages_icon from "./images/beverages.webp";
import dairy_icon from "./images/dairy.webp";
import fruit_icon from "./images/fruit.webp";
import meat_icon from "./images/meat.webp";
import processed_icon from "./images/processed.webp";
import vegetables_icon from "./images/vegetables.webp";
import fish_icon from "./images/fish.webp";
import { useSearchParams } from "react-router-dom";
import { message } from "antd";
import imageMap from './foodImage.json';
import { useTranslation } from "react-i18next";
// console.log(imageMap)
const imgDatails = imageMap.items;

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
  const [currentPage, setCurrentPage] = useState("Nutrition Analysis");
  const [currentCategory, setCurrentCategory] = useState("");
  const [tableData, setTableData] = useState([]);
  const [result, setResult] = useState<any>({});
  const [recomend, setRecomend] = useState(true);
  const [foodList, setFoodList] = useState([]);
  const [params] = useSearchParams();
  const [messageApi, contextHolder] = message.useMessage();
  console.log(params.getAll("actTab")[0]);
  const [t] = useTranslation("global");

  useEffect(() => {
    setGuideList([
      {
        Qty: "",
        Unit: "",
        IngredientName: "",
      },
    ]);
    if (params.getAll("actTab")[0])
      setCurrentPage(
        params.getAll("actTab")[0] == "0"
          ? "Nutrition Analysis"
          : "Recommendation"
      );
  }, []);

  useEffect(() => {
    if (params.getAll("actTab")[0])
      setCurrentPage(
        params.getAll("actTab")[0] == "0"
          ? "Nutrition Analysis"
          : "Recommendation"
      );
  }, [params]);

  const error = (err) => {
    messageApi.error(err);
  };

  const TabClick = (index: number) => {
    setActTab(index);
  };

  const textAreaChange = (
    input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTextAreaValue(input.target.value);
  };

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

  const analysisClick = (page: string) => {
    setCurrentPage(page);
  };

  const categoryClick = (food: string) => {
    setCurrentCategory(food);

    getRecomendFood(food);

    const foodList = document.getElementById("foodList");
    foodList?.scrollIntoView({ behavior: "smooth" });
  };

  const submitAnalyze = async () => {
    const url = "/food/nutritioninfo";
    let ingredient_list: string[] = [];
    let ingrs: string[] = [];
    const table: any = [];

    if (actTab == 1) {
      if (!textAreaValue) return;
      ingredient_list = textAreaValue.replace(/\n/g, ",").split(",");
      ingrs = ingredient_list.map((item, index) => {
        table.push({
          index,
          unit: item.split(" ")[1],
          name: item.split(" ")[2],
        });
        return item.split(" ")[2];
      });

      console.log(ingrs);
      if (!ingrs[0]) {
        error("The format is incorrect!");
        return;
      }
    } else {
      console.log(guideList);
      guideList.forEach((item, index) => {
        table.push({
          index,
          unit: item.Unit,
          name: item.IngredientName,
        });
        ingredient_list.push(
          item.Qty + " " + item.Unit + " " + item.IngredientName
        );
        ingrs.push(item.IngredientName);
      });
    }

    // if()
    const response = await fetch(rootAddress + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingrs: ingrs,
        ingredient_list: ingredient_list,
      }),
    });
    const data = await response.json();
    setShowResult(true);
    // console.log(data)
    setResult(data);
    console.log(table, data);

    data.calories.forEach((item: string, index: number) => {
      table[index].calories = item;
      table[index].weights = data["weights"][index];
    });

    setTableData(table);
  };

  const onRecommended = (isRecomend: boolean) => {
    setRecomend(isRecomend);
    getRecomendFood(currentCategory);

    const category = document.getElementById("category");
    category?.scrollIntoView({ behavior: "smooth" });
  };

  const getRecomendFood = async (food: string) => {
    if (!food) return;
    const url = "/food/notrecomfood";
    const response = await fetch(rootAddress + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classifiction: recomend ? "Recommended" : "Not Recommended",
        category: food,
      }),
    });
    const data = await response.json();
    console.log(data);



    const newList = data.food_item.map((item: any, index: number) => {
      return {
        food: item,
        details: data.reason[index] ? data.reason[index] : "",
      };
    });

    setFoodList(newList);

    console.log(newList);
  };

  const getUrl = (name: string) => {
    const urlList = imgDatails.filter(x => name == x.food_item)
    return urlList[0].image
  }

  return (
    <>
      <Header />
      <div className="button-group">
        <div
          className={
            "button-item " +
            (currentPage == "Nutrition Analysis" ? "button-active" : "")
          }
          onClick={() => analysisClick("Nutrition Analysis")}
        >
          {t("NutritionAnalysis.NutritionAnalysis")}
        </div>
        <div
          className={
            "button-item button-center " +
            (currentPage == "Recommendation" ? "button-active" : "")
          }
          onClick={() => analysisClick("Recommendation")}
        >
          {t("NutritionAnalysis.Recommendation")}
        </div>
        <div className="button-item">
          <Link to="/recipe" style={{ color: "#000" }}>
            {t("NutritionAnalysis.Recipes")}
          </Link>
        </div>
      </div>
      {currentPage == "Nutrition Analysis" ? (
        <>
          <div className="analyze-box">
            <div className="analyze-title">{t("NutritionAnalysis.FoodNutritionAnalysis")}</div>

            <div className="analyze-text">
              {t("NutritionAnalysis.text1")}
            </div>

            <div className="tab-switch">

              <div
                className={"tab-item tab-item1" + " " + (actTab == 0 ? "tab-act" : "")}
                onClick={() => TabClick(0)}
              >
                {t("NutritionAnalysis.GuidedInput")}
              </div>
              <div
                className={
                  "tab-item " + " " + (actTab == 1 ? "tab-act" : "")
                }
                onClick={() => TabClick(1)}
              >
                {t("NutritionAnalysis.FreeText")}
              </div>
            </div>
            <div className="input-main-box">
              <div className="input-main-left">
                {actTab == 1 ? (
                  <>
                    <div className="text-area-box">
                      <TextArea
                        placeholder="e.g.1 cup coffee"
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
                      <div className="input-table-header input-table-header-text">
                        <Space>
                          <div className="table-col index-col"></div>
                          <div className="table-col qty-col">{t("NutritionAnalysis.Qty")}</div>
                          <div className="table-col qty-col">{t("NutritionAnalysis.Unit")}</div>
                          <div className="table-col">{t("NutritionAnalysis.IngredientName")}</div>
                        </Space>
                      </div>
                      {guideList.map((item, index) => {
                        return (
                          <div className="input-table-header border-bottom">
                            <div className="input-table-header input-table-body">
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
                                      { value: "Ounce", label: t("NutritionAnalysis.Ounce") },
                                      { value: "Gram", label: t("NutritionAnalysis.Gram") },
                                      { value: "Pound", label: t("NutritionAnalysis.Pound") },
                                      { value: "Kilogram", label: t("NutritionAnalysis.Kilogram") },
                                      { value: "Pinch", label: t("NutritionAnalysis.Pinch") },
                                      { value: "Liter", label: t("NutritionAnalysis.Liter") },
                                      {
                                        value: "Fluid ounce",
                                        label: t("NutritionAnalysis.Fluidounce"),
                                      },
                                      { value: "Pint", label: t("NutritionAnalysis.Pint") },
                                      { value: "Quart", label: t("NutritionAnalysis.Quart") },
                                      {
                                        value: "Milliliter",
                                        label: t("NutritionAnalysis.Milliliter"),
                                      },
                                      { value: "Drop", label: t("NutritionAnalysis.Drop") },
                                      { value: "Cup", label: t("NutritionAnalysis.Cup") },
                                      {
                                        value: "Tablespoon",
                                        label: t("NutritionAnalysis.Tablespoon"),
                                      },
                                      { value: "Teaspoon", label: t("NutritionAnalysis.Teaspoon") },
                                    ]}
                                  />
                                </div>
                                <div className="table-col">
                                  <Input
                                    placeholder="e.g. fish"
                                    value={item.IngredientName}
                                    style={{ width: 160 }}
                                    onChange={(e) =>
                                      IngredientNameInput(e, index)
                                    }
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
                            <div className="input-table-header input-table-body1">
                              <Space>
                                <div className="table-col index-col">
                                  {index + 1}
                                </div>
                                <div>
                                  <Space direction="vertical">
                                    <Space>
                                      <span className="label">{t("NutritionAnalysis.Qty")}</span>
                                      <Input
                                        placeholder="e.g. 100"
                                        value={item.Qty}
                                        style={{ width: "200px" }}
                                        onChange={(e) => QtyInput(e, index)}
                                      />
                                    </Space>
                                    {/* </div> */}
                                    {/* <div className="table-col qty-col"> */}
                                    <Space>
                                      <span className="label">{t("NutritionAnalysis.Unit")}</span>
                                      <Select
                                        style={{ width: "200px" }}
                                        defaultValue="Ounce"
                                        onChange={(e) => UnitChange(e, index)}
                                        value={item.Unit}
                                        options={[
                                          { value: "Ounce", label: "Ounce" },
                                          { value: "Gram", label: "Gram" },
                                          { value: "Pound", label: "Pound" },
                                          {
                                            value: "Kilogram",
                                            label: "Kilogram",
                                          },
                                          { value: "Pinch", label: "Pinch" },
                                          { value: "Liter", label: "Liter" },
                                          {
                                            value: "Fluid ounce",
                                            label: "Fluid ounce",
                                          },
                                          { value: "Pint", label: "Pint" },
                                          { value: "Quart", label: "Quart" },
                                          {
                                            value: "Milliliter",
                                            label: "Milliliter",
                                          },
                                          { value: "Drop", label: "Drop" },
                                          { value: "Cup", label: "Cup" },
                                          {
                                            value: "Tablespoon",
                                            label: "Tablespoon",
                                          },
                                          {
                                            value: "Teaspoon",
                                            label: "Teaspoon",
                                          },
                                        ]}
                                      />
                                    </Space>
                                    {/* </div> */}
                                    {/* <div className="table-col"> */}
                                    <Space>
                                      <span className="label">
                                        {t("NutritionAnalysis.IngredientName")}
                                      </span>
                                      <Input
                                        placeholder="e.g. fish"
                                        value={item.IngredientName}
                                        style={{ width: "200px" }}
                                        onChange={(e) =>
                                          IngredientNameInput(e, index)
                                        }
                                      />
                                    </Space>
                                  </Space>
                                </div>
                                {/* <div className="table-col qty-col"> */}

                                {/* </div> */}
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
                      {t("NutritionAnalysis.AddAnotherItem")}
                    </div>
                  </>
                )}

                <div className="button-group-submit">
                  <div
                    className="submit-analyze"
                    onClick={() => submitAnalyze()}
                  >
                    {t("NutritionAnalysis.Analyze")}
                  </div>
                  <div className="clear-analyze" onClick={clear}>
                    {t("NutritionAnalysis.clear")}
                  </div>
                </div>

                {showResult ? (
                  <>
                    <div className="analyze">
                      <div className="analyze-title">{t("NutritionAnalysis.FoodRecommendation")}y</div>
                    </div>
                    <div className="analyze-result-table">
                      <div className="result-header">
                        <div>{t("NutritionAnalysis.Qty")}</div>
                        <div>{t("NutritionAnalysis.Unit")}</div>
                        <div>{t("NutritionAnalysis.Name")}</div>
                        <div>{t("NutritionAnalysis.Calories")}</div>
                        <div>{t("NutritionAnalysis.Weight")}</div>
                      </div>
                      <div className="table-line"></div>
                      {tableData.map((item, index) => {
                        return (
                          <div className="result-row">
                            <div>{index + 1}</div>
                            <div>{item.unit}</div>
                            <div>{item.name}</div>
                            <div>{item.calories.toFixed(2)}</div>
                            <div>{item.weights.toFixed(2)}</div>
                          </div>
                        );
                      })}
                      {/*<div className="result-row">
                        <div>100</div>
                        <div>gram</div>
                        <div>chicken breast</div>
                        <div>200 kcal</div>
                        <div>200 g</div>
                      </div> */}
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
                      <div className="result-right-title">{t("NutritionAnalysis.NutritionFacts")}</div>
                      <div className="result-line"></div>
                      <div className="result-sub">{t("NutritionAnalysis.AmountPerServing")}</div>
                      <div className="result-Calories">
                        <span>{t("NutritionAnalysis.Calories")}</span>
                        <span>
                          {result.calories.reduce(
                            (prev: number, cur: number) => {
                              return prev + cur;
                            }
                          )}
                        </span>
                      </div>
                      <div className="result-line2"></div>

                      <div className="daily-value">% {t("DailyValue")}*</div>

                      <div className="result-item">
                        <div className="item-main">
                          <div>
                            <b>{t("NutritionAnalysis.TotalFat")} </b>
                            {result.total_fat_digits.toFixed(2)}{" "}
                            {result.total_fat_unit}
                          </div>
                          <div>
                            <b>{result.total_fat_percent.toFixed(2)}%</b>
                          </div>
                        </div>
                        <div className="item-details">
                          <span>
                            {t("NutritionAnalysis.SaturatedFat")}{" "}
                            {result.saturated_fat_digits.toFixed(2)}
                            {result.saturated_fat_unit}
                          </span>
                          <b>{result.saturated_fat_percent.toFixed(2)}%</b>
                        </div>
                        <div className="item-details">
                          <span>
                            {t("TransFat")} {result.trans_fat_digits.toFixed(2)}{" "}
                            {result.trans_fat_unit}
                          </span>
                          <b>{result.trans_fat_percent.toFixed(2)}%</b>
                        </div>
                        <div className="item-main">
                          <div>
                            <b>{t("NutritionAnalysis.Cholesterol")}</b>
                            {result.cholesterol_digits.toFixed(2)}{" "}
                            {result.cholesterol_unit}
                            {/* <b>{result.cholesterol_percent}%</b> */}
                          </div>
                          <div>
                            <b>{result.cholesterol_percent.toFixed(2)}%</b>
                          </div>
                        </div>
                        <div className="item-main">
                          <div>
                            <b>{t("NutritionAnalysis.Sodium")}</b>
                            {result.saturated_fat_digits.toFixed(2)}{" "}
                            {result.saturated_fat_unit}
                          </div>
                          <div>
                            <b>{result.saturated_fat_percent.toFixed(2)}%</b>
                          </div>
                        </div>
                        <div className="item-main">
                          <div>
                            <b>{t("NutritionAnalysis.TotalCarbohydrate")}</b>
                            {result.total_carbohydrate_digits.toFixed(2)}{" "}
                            {result.total_carbohydrate_unit}
                          </div>
                          <div>
                            <b>
                              {result.total_carbohydrate_percent.toFixed(2)} %
                            </b>
                          </div>
                        </div>
                        <div className="item-details">
                          <span>
                            {t("NutritionAnalysis.DietaryFiber")}{" "}
                            {result.dietary_fiber_digits.toFixed(2)}{" "}
                            {result.dietary_fiber_unit}
                          </span>
                          <b>{result.dietary_fiber_percent.toFixed(2)}%</b>
                        </div>
                        <div className="item-details">
                          <span>
                            {t("NutritionAnalysis.TotalSugars")} {result.total_sugars_digits.toFixed(2)}{" "}
                            {result.total_sugars_unit}
                          </span>
                          <b>{result.total_sugars_percent.toFixed(2)}%</b>
                        </div>
                        <div className="item-details">
                          <span>{t("NutritionAnalysis.Includes-AddedSugars")}</span>
                          <b></b>
                        </div>
                        <div className="item-main">
                          <div>
                            <b>{t("NutritionAnalysis.Protein")}</b>
                            {result.protein_digits.toFixed(2)}{" "}
                            {result.protein_unit}
                          </div>
                          <div>
                            <b>{result.protein_percent.toFixed(2)}</b>
                          </div>
                        </div>
                        <div className="item-main">
                          <div>
                            {t("NutritionAnalysis.VitaminD")}{result.vitamin_digits.toFixed(2)}{" "}
                            {result.vitamin_unit}
                          </div>
                          <div>
                            <b>{result.vitamin_percent.toFixed(2)} %</b>
                          </div>
                        </div>
                        <div className="item-main">
                          <div>
                            {t("NutritionAnalysis.Calcium")} {result.calcium_digits.toFixed(2)}{" "}
                            {result.calcium_unit}
                          </div>
                          <div>
                            <b>{result.calcium_percent.toFixed(2)} %</b>
                          </div>
                        </div>{" "}
                        <div className="item-main">
                          <div>
                            {t("NutritionAnalysis.Iron")} {result.iron_digits.toFixed(2)}{" "}
                            {result.iron_unit}
                          </div>
                          <div>
                            <b>{result.iron_percent.toFixed(2)}%</b>
                          </div>
                        </div>{" "}
                        <div className="item-main">
                          <div>
                            {t("NutritionAnalysis.Potassium")} {result.potassium_digits.toFixed(2)}{" "}
                            {result.potassium_unit}
                          </div>
                          <div>
                            <b>{result.potassium_percent.toFixed(2)}%</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="right-bottom">
                      *{t("NutritionAnalysis.PercentDailyValuesarebasedona2000caloriediet")}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Recommendation-box">
            <div className="recommendation-title">{t("NutritionAnalysis.FoodRecommendation")}</div>

            <div>
              {t("NutritionAnalysis.text2")}
            </div>

            <div className="recommendation-switch-button">
              <div
                className={"left button " + (recomend ? "actrecomend" : "")}
                onClick={() => onRecommended(true)}
              >
                {t("NutritionAnalysis.Recommended")}
              </div>
              <div
                className={"right button " + (!recomend ? "actrecomend" : "")}
                onClick={() => onRecommended(false)}
              >
                {t("NutritionAnalysis.NotRecommended")}
              </div>
            </div>

            <div className="category" id="category">
              <div className="category-title">{t("NutritionAnalysis.category")}</div>
              <div className="category-sub-title">{t("NutritionAnalysis.Choosethefoodcategory")}</div>

              <div className="category-group">
                <data
                  className={"category-item"}
                  onClick={() => categoryClick("Grains")}
                >
                  <div
                    className={
                      "warp " + (currentCategory == "Grains" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + grains_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Grains")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Meat")}
                >
                  <div
                    className={
                      "warp " + (currentCategory == "Meat" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + meat_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Meat")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Dairy")}
                >
                  <div
                    className={
                      "warp " + (currentCategory == "Dairy" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + dairy_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Dairy")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Fish")}
                >
                  <div
                    className={
                      "warp " + (currentCategory == "Fish" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + fish_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Fish")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Vegetables")}
                >
                  <div
                    className={
                      "warp " +
                      (currentCategory == "Vegetables" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" +
                          vegetables_icon +
                          ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Vegetables")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Fruits")}
                >
                  <div
                    className={
                      "warp " + (currentCategory == "Fruits" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + fruit_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Fruits")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Beverages")}
                >
                  <div
                    className={
                      "warp " +
                      (currentCategory == "Beverages" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + beverages_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Beverages")}</div>
                  </div>
                </data>
                <data
                  className="category-item"
                  onClick={() => categoryClick("Processed")}
                >
                  <div
                    className={
                      "warp " +
                      (currentCategory == "Processed" ? "act-warp" : "")
                    }
                  >
                    <div
                      className="category-icon"
                      style={{
                        background:
                          "url(" + processed_icon + ") no-repeat center center",
                        backgroundSize: "contain",
                      }}
                    ></div>
                    <div className="category-text">{t("NutritionAnalysis.Processed")}</div>
                  </div>
                </data>
              </div>
            </div>

            <div
              className="category"
              style={{ marginTop: "40px", display: foodList.length == 0 ? "none" : "block" }}
              id="foodList"
            >
              <div className="category-title">{t("NutritionAnalysis.FoodList")}</div>
              <div className="category-sub-title">
                {t("NutritionAnalysis.Listoffooditemsbasedonyourselection")}
              </div>

              {foodList.map((item: any) => {
                return (
                  <div className="food-list">
                    <div className="left-icon" style={{ background: "url(" + getUrl(item.food) + ") no-repeat center center", backgroundSize: "cover" }}>
                    </div>
                    <div className="right-item">
                      <div className="food-right-top">
                        <span className="food-right-top-left">{item.food}</span>
                        <span className="food-right-top-right">
                          {/* <i>Limit: 2-3 servings/week</i> */}
                        </span>
                      </div>
                      <div
                        className="food-right-bottom"
                        style={{ height: "45px", lineHeight: "45px" }}
                      >
                        {item.details}
                        {/* <div className="food-tag">Low mercury</div>
                          <div className="food-tag">High omega 3</div>
                          <div className="food-tag">Protein</div> */}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="food-list">
                <div className="left-icon"></div>
                <div className="right-item">
                  <div className="food-right-top">
                    <span className="food-right-top-left">Salmon (Fish)</span>
                    <span className="food-right-top-right">
                      <i>Limit: Max. 2 servings/week</i>
                    </span>
                  </div>
                  <div className="food-right-bottom">
                    <div className="food-tag">Modarate mercury</div>
                    <div className="food-tag">Omega 3</div>
                    <div className="food-tag">Protein</div>
                  </div>
                </div>
              </div> */}

              {/* <div className="food-list">
                <div className="left-icon"></div>
                <div className="right-item">
                  <div className="food-right-top">
                    <span className="food-right-top-left">Sardines</span>
                    <span className="food-right-top-right">
                      <i>Limit: No limit</i>
                    </span>
                  </div>
                  <div className="food-right-bottom">
                    <div className="food-tag">Low mercury</div>
                    <div className="food-tag">High omega 3</div>
                    <div className="food-tag">Calcium</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </>
      )}
      {contextHolder}
      <Footer />
    </>
  );
};
