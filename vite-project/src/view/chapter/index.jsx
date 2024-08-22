import "./index.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export function Chapter() {
  //   let current = 0;
  const [current, setCurrent] = useState(0);
  const { chapter } = useSelector((state) => state.chapter);

  console.log(chapter.chapter);

  const goto = (index) => {
    console.log(index);
    setCurrent(index);
  };
  return (
    <>
      <div className="chapter-main">
        <div className="chapter-left">
          <div className="chapter-left-top">{chapter.name}</div>

          <div className="chapter-title-group">
            {chapter.chapter.map((item, index) => {
              return (
                <>
                  <div
                    className="title-item"
                    onClick={() => goto(index)}
                    style={{
                      border:
                        current == index
                          ? "2px solid rgb(230, 114, 109)"
                          : "2px solid rgba(0, 0, 0, 0)",
                    }}
                  >
                    <span>{item.name}</span>
                  </div>
                </>
              );
            })}
            <div className="title-list"></div>
          </div>
        </div>
        <div className="chapter-right">
          <div className="chapter-title">{chapter.chapter[current].name}</div>
          <div className="chapter-text">{chapter.chapter[current].text}</div>
        </div>
      </div>
    </>
  );
}
