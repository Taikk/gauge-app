import React from "react";

interface LinearGaugeProps {
  startPoint: number;
  majorTicks: number;
  minorTicksPerMajor: number;
  gaugeWidth: number;
  percent: number;
}

export const LinearGauge: React.FC<LinearGaugeProps> = ({
  startPoint = 0,
  majorTicks = 5,
  minorTicksPerMajor = 2,
  gaugeWidth = 250,
  percent = 50,
}) => {
  const calculateTickPositions = () => {
    const totalTicks = majorTicks * minorTicksPerMajor + 1;
    const tickPositions = [];
    const maxValue = 100;

    for (let i = 0; i < totalTicks; i++) {
      const tickValue =
        startPoint + ((maxValue - startPoint) / (totalTicks - 1)) * i;
      tickPositions.push(tickValue);
    }

    return tickPositions;
  };

  const renderMajorTicks = () => {
    const tickPositions = calculateTickPositions();

    return tickPositions.map((tick, index) => {
      if (index % minorTicksPerMajor === 0) {
        const x = `${(index / (tickPositions.length - 1)) * 100}%`;
        return (
          <g key={index}>
            <rect x={x} y="0" width="2" height="10" fill="black" />
            <text
              x={x}
              y="18"
              fontSize="10"
              textAnchor="middle"
              fill="darkblue"
            >
              {tick.toFixed(0)}
            </text>
          </g>
        );
      }
      return null;
    });
  };

  const renderMinorTicks = () => {
    const tickPositions = calculateTickPositions();

    return tickPositions.map((index) => {
      if (index % minorTicksPerMajor !== 0) {
        const x = `${(index / (tickPositions.length - 1)) * 100}%`;
        return (
          <rect key={index} x={x} y="0" width="1" height="5" fill="black" />
        );
      }
      return null;
    });
  };

  return (
    <svg className="linearGauge" width={gaugeWidth} height="20">
      <rect x="0" y="0" width="100%" height="20" fill="grey" stroke="black" />
      <rect
        x="0"
        y="0"
        width={`${percent}%`}
        height="20"
        fill="lightblue"
        style={{ transition: "all 0.5s ease-in-out" }}
      />
      <g className="majorTicksContainer">{renderMajorTicks()}</g>
      <g className="minorTicksContainer">{renderMinorTicks()}</g>
    </svg>
  );
};
