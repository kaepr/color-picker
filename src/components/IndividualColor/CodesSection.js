import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodesSection = ({ hexCode, rgbCode }) => {
  const [hexCopied, setHexCopied] = useState(false);
  const [rgbCopied, setRGBCopied] = useState(false);

  if (hexCopied) {
    setTimeout(() => {
      setHexCopied(false);
    }, 2000);
  }

  if (rgbCopied) {
    setTimeout(() => {
      setRGBCopied(false);
    }, 3000);
  }

  return (
    <div className="m-1 p-1">
      <CopyToClipboard text={hexCode} onCopy={() => setHexCopied(true)}>
        <div className="cursor-pointer">HEX {hexCode}</div>
      </CopyToClipboard>
      {hexCopied && (
        <div className="text-gray-400 text-xs"> Hex Code Copied ! </div>
      )}
      <CopyToClipboard text={rgbCode} onCopy={() => setRGBCopied(true)}>
        <div className="cursor-pointer">RGB {rgbCode}</div>
      </CopyToClipboard>
      {rgbCopied && (
        <div className="text-gray-400 text-xs"> RGB Code Copied ! </div>
      )}
    </div>
  );
};

export default CodesSection;
