import "./index.css";
import { Link } from "react-router-dom";
export function GoBack() {
  return (
    <>
      <div className="go-back">
        <div className="go-back-left"></div>
        <div className="go-back-right">
          <Link to="/">
            <span className="back">Back to HomePage</span>
          </Link>
        </div>
      </div>
    </>
  );
}
