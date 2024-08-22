import { Routes, Route } from "react-router-dom";
import { Home } from "../src/view/page";
import { About } from "../src/view/about";
import { Contactus } from "../src/view/contactus";
import { Faqs } from "../src/view/faqs";
import { Testimonial } from "../src/view/testimonial";
import { Educational } from "../src/view/educational/index";
import { DataInsight } from "../src/view/dataInsight/index";
function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contactus" element={<Contactus></Contactus>} />
        <Route path="/faqs" element={<Faqs></Faqs>} />
        <Route path="/testimonial" element={<Testimonial></Testimonial>} />
        <Route path="/educational" element={<Educational></Educational>} />
        <Route path="/dataInsight" element={<DataInsight></DataInsight>} />
      </Routes>
    </>
  );
}

export default MainRouter;
