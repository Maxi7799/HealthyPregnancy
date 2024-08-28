import "./index.css";
import { eduData } from "./mock";
import { Link } from "react-router-dom";
import { setTitle } from "../../store/chapter";
import { useDispatch } from "react-redux";
import { eduType } from "./mock/edutype";
import { ArrowRightOutlined } from "@ant-design/icons";
console.log(eduData);
export function EdMain(): JSX.Element {
  console.log(eduData);

  // const count = useSelector((state: any) => state.chapter.value);

  const dispatch = useDispatch();

  // type EduType = {
  //   name: string;
  // };

  const goChapter = (item: eduType) => {
    console.log("==============", item);
    dispatch(setTitle(item));
  };

  return (
    <>
      <div className="ed-main">
        <div className="ed-left">
          <div className="Education">Education</div>
          <div className="sun-text">Start your learningjourney here !</div>
        </div>
        <div className="ed-right">
          {eduData.map((item: eduType, index: number) => {
            return (
              <div
                className="edu-main-item"
                onClick={() => goChapter(item)}
                key={index}
              >
                <div className="edu-item">
                  <Link to="/chapter">
                    <div
                      className="edu-image-item"
                      style={{ background: "url(" + item.imgUrl + ") no-repeat center center"}}
                    >
                      {/* <img src={item.imgUrl} alt="" /> */}
                    </div>
                    <div className="edu-item-bottom">
                      <div className="edu-main-item-span"> {item.name}</div>
                      <div className="edu-main-item-text">
                      Here you can learn more about pregnancy and 
                      get a deeper understanding of them through these six chapters
                      </div>
                      <div className="item-to">
                        <ArrowRightOutlined />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
