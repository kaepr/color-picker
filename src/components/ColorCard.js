import { useState } from "react";
import { hexToRGB, hexGenerator } from "../utils/colorGenerator";

const DeleteButton = () => {
  return (
    <div className=" cursor-pointer bg-red-700 rounded-lg h-6 w-14 flex items-center justify-center border-black hover:shadow-xl">
      <div className="text-xs text-white">DELETE</div>
    </div>
  );
};

const ColorLabel = () => {
  const [colorLabel, setColorLabel] = useState("Primary");
  return <div className="font-light p-1 underline ">Color Label</div>;
};

const ColorCode = () => {
  return (
    <div>
      <div>
        <span>HEX = 123456</span>
      </div>
      <div>
        <span>RGB = 123456</span>
      </div>
    </div>
  );
};

const ColorCard = () => {
  const [showDelete, setShowDelete] = useState(false);

  const hexCode = hexGenerator();
  console.log(hexCode);
  console.log(hexToRGB(hexCode));

  let styles = {
    backgroundColor: hexCode,
  };

  return (
    <div className="text-base font-normal">
      <ColorLabel />
      <div className="relative h-28 w-52 " style={styles}>
        <div className="absolute top-20 left-36 ">
          <DeleteButton />
        </div>
      </div>
      <ColorCode />
    </div>
  );
};

export default ColorCard;
