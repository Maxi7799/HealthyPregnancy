import "./index.css";
import { eduData } from "./mock";
import { Link } from "react-router-dom";
import { setTitle } from "../../store/chapter";
import { useSelector, useDispatch } from "react-redux";
import { eduType, chapterType } from "./mock/edutype";
console.log(eduData);
export function EdMain() {
  console.log(eduData);

  const count = useSelector((state: any) => state.chapter.value);

  const dispatch = useDispatch();

  type EduType = {
    name: string;
  };

  const goChapter = (item: eduType) => {
    console.log("==============", item);
    dispatch(setTitle(item));
  };

  return (
    <>
      <div className="ed-main">
        {eduData.map((item: eduType, index: number) => {
          return (
            <div
              className="edu-main-item"
              onClick={() => goChapter(item)}
              key={index}
            >
              <Link to="/chapter">
                <span className="edu-main-item-span"> {item.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
