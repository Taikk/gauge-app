import "./Guage.css";
import { Needle } from "./Needle";
import Ticks from "./Ticks/Ticks";

export function Gauge() {
  return (
    <>
      <div className="gauge">
        <svg
          viewBox="0 0 100 100"
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
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
          <circle className="svg-circle-background" />
          // Interior Circle
          <circle className="svg-circle-interior" />
        </svg>
        <div className="needle">
          <Needle />
        </div>
        <div className="ticks">
          <Ticks
            startAngle={-20}
            endAngle={220}
            numTicks={9}
            radius={95}
            wh={200}
          />
        </div>
        <img
          className="logo"
          src="/public/tektonux_v_lightOnDark@2x.png"
          alt="logo"
        />
      </div>
    </>
  );
}
