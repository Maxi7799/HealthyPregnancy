import React from "react";
import icon from "../../assets/h-icon.png";

export const HeaderIcon: React.FC = () => {
    return (
      <>
        <div className="icon-main">
          <div className="i-left">
            <img className="i-icon" src={icon}></img>
          </div>
          <div className="i-right">
            <div>Healthy</div>
            <div>pregnancy</div>
          </div>
        </div>
      </>
    );
}