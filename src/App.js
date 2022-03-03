import "./styles.css";
import List from "./components/List/List";
import Display from "./components/Display/Display";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [label, setLabel] = useState("");
  const parentToApp = (parentdata) => {
    //console.log("from app", parentdata);
    setLabel(parentdata);
  };
  return (
    <div className="App">
      <List parentToApp={parentToApp} />
      {label ? (
        <Display id={label} />
      ) : (
        <img
          height="100%"
          width="100%"
          src="https://user-images.githubusercontent.com/48902030/156507244-2c7ed122-91ae-4a76-80d4-56baf8ad774a.gif"
          alt="not found"
        />
      )}
    </div>
  );
}
