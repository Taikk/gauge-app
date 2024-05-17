import React from "react";
import { useState } from "react";

interface Props {
  pointAngle: number;
}

export const Needle: React.FC<Props> = ({ pointAngle }) => {
  const [rotation, setRotation] = useState<number>();

  React.useEffect(() => {
    setRotation(pointAngle);
  }, [pointAngle]);

  return (
    <image
      href="/public/Needle.svg"
      style={{
        transformOrigin: "50% 50%",
        transform: `rotate(${rotation}deg) translate(49px, 6px)`,
      }}
      height={55}
    />
  );
};
