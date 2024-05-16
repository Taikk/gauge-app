import React from "react";
import { useState } from "react";

interface Props {
  pointAngle: number;
}

export const Needle: React.FC<Props> = ({ pointAngle }) => {
  const [rotation, setRotation] = useState<number>(0);

  React.useEffect(() => {
    setRotation(pointAngle);
  }, [pointAngle]);

  return (
    <img
      src="/public/Needle.svg"
      alt="Needle"
      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "bottom center" }}
    />
  );
};
