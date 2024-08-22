import "./index.css";
import { eduData } from "./mock";
console.log(eduData);
export function EdMain() {
  console.log(eduData);
  return (
    <>
      <div className="ed-main">
        {eduData.map((item, index) => {
          return <div className="edu-main-item" key={index}>{item.name}</div>;
        })}
      </div>
    </>
  );
}
