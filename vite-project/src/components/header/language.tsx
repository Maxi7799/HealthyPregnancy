import { GlobalOutlined, CaretDownOutlined } from "@ant-design/icons";
import RO from "../../assets/RO.png";
import ES from "../../assets/ES.png";
import UK from "../../assets/UK.png";
import US from "../../assets/US.png";
import DE from "../../assets/DE.png";
import FR from "../../assets/FR.png";

type listType = {
  simple: string;
  flag: string;
  country: string;
};

export function Language() {
  const list: Array<listType> = [
    {
      simple: "RO",
      flag: RO,
      country: "Romana",
    },
    {
      simple: "ES",
      flag: ES,
      country: "Espana",
    },
    {
      simple: "UK",
      flag: UK,
      country: "United Kingdom",
    },
    {
      simple: "US",
      flag: US,
      country: "United States",
    },
    {
      simple: "DE",
      flag: DE,
      country: "Deutschland",
    },
    {
      simple: "FR",
      flag: FR,
      country: "France",
    },
  ];

  return (
    <>
      <div className="language-main">
        <div className="language-box">
          <GlobalOutlined /> <CaretDownOutlined />
        </div>
        <div className="language-other">
          <div className="white-box">
            <div className="angel"></div>
            {list.map((item: listType) => {
              return (
                <div className="l-row">
                  <div className="simple">{item.simple}</div>
                  <div className="flag">
                    <img src={item.flag} alt="" />
                  </div>
                  <div className="country">{item.country}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
