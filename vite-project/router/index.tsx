import { Routes, Route } from "react-router-dom";
import { Home } from "../src/view/home/index";
import { About } from "../src/view/about";
import { ContactUs } from "../src/view/contactUs/index";
import { Faqs } from "../src/view/faqs";
import { Testimonial } from "../src/view/testimonial";
import { Educational } from "../src/view/educational/index";
import { DataInsight } from "../src/view/dataInsight/index";
import { Chapter } from "../src/view/chapter/index";
import { Login } from "../src/view/login";
import { RiskAssessment } from "../src/view/riskAssessment";
import { NutritionAnalysis } from "../src/view/nutritionAnalysis";
import { Recipe } from "../src/view/recipe";
import { RecipeResult } from "../src/view/recipe-result";
import {ScrollToTop} from "./scrollToTop";
import React from "react";

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
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />
        <Route path="/nutrition-analysis" element={<NutritionAnalysis />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe-result" element={<RecipeResult />} />
      </Routes>
    </>
  );
};

export default MainRouter;
