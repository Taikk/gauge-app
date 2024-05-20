import "./Guage.css";
import { Needle } from "./Needle";
import Ticks from "./Ticks/Ticks";

interface Prop {
  angle?: number;
  tickNum?: number;
  radius?: number;
  scale?: number;
}

export const Gauge: React.FC<Prop> = ({
  angle = 40,
  tickNum = 9,
  radius = 47,
  scale = 1,
}) => {
  return (
    <div className="gauge" style={{ width: '200px', height: '200px'}}>
      <svg
        viewBox="0 0 100 100"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{transform: `scale(${scale})`}}
      >
        <defs>
          <radialGradient
            id="Gradient"
            cx="0.5"
            cy="0.5"
            r="0.7"
            fx="0.5"
            fy="0.5"
          >
            <stop offset={"0%"} stopColor="var(--color-bg-center)" />
            <stop offset={"75%"} stopColor="var(--color-bg-middle)" />
            <stop offset={"90%"} stopColor="var(--color-bg-outer)" />
          </radialGradient>
        </defs>
        <defs>
          <radialGradient
            id="inner-gradient"
            cx="0.5"
            cy="0.5"
            r="0.7"
            fx="0.5"
            fy="0.5"
          >
            <stop offset={"30%"} stopColor="#2D2D2D" />
            <stop offset={"55%"} stopColor="#231F20" />
            <stop offset={"65%"} stopColor="#000000" />
          </radialGradient>
        </defs>
        // Background Circle
        <circle className="svg-circle-background" r={radius + 1} />
        // Interior Circle
        <circle className="svg-circle-interior" r={radius / 4.5} />
        <Ticks
          startAngle={-20}
          endAngle={220}
          numTicks={tickNum * 3 - 2}
          radius={radius}
          wh={100}
          tickStartAngle={-192}
          tickSize={9}
        />
        <Ticks
          startAngle={-20}
          endAngle={220}
          numTicks={tickNum}
          radius={radius}
          wh={100}
          renderNumbers
          tickStartAngle={-192}
          tickSize={6}
        />
        <Needle pointAngle={angle} />
        <image
          href="/public/tektonux_v_lightOnDark@2x.png"
          height={radius / 2.5}
          transform="translate(40 68)"
        />
      </svg>
    </div>
  );
};

export default Gauge;
