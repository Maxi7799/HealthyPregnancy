import "./header.css";
import {HeaderIcon} from "./headerIcon"; // Assuming headerIcon is a default export
import { Nav } from "./nav";
import { language } from "./language";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="header-main">
      <HeaderIcon />
      <Nav />
      <div className="h-right">{language()}</div>
    </div>
  );
};
