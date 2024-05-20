import React from "react";

interface Props {
  startAngle: number;
  endAngle: number;
  numTicks: number;
  radius: number;
  wh: number;
  renderNumbers?: boolean;
  tickStartAngle: number;
  tickSize: number,
}

const Ticks: React.FC<Props> = ({
  startAngle,
  endAngle,
  numTicks,
  radius,
  wh,
  renderNumbers,
  tickStartAngle,
  tickSize,
}) => {
  const points = [];

  // Converting ticks to compensate for starting at 0 and changing degrees to radians

  numTicks = numTicks - 1;
  startAngle = startAngle * (Math.PI / 180);
  endAngle = endAngle * (Math.PI / 180);

  const angleStep = (endAngle - startAngle) / numTicks;
  for (let i = 0; i <= numTicks; i++) {
    const angle = startAngle + angleStep * i + tickStartAngle * (Math.PI / 180);
    const x = wh / 2 + radius * Math.cos(angle);
    const y = wh / 2 + radius * Math.sin(angle);
    points.push({ x, y, angle });
  }

  const newWidth = radius / tickSize;

  return (
    <g>
      <circle
        cx="50%"
        cy="50%"
        r={radius}
        fill="none"
      />
      {points.map((point, index) => (
        <React.Fragment>
          <rect
            key={index}
            x={point.x - 1}
            y={point.y - 2}
            width={newWidth}
            height="1"
            transform={`rotate(${point.angle * (180 / Math.PI) - 180} ${
              point.x
            } ${point.y})`}
            fill="#707070"
          />
          {renderNumbers && (
            <text
              fill="#FFFFFF"
              x={point.x + (radius / 3 - radius / 1.7) * Math.cos(point.angle)}
              y={point.y + (radius / 3 - radius / 1.7) * Math.sin(point.angle)}
              fontSize="7"
              textAnchor="middle" //Needed to center vertical and horizontal
              dominantBaseline="middle"
            >
              {index}
            </text>
          )}
        </React.Fragment>
      ))}
    </g>
  );
};

export default Ticks;
