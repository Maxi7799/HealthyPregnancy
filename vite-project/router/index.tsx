import { Routes, Route } from "react-router-dom";
import { Home } from "../src/view/home/index";
import { About } from "../src/view/about";
import { Contactus } from "../src/view/contactus";
import { Faqs } from "../src/view/faqs";
import { Testimonial } from "../src/view/testimonial";
import { Educational } from "../src/view/educational/index";
import { DataInsight } from "../src/view/dataInsight/index";
import { Chapter } from '../src/view/chapter/index'
import React from "react";
import { Login } from "../src/view/login";

const MainRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/dataInsight" element={<DataInsight />} />
        <Route path="/chapter" element={<Chapter />} />
      </Routes>
    </>
  );
};

export default MainRouter;
