import { GlobalOutlined, CaretDownOutlined } from "@ant-design/icons";
import US from "../../assets/US.png";
import DE from "../../assets/DE.png";
import FR from "../../assets/FR.png";
import { useTranslation } from "react-i18next";

type listType = {
  simple: string;
  flag: string;
  country: string;
};

export function Language() {
  const list: Array<listType> = [
    {
      simple: "en",
      flag: US,
      country: "English",
    },
    {
      simple: "zh",
      flag: DE,
      country: "Chinese",
    },
    {
      simple: "id",
      flag: FR,
      country: "Bahasa Indonesia",
    },
    {
      simple: "fil",
      flag: FR,
      country: "Filipino",
    },
    {
      simple: "vi",
      flag: FR,
      country: "Vietnamese",
    },
    {
      simple: "ms",
      flag: FR,
      country: "Malaysian",
    },
  ];

  const [, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang:string) => {
    i18n.changeLanguage(lang);
  };

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
                <div
                  className="l-row"
                  onClick={() => handleChangeLanguage(item.simple)}
                >
                  {/* <div className="simple">{item.simple}</div> */}
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
