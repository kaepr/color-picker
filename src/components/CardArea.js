import { useSubscription } from "@apollo/client";

import { GET_ALL_COLORS } from "../gql/queries";
import AddColor from "./AddColor";
import ColorCard from "./ColorCard";

function CardArea() {
  const { loading, error, data } = useSubscription(GET_ALL_COLORS);
  console.log(data);

  if (error) {
    return <div>Error. Try Again Later</div>;
  }

  return (
    <div className="bg-gray-100 relative font-semibold text-6xl p-4 min-h-screen">
      Color Picker
      <br />
      {loading && <div>Loading ...</div>}
      <ColorCard />
      <br />
      <ColorCard />
      <AddColor />
    </div>
  );
}

export default CardArea;
