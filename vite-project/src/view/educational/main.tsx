import "./index.css";
import { eduData } from "./mock";
import { Link } from "react-router-dom";
import { setTitle, setText } from "../../store/chapter";
import { useSelector, useDispatch } from "react-redux";
console.log(eduData);
export function EdMain() {
  console.log(eduData);

  const count = useSelector((state) => state.chapter.value);

  const dispatch = useDispatch();

  const goChapter = (item) => {
    console.log("==============", item);
    dispatch(setTitle(item));
  };

  return (
    <>
      <div className="ed-main">
        {eduData.map((item, index) => {
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
