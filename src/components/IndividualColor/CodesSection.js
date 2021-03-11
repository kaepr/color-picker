const CodesSection = ({ hexCode, rgbCode }) => {
  console.log("code = ", hexCode, rgbCode);

  return (
    <div>
      <div>HEX = {hexCode}</div>
      <divs>RGB = {rgbCode}</divs>
    </div>
  );
};

export default CodesSection;
