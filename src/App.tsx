import { useState } from "react";
import "./App.css";
import { Gauge } from "./components/Gauge";
import Slider from "./components/Slider";
import { LinearGauge } from "./components/LinearGuage/LinearGauge";

function App() {
  const [angle, setAngle] = useState<number | undefined>(undefined);
  const [ticks, setTicks] = useState<number | undefined>(undefined);
  const [minorTicks, setMinorTicks] = useState<number | undefined>(undefined);
  const [scale, setScale] = useState<number | undefined>(undefined);
  const [newpercent, setNewPercent] = useState<number>(0);
  const [linearTicks, setLinearTicks] = useState<number>(0);
  const [interval, setInterval] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [fillPercent, setFillPercent] = useState<number>(0);

  return (
    <>
      <div className="gauge-container">
        <div className="radial-gauge">
          <p>Radial Gauge</p>
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

        <div className="linear-gauge">
          <p>Linear Gauge</p>
          <LinearGauge
            startPoint={0}
            majorTicks={linearTicks}
            minorTicksPerMajor={interval}
            gaugeWidth={size}
            percent={fillPercent}
          />
          <p>Ticks</p>
          <div className="slider">
            <Slider
              min={0}
              max={10}
              onChange={function (newVal): void {
                setLinearTicks(Math.round(newVal));
              }}
            />
          </div>
          <input
            type="bar-text"
            value={linearTicks?.toFixed(0)}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value);
              setLinearTicks(newVal);
            }}
          />

          <p>Interval</p>
          <div className="slider">
            <Slider
              min={0}
              max={10}
              onChange={function (newVal): void {
                setInterval(Math.round(newVal));
              }}
            />
          </div>
          <input
            type="bar-text"
            value={interval?.toFixed(0)}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value);
              setInterval(newVal);
            }}
          />

          <p>Gauge Size</p>
          <div className="slider">
            <Slider
              min={0}
              max={500}
              onChange={function (newVal): void {
                setSize(Math.round(newVal));
              }}
            />
          </div>
          <input
            type="bar-text"
            value={size?.toFixed(0)}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value);
              setSize(newVal);
            }}
          />

          <p>Percent</p>
          <div className="slider">
            <Slider
              min={0}
              max={100}
              onChange={function (newVal): void {
                setFillPercent(Math.round(newVal));
              }}
            />
          </div>
          <input
            type="bar-text"
            value={fillPercent?.toFixed(0)}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value);
              setFillPercent(newVal);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
