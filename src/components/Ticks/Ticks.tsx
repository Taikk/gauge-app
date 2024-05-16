interface Props {
  startAngle: number;
  endAngle: number;
  numTicks: number;
  radius: number;
  wh: number,
}

const Ticks: React.FC<Props> = ({ startAngle, endAngle, numTicks, radius, wh }) => {
  const points = [];

  // Converting ticks to compensate for starting at 0 and changing degrees to radians

  numTicks = numTicks - 1;
  startAngle = startAngle * (Math.PI / 180);
  endAngle = endAngle * (Math.PI / 180);

  const angleStep = (endAngle - startAngle) / numTicks;
  for (let i = 0; i <= numTicks; i++) {
    const angle = startAngle + angleStep * i + 21.8;
    const x = (wh / 2) + radius * Math.cos(angle);
    const y = (wh / 2) + radius * Math.sin(angle);
    points.push({ x, y, angle });
  }

  return (
    <div>
      <svg width={wh} height={wh}>
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="#707070"
          strokeWidth={3}
        />
        {points.map((point, index) => (
          <>
            <rect
              key={index}
              x={point.x - 1}
              y={point.y - 2}
              width={radius / 6}
              height="2"
              transform={`rotate(${point.angle * (180 / Math.PI) - 180} ${
                point.x
              } ${point.y})`}
              fill="#707070"
            />
            <text
              fill="#FFFFFF"
              x={point.x + (radius / 3 - (radius / 1.7)) * Math.cos(point.angle)}
              y={point.y + (radius / 3 - (radius / 1.7)) * Math.sin(point.angle)}
              fontSize="10"
              textAnchor="middle" //Needed to center vertical and horizontal
              dominantBaseline="middle"
            >
              {index}
            </text>
          </>
        ))}
      </svg>
    </div>
  );
};

export default Ticks;
