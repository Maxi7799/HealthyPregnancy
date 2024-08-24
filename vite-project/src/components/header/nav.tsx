import { Link } from "react-router-dom";
export function nav() {
  type navType = {
    name: string;
    to: string;
  };

  const navData: Array<navType> = [
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Testimonial",
      to: "/testimonial",
    },
    {
      name: "FAQs",
      to: "/faqs",
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
