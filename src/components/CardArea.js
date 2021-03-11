import { useSubscription } from "@apollo/client";

import { GET_ALL_COLORS } from "../gql/queries";
import AddColor from "./AddColor";
import ColorCard from "./ColorCard";

function CardArea() {
  const { loading, error, data } = useSubscription(GET_ALL_COLORS);

  if (error) {
    return <div>Error. Try Again Later</div>;
  }

  let color_cards;

  if (data) {
    color_cards = data.color_palettes.map((c) => <ColorCard props={c} />);
  }

  return (
    <div className="bg-gray-100 relative font-semibold text-6xl p-4 min-h-screen">
      Color Picker
      <br />
      {loading && <div>Loading ...</div>}
      {color_cards}
      <AddColor />
    </div>
  );
}

export default CardArea;
