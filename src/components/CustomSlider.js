import React from 'react';

const CustomSlider = ({ value, onChange }) => {
  return (
    <div className="relative w-full flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full h-2 appearance-none bg-[#E0E0E0] rounded-full cursor-pointer slider"
      />
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between">
        {Array.from({ length: 11 }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              value >= index * 10 ? "bg-[#684FFF]" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        style={{ marginLeft: `${(value / 100) * 20.0625}rem` }}
      >
        <div className="text-[12px] font-semibold text-[#FFFFFF] bg-[#684FFF] px-2 py-1 rounded">
          {value}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
