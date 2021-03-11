import { useMutation } from "@apollo/client";
import { useState } from "react";

import { DELETE_COLOR } from "../../gql/queries";
import LabelName from "./LabelName";
import CodesSection from "./CodesSection";

const DeleteButton = ({ id }) => {
  const [delColor] = useMutation(DELETE_COLOR);

  const deleteColor = () => {
    delColor({
      variables: {
        id
      }
    });
  };

  return (
    <div
      onClick={deleteColor}
      className="cursor-pointer bg-red-600 rounded-md h-6 w-14 flex items-center justify-center border-black transition hover:shadow-xl"
    >
      <div className="text-xs text-white font-bold ">DELETE</div>
    </div>
  );
};

const ColorCard = ({ props }) => {
  const { hex_code, id, label_name, rgb_code } = props;
  const [showDelete, setShowDelete] = useState(false);

  let styles = {
    backgroundColor: hex_code
  };

  const toggleButton = () => {
    setShowDelete(!showDelete);
  };

  return (
    <div className="text-base font-normal border-black p-2 m-2 border-2 rounded-md border-opacity-20 max-w-min">
      <LabelName name={label_name} />
      <div
        className="relative h-28 w-52"
        style={styles}
        onMouseEnter={toggleButton}
        onMouseLeave={toggleButton}
      >
        {showDelete && (
          <div className="absolute top-20 left-36 ">
            <DeleteButton id={id} />
          </div>
        )}
      </div>
      <CodesSection hexCode={hex_code} rgbCode={rgb_code} />
    </div>
  );
};

export default ColorCard;
