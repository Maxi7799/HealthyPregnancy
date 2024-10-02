import { Routes, Route } from "react-router-dom";
import { Home } from "../src/view/home/index";
import { ContactUs } from "../src/view/contactUs/index";
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
import { Exercise } from "../src/view/exercise/index";
import {ExerciseQuestionari} from "../src/view/exercise/healthyQuestionnair/index";
import { PostpartumExercise } from "../src/view/exercise/postpartumPhysicalHealthExercise";
import {VideoPage1} from "../src/view/exercise/categorydetails/videoPage1";

const MainRouter: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/dataInsight" element={<DataInsight />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />
        <Route path="/nutrition-analysis" element={<NutritionAnalysis />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe-result" element={<RecipeResult />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/healthyquestionnari" element={<ExerciseQuestionari />} />
        <Route path="/postpartumexercise" element={<PostpartumExercise />} />


        <Route path="/module1" element={<ModulePage1 />} />
        <Route path="/module2" element={<ModulePage2 />} />
        <Route path="/module3" element={<ModulePage3 />} />
        <Route path="/module4" element={<ModulePage4 />} />
        <Route path="/module5" element={<ModulePage5 />} />
        <Route path="/module6" element={<ModulePage6 />} />

        <Route path="/videopage1" element={<VideoPage1/>} />
      </Routes>
    </>
  );
};

export default MainRouter;
