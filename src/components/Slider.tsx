import React, { useState, useRef, MouseEvent } from "react";
import "./Slider.css";

interface SliderProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, onChange }) => {
  const [value, setValue] = useState(min);
  const [down, setDown] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setDown(true);

    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    setDown(false);

    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (down === true) {
      const slider = sliderRef.current;
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const ratio = offsetX / rect.width;
      const newValue = min + ratio * (max - min);

      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
    >
      <div className="slider-track"></div>
      <div
        className="slider-thumb"
        style={{ left: `${((value - min) / (max - min)) * 100}%` }}
      ></div>
    </div>
  );
};

export default Slider;
