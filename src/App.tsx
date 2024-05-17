import { useState } from "react";
import "./App.css";
import { Gauge } from "./components/Gauge";
import Slider from "./components/Slider";

function App() {
  const [angle, setAngle] = useState<number | undefined>(undefined);
  const [ticks, setTicks] = useState<number | undefined>(undefined);

  return (
    <>
      <Gauge angle={angle} tickNum={ticks} />
      <div className="slider">
        <Slider
          min={-120}
          max={120}
          onChange={function (newVal): void {
            setAngle(newVal);
          }}
        />
      </div>
      <div className="text">{angle?.toFixed(0)}</div>

      <div className="slider">
        <Slider
          min={0}
          max={13}
          onChange={function (newVal): void {
            setTicks(Math.round(newVal));
          }}
        />
      </div>
      <div className="text">{ticks?.toFixed(0)}</div>
    </>
  );
}

export default App;
