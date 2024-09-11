// import { useEffect, useState } from "react";
import "./App.css";
import MainRouter from "../router/index";

// import { Home } from "./view/page";

function App() {
  // const [tree, setTree] = useState([]);

  // const fetchTree = async () => {
  //   const treePath = "api/name";
  //   const response = await fetch("http://127.0.0.1:8000/" + treePath);
  //   const data = await response.json();
  //   setTree(data);
  // };

  // useEffect(() => {
  //   fetchTree();
  // }, []);

  return (
    <>
      <MainRouter></MainRouter>
      {/* <div>List of the tree</div> */}
      {/* {<MainRouter></MainRouter>} */}
      {/* {tree.map((tree: any) => (
        <div key={tree.id}>{tree.name}</div>
      ))} */}
    </>
  );
}

export default App;
