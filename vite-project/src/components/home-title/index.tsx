import React from "react";
import "./index.css";

interface Props {
  text: string;
}

export const HomeTitle: React.FC<Props> = (props) => {
  return (
    <>
      <div className="home-title">{props.text}</div>
    </>
  );
};
