import { useState } from "react";
import "./App.css";
import { Gauge } from "./components/Gauge";
import Slider from "./components/Slider";

function App() {
  const [angle, setAngle] = useState<number | undefined>(undefined);
  const [ticks, setTicks] = useState<number | undefined>(undefined);
  const [minorTicks, setMinorTicks] = useState<number | undefined>(undefined);
  const [scale, setScale] = useState<number | undefined>(undefined);

  return (
    <>
      <div className="container">
        <p>Gauge</p>
        <Gauge
          angle={angle}
          tickNum={ticks}
          scale={scale}
          interval={minorTicks}
        />
        <p>Needle Angle</p>
        <div className="slider">
          <Slider
            min={-120}
            max={120}
            onChange={function (newVal): void {
              setAngle(newVal);
            }}
          />
        </div>
        <input
          type="text"
          value={angle?.toFixed(0)}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value);
            setAngle(isNaN(newVal) ? undefined : newVal);
          }}
        />
        <p>Tick Number</p>
        <div className="slider">
          <Slider
            min={2}
            max={13}
            onChange={function (newVal): void {
              setTicks(Math.round(newVal));
            }}
          />
        </div>
        <input
          type="text"
          value={ticks?.toFixed(0)}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value);
            setTicks(isNaN(newVal) ? undefined : newVal);
          }}
        />

        {/* TICK INTERVAL */}
        <p>Tick Interval</p>
        <div className="slider">
          <Slider
            min={0}
            max={5}
            onChange={function (newVal): void {
              setMinorTicks(Math.round(newVal));
            }}
          />
        </div>
        <input
          type="text"
          value={minorTicks?.toFixed(0)}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value);
            setMinorTicks(isNaN(newVal) ? undefined : newVal);
          }}
        />

        <p>Scale</p>
        <div className="slider">
          <Slider
            min={0.5}
            max={2}
            onChange={function (newVal): void {
              setScale(newVal);
            }}
          />
        </div>
        <input
          type="text"
          value={scale?.toFixed(1)}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value);
            setScale(isNaN(newVal) ? undefined : newVal);
          }}
        />
      </div>
    </>
  );
}

export default App;
