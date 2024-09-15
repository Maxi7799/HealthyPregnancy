import "./index.css";
import "../recipe/index.css";
import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { ArrowLeftOutlined, FilePptOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

console.log(html2canvas, jsPDF)
// import { useSearchParams } from "react-router-dom";
export const RecipeResult: React.FC = () => {
  // const [params] = useSearchParams()
  // console.log(params.getAll("data")[0])
  // const data = JSON.parse(params.getAll("data")[0])
  // console.log(data)
  // const meal_time = ['Breakfast', 'Dinner', 'Lunch', 'Teatime']
  const Breakfast = localStorage.getItem('Breakfast') || '[]'
  const Dinner = localStorage.getItem('Dinner') || '[]'
  const Lunch = localStorage.getItem('Lunch') || '[]'
  const Teatime = localStorage.getItem('Teatime') || '[]'

  let calories_digits = 0
  let protein_digits = 0;
  let fat_digits = 0;
  let cholesterol_digits = 0;
  let carb_digits = 0;
  let sodium_digits = 0;
  let calcium_digits = 0;
  let magnesium_digits = 0;
  let potassium_digits = 0;
  let iron_digits = 0

  JSON.parse(Breakfast).map((item: any) => {
    calories_digits += item.calories_digits;
    protein_digits += item.protein_digits
    fat_digits += item.fat_digits;
    cholesterol_digits = item.cholesterol_digits;
    sodium_digits += item.sodium_digits
    calcium_digits += item.calcium_digits
    magnesium_digits += item.magnesium_digits
    potassium_digits += item.potassium_digits
    iron_digits += item.iron_digits
    // console.log(item.carb_digits)
    carb_digits += item.carb_digits
  })

  JSON.parse(Dinner).map((item: any) => {
    calories_digits += item.calories_digits;
    protein_digits += item.protein_digits
    fat_digits += item.fat_digits;
    cholesterol_digits = item.cholesterol_digits;
    sodium_digits += item.sodium_digits
    calcium_digits += item.calcium_digits
    magnesium_digits += item.magnesium_digits
    potassium_digits += item.potassium_digits
    iron_digits += item.iron_digits
    // console.log(item.carb_digits)
    carb_digits += item.carb_digits
  })


  JSON.parse(Lunch).map((item: any) => {
    calories_digits += item.calories_digits;
    protein_digits += item.protein_digits
    fat_digits += item.fat_digits;
    cholesterol_digits = item.cholesterol_digits;
    sodium_digits += item.sodium_digits
    calcium_digits += item.calcium_digits
    magnesium_digits += item.magnesium_digits
    potassium_digits += item.potassium_digits
    iron_digits += item.iron_digits
    // console.log(item.carb_digits)
    carb_digits += item.carb_digits
  })

  JSON.parse(Teatime).map((item: any) => {
    calories_digits += item.calories_digits;
    protein_digits += item.protein_digits
    fat_digits += item.fat_digits;
    cholesterol_digits = item.cholesterol_digits;
    sodium_digits += item.sodium_digits
    calcium_digits += item.calcium_digits
    magnesium_digits += item.magnesium_digits
    potassium_digits += item.potassium_digits
    iron_digits += item.iron_digits
    // console.log(item.carb_digits)
    carb_digits += item.carb_digits
  })

  // console.log( calories_digits,
  //  protein_digits ,
  //   fat_digits ,
  //   cholesterol_digits,
  //   carb_digits,
  //   sodium_digits,
  //   calcium_digits ,
  //   magnesium_digits ,
  //   potassium_digits ,
  //  iron_digits
  // )
  // console.log(carb_digits)

  return (
    <>
      <Header />
      <div id="create-pdf">
        <div className="recipe-result">
          <div className="recipe-Schedule">
            <div className="arrow">
              <Link to="/recipe">
                <ArrowLeftOutlined></ArrowLeftOutlined>
              </Link>
            </div>
            Schedule
          </div>

          <div className="recipe-items">
            <div className="recipe-items-card card1">
              <div className="card-label">Breakfast</div>
              <div className="card-item" >

                {JSON.parse(Breakfast).map((item: any) => {
                  return (
                    <div className="recipe-list-item">
                      <div className="recipe-list-img" style={{ background: "url(" + item.food_picture + ') no-repeat center center', backgroundSize: 'contain' }}>
                        <div className="recipe-list-img-text">Beef Roast</div>
                      </div>

                      {/* <div className="recipe-list-title">Pre Serving - 100g</div> */}
                      <div className="recipe-list-data">
                        {item.calories_digits.toFixed(2)} <span className="recipe-list-kcal">kcal</span>
                      </div>

                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point"></div>
                          <div className="text">PROTEIN</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.protein_digits.toFixed(2)}</div>
                          <div className="unit">{item.protein_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-fat"></div>
                          <div className="text">FAT</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.fat_digits.toFixed(2)}</div>
                          <div className="unit">{item.fat_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-carb"></div>
                          <div className="text">CARB</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.carb_digits.toFixed(2)}</div>
                          <div className="unit">{item.carb_unit}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="recipe-items-card card2">
              <div className="card-label">Lunch</div>
              <div className="card-item" >

                {JSON.parse(Lunch).map((item: any) => {
                  return (
                    <div className="recipe-list-item">
                      <div className="recipe-list-img" style={{ background: "url(" + item.food_picture + ') no-repeat center center', backgroundSize: 'contain' }}>
                        <div className="recipe-list-img-text">Beef Roast</div>
                      </div>

                      {/* <div className="recipe-list-title">Pre Serving - 100g</div> */}
                      <div className="recipe-list-data">
                        {item.calories_digits.toFixed(2)} <span className="recipe-list-kcal">kcal</span>
                      </div>

                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point"></div>
                          <div className="text">PROTEIN</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.protein_digits.toFixed(2)}</div>
                          <div className="unit">{item.protein_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-fat"></div>
                          <div className="text">FAT</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.fat_digits.toFixed(2)}</div>
                          <div className="unit">{item.fat_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-carb"></div>
                          <div className="text">CARB</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.carb_digits.toFixed(2)}</div>
                          <div className="unit">{item.carb_unit}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="recipe-items-card card3">
              <div className="card-label">Tea Time</div>
              <div className="card-item" >

                {JSON.parse(Teatime).map((item: any) => {
                  return (
                    <div className="recipe-list-item">
                      <div className="recipe-list-img" style={{ background: "url(" + item.food_picture + ') no-repeat center center', backgroundSize: 'contain' }}>
                        <div className="recipe-list-img-text">Beef Roast</div>
                      </div>

                      {/* <div className="recipe-list-title">Pre Serving - 100g</div> */}
                      <div className="recipe-list-data">
                        {item.calories_digits.toFixed(2)} <span className="recipe-list-kcal">kcal</span>
                      </div>

                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point"></div>
                          <div className="text">PROTEIN</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.protein_digits.toFixed(2)}</div>
                          <div className="unit">{item.protein_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-fat"></div>
                          <div className="text">FAT</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.fat_digits.toFixed(2)}</div>
                          <div className="unit">{item.fat_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-carb"></div>
                          <div className="text">CARB</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.carb_digits.toFixed(2)}</div>
                          <div className="unit">{item.carb_unit}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="recipe-items-card card4">
              <div className="card-label">Dinner</div>
              <div className="card-item" >

                {JSON.parse(Dinner).map((item: any) => {
                  return (
                    <div className="recipe-list-item">
                      <div className="recipe-list-img" style={{ background: "url(" + item.food_picture + ') no-repeat center center', backgroundSize: 'contain' }}>
                        <div className="recipe-list-img-text">Beef Roast</div>
                      </div>

                      {/* <div className="recipe-list-title">Pre Serving - 100g</div> */}
                      <div className="recipe-list-data">
                        {item.calories_digits.toFixed(2)} <span className="recipe-list-kcal">kcal</span>
                      </div>

                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point"></div>
                          <div className="text">PROTEIN</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.protein_digits.toFixed(2)}</div>
                          <div className="unit">{item.protein_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-fat"></div>
                          <div className="text">FAT</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.fat_digits.toFixed(2)}</div>
                          <div className="unit">{item.fat_unit}</div>
                        </div>
                      </div>
                      <div className="recipe-list-item-details">
                        <div className="recipe-list-item-left">
                          <div className="point point-carb"></div>
                          <div className="text">CARB</div>
                        </div>
                        <div className="recipe-list-item-right">
                          <div className="point">{item.carb_digits.toFixed(2)}</div>
                          <div className="unit">{item.carb_unit}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* let calories_digits = 0
  let protein_digits = 0;
  let fat_digits = 0;
  let cholesterol_digit = 0;
  let odium_digits = 0;
  let calcium_digits = 0;
  let magnesium_digits = 0;
  let potassium_digits = 0;
  let iron_digits = 0 */}
          <div
            className="top10-right-bottom"
            style={{ width: "70%", margin: "20px auto" }}
          >
            <div className="top10-right-bottom-item">
              {/* <div className="top10-servings">10 servings</div> */}
              <div>
                <span className="top10-kcal">{calories_digits.toFixed(2)}</span>
                <span className="top10-kcal-unit">kcal</span>
              </div>
            </div>
            <div className="top10-right-bottom-item">
              <div className="recipe-list-item-details">
                <div className="recipe-list-item-left">
                  <div className="point"></div>
                  <div className="text">PROTEIN</div>
                </div>
                <div className="recipe-list-item-right">
                  <div className="point">{protein_digits.toFixed(2)}</div>
                  <div className="unit">g</div>
                </div>
              </div>
              <div className="recipe-list-item-details">
                <div className="recipe-list-item-left">
                  <div className="point point-fat"></div>
                  <div className="text">FAT</div>
                </div>
                <div className="recipe-list-item-right">
                  <div className="point">{fat_digits.toFixed(2)}</div>
                  <div className="unit">g</div>
                </div>
              </div>
              <div className="recipe-list-item-details">
                <div className="recipe-list-item-left">
                  <div className="point point-carb"></div>
                  <div className="text">CARB</div>
                </div>
                <div className="recipe-list-item-right">
                  <div className="point">{carb_digits.toFixed(2)}</div>
                  <div className="unit">g</div>
                </div>
              </div>
            </div>
            <div className="top10-right-bottom-item">
              <div className="top10-right-bottom-item-main">
                <span>Cholesterol</span>
                <span className="top10-right-bottom-item-unit">{cholesterol_digits.toFixed(2)} mg</span>
              </div>
              <div className="top10-right-bottom-item-main">
                <span>Sodium</span>
                <span className="top10-right-bottom-item-unit">{sodium_digits.toFixed(2)} mg</span>
              </div>
              <div className="top10-right-bottom-item-main">
                <span>Calcium</span>
                <span className="top10-right-bottom-item-unit">{calcium_digits.toFixed(2)} mg</span>
              </div>
              <div className="top10-right-bottom-item-main">
                <span>Magnesium</span>
                <span className="top10-right-bottom-item-unit">{magnesium_digits.toFixed(2)} mg</span>
              </div>
              <div className="top10-right-bottom-item-main">
                <span>Potassium</span>
                <span className="top10-right-bottom-item-unit">{potassium_digits.toFixed(2)} mg</span>
              </div>
              <div className="top10-right-bottom-item-main">
                <span>Iron</span>
                <span className="top10-right-bottom-item-unit">{iron_digits.toFixed(2)} mg</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "right", fontSize: "42px", cursor: "pointer" }} >
            <FilePptOutlined />
          </div>
        </div></div>

      <Footer />
    </>
  );
};
