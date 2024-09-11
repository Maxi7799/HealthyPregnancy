import "./index.css";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { About } from "./../about";
import { Alert } from "antd";
import { Button } from "antd";
import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";

import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

export function Chapter() {
  //   let current = 0;
  const [current, setCurrent] = useState(0);
  const [question, setQuestion] = useState(false);
  const [chose, setchose] = useState(-1);
  const [answer, setAnswer] = useState(false);
  const [show, setShow] = useState(false);
  const { chapter } = useSelector((state: any) => state.chapter);

  console.log(chapter.chapter);

  const goto = (index: number) => {
    setCurrent(index);
    setQuestion(false);
    setAnswer(false);
    setShow(false);
  };

  const toSelection = () => {
    setQuestion(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setchose(e.target.value);
  };

  const submit = () => {
    setShow(true);
    if (chapter.question.answer == chose) {
      // console.log('correct')
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const setQue = () => {
    console.log(chapter.question);
    const select = chapter.question.select;
    let list = [];
    for (let i in select) {
      console.log(i);
      list.push(
        <div>
          <span className="select-label">{i}</span>{" "}
          <Radio value={i}>{select[i]}</Radio>
        </div>
      );
    }
    console.log(list);
    return list;
  };

  const tips = () => {
    if (show && answer) {
      return <Alert message="Your answer is correct" type="success" showIcon />;
    }
    if (show && !answer) {
      return <Alert message="Your answer is wrong" type="error" showIcon />;
    }

    return "";
  };

  return (
    <>
      <Header />
      <div className="chapter-main">
        <div className="chapter-left">
          <div className="chapter-left-top">{chapter.name}</div>

          <div className="chapter-title-group">
            {chapter.chapter.map((item: { name: string }, index: number) => {
              return (
                <>
                  <div
                    className="title-item"
                    onClick={() => goto(index)}
                    style={{
                      background: current == index ? "#e5e9ef" : "#fff",
                      fontWeight: current == index ? 600 : 400,
                      color: current == index ? "#000" : "#22272B",
                    }}
                  >
                    <span>{item.name}</span>
                  </div>
                </>
              );
            })}
            <div className="quiz" onClick={toSelection}>
              quiz
            </div>
          </div>
        </div>
        <div className="chapter-right">
          <div className="chapter-title">{chapter.chapter[current].name}</div>
          {question ? (
            <div className="chapter-question">
              <h3 className="choice-question">choice question</h3>
              <p className="question">{chapter.question.title}</p>

              <Radio.Group onChange={onChange} value={chose}>
                {setQue()}
                {/* {chapter.question.select.map((item) => {
                  return (
                    <p className="choice">
                      <Radio value={1}>
                        They used different motor skills from younger typists.
                      </Radio>
                    </p>
                  );
                })} */}
                {/* <p className="choice">
                  <Radio value={2}>
                    They had been more efficiently trained than younger typists.
                  </Radio>
                </p>
                <p className="choice">
                  <Radio value={3}>
                    They used more time-saving techniques than younger typists.
                  </Radio>
                </p>
                <p className="choice">
                  <Radio value={4}>
                    They had better concentration skills than younger typists.
                  </Radio>
                </p> */}
              </Radio.Group>

              <div className="answer-tips">{tips()}</div>

              <p className="submit-btn">
                <Button type="primary" danger onClick={submit}>
                  Submit
                </Button>
              </p>
            </div>
          ) : (
            <div className="chapter-text">{chapter.chapter[current].text}</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
