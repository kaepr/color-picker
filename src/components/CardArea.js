import { useEffect } from "react";
import { useSubscription } from "@apollo/client";

import { GET_ALL_COLORS } from "../gql/queries";
import AddColor from "./AddColor";
import ColorCard from "./IndividualColor/ColorCard";

function CardArea() {
  const { loading, error, data } = useSubscription(GET_ALL_COLORS);

  if (error) {
    return <div>Error. Try Again Later</div>;
  }

  let color_cards;

  if (data) {
    console.log("data = ", data);
    color_cards = data.color_palettes.map((c) => (
      <ColorCard key={c.id} props={c} />
    ));
  }

  return (
    <div className="rounded-lg bg-gray-100 relative font-semibold text-6xl p-4 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center align-center">
          <div className="p-4">Color Picker</div>
          {loading && <div>Loading ...</div>}
          <div className="mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {color_cards}
            <AddColor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArea;
