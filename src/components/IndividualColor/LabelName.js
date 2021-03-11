import { useState } from "react";

const LabelName = ({ name }) => {
  console.log("label = ", name);
  const [colorLabel, setColorLabel] = useState("Primary");
  return <div className="font-light p-1 cursor-text ">{name}</div>;
};

export default LabelName;
