import { useState, useEffect } from "react";
import { hexToRGB, hexGenerator } from "../utils/colorGenerator";

const DeleteButton = ({ id }) => {
  return (
    <div className="cursor-pointer bg-red-600 rounded-md h-6 w-14 flex items-center justify-center border-black transition hover:shadow-xl">
      <div className="text-xs text-white font-bold ">DELETE</div>
    </div>
  );
};

const ColorLabel = ({ name }) => {
  console.log("label = ", name);
  const [colorLabel, setColorLabel] = useState("Primary");
  return <div className="font-light p-1 cursor-text ">{name}</div>;
};

const ColorCode = ({ hexCode, rgbCode }) => {
  console.log("code = ", hexCode, rgbCode);

  return (
    <div>
      <div>HEX = {hexCode}</div>

      <divs>RGB = {rgbCode}</divs>
    </div>
  );
};

const ColorCard = ({ props }) => {
  console.log("props = ", props);
  const { hex_code, id, label_name, rgb_code } = props;
  const [showDelete, setShowDelete] = useState(false);

  let styles = {
    backgroundColor: props.hex_code
  };

  const toggleButton = () => {
    setShowDelete(!showDelete);
  };

  return (
    <div className="text-base font-normal">
      <ColorLabel name={label_name} />
      <div
        className="relative h-28 w-52"
        style={styles}
        onMouseEnter={toggleButton}
        onMouseLeave={toggleButton}
      >
        {showDelete && (
          <div className="absolute top-20 left-36 ">
            <DeleteButton />
          </div>
        )}
      </div>
      <ColorCode hexCode={hex_code} rgbCode={rgb_code} />
    </div>
  );
};

export default ColorCard;
