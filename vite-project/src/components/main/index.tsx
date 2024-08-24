import "./index.css";
import { Link } from "react-router-dom";
import { Button, Flex } from "antd";

export function mainBox() {
  return (
    <>
      <div className="main-box">
        {/* <div className="main-pic"></div> */}
        <Flex gap="small" wrap>
          <Button>
            <Link to="/educational">Educational</Link>
          </Button>
          <Button>
            <Link to="/dataInsight">data insight</Link>
          </Button>
        </Flex>

        <div className="main-text">
          Welcome to our dedicated resource for immigrant mothers. <br />
          We provide vital information, support, and guidance on maternal
          health, <br />
          ensuring you and your baby thrive. <br />
          Explore our expert tips, healthcare resources, <br />
          and community support to navigate your pregnancy <br />
          journey with confidence and peace of mind.
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}
