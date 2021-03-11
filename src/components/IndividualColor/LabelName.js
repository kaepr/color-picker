import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { UPDATE_LABEL } from "../../gql/queries";

const LabelName = ({ name, id }) => {
  console.log("label = ", name, id);
  const [colorLabel, setColorLabel] = useState(name);

  const [updateLabel] = useMutation(UPDATE_LABEL);

  useEffect(() => {
    setColorLabel(name);
  }, [name]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name !== colorLabel) {
      console.log("new name: ", colorLabel);
      updateLabel({
        variables: {
          id,
          label_name: colorLabel
        }
      });
    }
  };

  return (
    <div className="font-light p-1 hover:border-black">
      <input
        className="appearance-none focus:outline-none focus:ring focus:border-blue-300 cursor-pointer border-none p-1 text-grey-darkest w-full bg-gray-100 mb-1"
        value={colorLabel}
        onChange={(e) => setColorLabel(e.target.value)}
        onFocus={(e) => submitHandler(e)}
        onBlur={(e) => submitHandler(e)}
        type="text"
      />
    </div>
  );
};

export default LabelName;
