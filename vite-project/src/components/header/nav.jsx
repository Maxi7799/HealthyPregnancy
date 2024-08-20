
import { Link } from "react-router-dom";
export function nav() {
  const navData = [
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

  // const navClick = () => {
  //   console.log(this)
  // }

  return (
    <>
      <div className="nav-main">
        {navData.map((item, index) => (
          <div className="nav-item" key={index}>
            <Link to={item.to}>{item.name}</Link>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}
