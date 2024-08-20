import "./header.css";
import { headerIcon } from "./headerIcon";
import { nav } from "./nav";
import { language } from "./language";

export function header() {
  return (
    <>
      <div className="header-main">
        <div className="h-left">{headerIcon()}</div>
        <div className="h-center">{nav()}</div>
        <div className="h-right">{language()}</div>
      </div>
    </>
  );
}
