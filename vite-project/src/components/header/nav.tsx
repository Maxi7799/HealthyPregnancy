import { Link } from "react-router-dom";
export function Nav() {
  type navType = {
    name: string;
    to: string;
  };

  const navData: Array<navType> = [
    {
      name: "Home",
      to: "/home",
    },
    {
      name: "Risk Education",
      to: "/educational",
    },
    {
      name: "Data Insights",
      to: "/dataInsight",
    },
    {
      name: "Contact us",
      to: "/contactus",
    },
  ];

  return (
    <>
      <div className="nav-main">
        {navData.map((item: navType, index: number) => (
          <div className="nav-item" key={index}>
            <Link to={item.to}>{item.name}</Link>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}
