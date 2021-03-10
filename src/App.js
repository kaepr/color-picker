import { hexGenerator, hexToRGB } from "./utils/colorGenerator";

import ColorCard from "./components/ColorCard";

function App() {
  const hexCode = hexGenerator();
  console.log(hexCode);
  console.log(hexToRGB(hexCode));

  let styles = {
    backgroundColor: hexCode,
  };

  return (
    <div className="bg-gray-50 h-screen absolute w-full">
      <div className="mt-10 mr-20 ml-20 mb-10">
        <div className="bg-gray-100 relative font-semibold text-6xl p-4 min-h-screen">
          Color Picker
          <br />
          <ColorCard />
          <br />
          <ColorCard />
        </div>
      </div>
    </div>
  );
}

export default App;
