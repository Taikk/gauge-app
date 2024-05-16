import React from "react";

interface Props {
  value: number,
}

const INITIAL_VALUE_PERCENTAGE = 0;
const TRACK_SIZE_DEGREES = 270;
const TRACK_WIDTH_PX = 7;
const VIEW_BOX_SIZE_PX = 100;

const MajorTicks: React.FC<Props> = (props) => {
  const viewBox = `0 0 ${VIEW_BOX_SIZE_PX} ${VIEW_BOX_SIZE_PX}`;
  const radius = VIEW_BOX_SIZE_PX / 2 - TRACK_WIDTH_PX / 2;

  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const trackFillPercentage = TRACK_SIZE_DEGREES / 360;
  const trackDashOffset = circumference * (1 - trackFillPercentage);

  const valuePercentage = (props.value / 100) * trackFillPercentage;
  const valueDashOffset = circumference * (1 - valuePercentage);

  const cxy = VIEW_BOX_SIZE_PX * 0.5;
  const trackTransform = `rotate(${
    -(TRACK_SIZE_DEGREES / 2) - 90
  }, ${cxy}, ${cxy})`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} width="100" height="100">
      <circle
        fill="none"
        cx="50%"
        cy="50%"
        r={radius}
        stroke="white"
        strokeDasharray={dashArray}
        strokeDashoffset={trackDashOffset}
        strokeWidth={TRACK_WIDTH_PX}
        transform={trackTransform}
      />
      <circle
        fill="none"
        strokeLinecap="round"
        cx="50%"
        cy="50%"
        r={radius}
        stroke="gold"
        strokeDasharray={dashArray}
        strokeDashoffset={valueDashOffset}
        strokeWidth={TRACK_WIDTH_PX}
        transform={trackTransform}
      />
    </svg>
  );
}

export default MajorTicks
