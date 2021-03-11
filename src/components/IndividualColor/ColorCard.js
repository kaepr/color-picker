import { useMutation } from "@apollo/client";
import { useState } from "react";

import { DELETE_COLOR } from "../../gql/queries";
import LabelName from "./LabelName";
import CodesSection from "./CodesSection";

const DeleteButton = ({ id }) => {
  const [delColor] = useMutation(DELETE_COLOR);

  const deleteColor = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
      <div className="text-xs text-white font-black">DELETE</div>
    </div>
  );
};

const ColorCard = ({ props }) => {
  const { hex_code, id, label_name, rgb_code } = props;
  const [showDelete, setShowDelete] = useState(false);

  let styles = {
    backgroundColor: hex_code
  };

  return (
    <div className="relative text-base font-normal border-black p-2 m-2 border-2 rounded-md border-opacity-20 w-56">
      <LabelName name={label_name} id={id} />
      <div
        className="relative h-28 w-full object-scale-down"
        style={styles}
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
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
