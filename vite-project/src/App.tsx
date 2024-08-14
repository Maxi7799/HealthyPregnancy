import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [tree, setTree] = useState([]);

  const fetchTree = async () => {
    const treePath = "api/tree";
    const response = await fetch("http://127.0.0.1:8000/" + treePath);
    const data = await response.json();
    setTree(data);
  };

  useEffect(() => {
    fetchTree();
  }, []);

  return (
    <>
      <div>List of the tree</div>
      {tree.map((tree: any) => (
        <div key={tree.id}>{tree.name}</div>
      ))}
    </>
  );
}

export default App;
