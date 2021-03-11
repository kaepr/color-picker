const CodesSection = ({ hexCode, rgbCode }) => {
  // console.log("code = ", hexCode, rgbCode);

  return (
    <div className="m-1 p-1">
      <div alt="Click to copy to Clipboard">HEX {hexCode}</div>
      <div>RGB {rgbCode}</div>
    </div>
  );
};

export default CodesSection;
