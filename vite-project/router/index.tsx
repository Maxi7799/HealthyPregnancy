import { Routes, Route } from "react-router-dom";
import { Home } from "../src/view/home/index";
import { About } from "../src/view/about";
import { ContactUs } from "../src/view/contactUs/index";
import { Faqs } from "../src/view/faqs";
import { Testimonial } from "../src/view/testimonial";
import { Educational } from "../src/view/educational/index";
import { DataInsight } from "../src/view/dataInsight/index";
import { Login } from "../src/view/login";
import { RiskAssessment } from "../src/view/riskAssessment";
import { NutritionAnalysis } from "../src/view/nutritionAnalysis";
import { Recipe } from "../src/view/recipe";
import { RecipeResult } from "../src/view/recipe-result";
import {ScrollToTop} from "./scrollToTop";
import React from "react";
import { ModulePage1 } from "../src/view/educational/modules/modulePage1";
import { ModulePage2 } from "../src/view/educational/modules/modulePage2";
import { ModulePage3 } from "../src/view/educational/modules/modulePage3";
import { ModulePage4 } from "../src/view/educational/modules/modulePage4";
import { ModulePage5 } from "../src/view/educational/modules/modulePage5";
import { ModulePage6 } from "../src/view/educational/modules/modulePage6";


const MainRouter: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/dataInsight" element={<DataInsight />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />
        <Route path="/nutrition-analysis" element={<NutritionAnalysis />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe-result" element={<RecipeResult />} />

        <Route path="/module1" element={<ModulePage1 />} />
        <Route path="/module2" element={<ModulePage2 />} />
        <Route path="/module3" element={<ModulePage3 />} />
        <Route path="/module4" element={<ModulePage4 />} />
        <Route path="/module5" element={<ModulePage5 />} />
        <Route path="/module6" element={<ModulePage6 />} />
      </Routes>
    </>
  );
};

export default MainRouter;
