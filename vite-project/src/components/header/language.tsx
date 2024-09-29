import { GlobalOutlined, CaretDownOutlined } from "@ant-design/icons";
import US from "../../assets/US.png";
import CH from "../../assets/CH.png";
import YD from "../../assets/YD.png";
import FL from "../../assets/FL.png";
import YN from "../../assets/YN.png";
import ML from "../../assets/ML.png";
import { useTranslation } from "react-i18next";

type listType = {
  simple: string;
  flag: string;
  country: string;
};

export function Language() {
  const [t] = useTranslation("global");
  const list: Array<listType> = [
    {
      simple: "en",
      flag: US,
      country: t("header.language-en"),
    },
    {
      simple: "zh",
      flag: CH,
      country: t("header.language-zh"),
    },
    {
      simple: "id",
      flag: YD,
      country: t("header.language-id"),
    },
    {
      simple: "fil",
      flag: FL,
      country: t("header.language-fil"),
    },
    {
      simple: "vi",
      flag: YN,
      country: t("header.language-vi"),
    },
    {
      simple: "ms",
      flag: ML,
      country: t("header.language-ms"),
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
