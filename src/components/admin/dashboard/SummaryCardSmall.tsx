"use client";
import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const imageLoader = () => {
  return `https://placehold.co/400x400`;
};
const SummaryCardSmall = ({ borderColor, hoverBorderColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-1/4 h-32 bg-white border-b-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform ease-in-out hover:scale-105`}
      style={{ borderBottomColor: isHovered ? hoverBorderColor : borderColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-4/5 flex-row">
        <div className="flex h-full flex-col w-2/3">
          <div className="flex-col pt-3 px-3 flex h-2/4 text-lg">
            <div className="h-1/2">On Route Vehicles</div>
            <div className="">
              <span className="text-[12px] pb-2 block">Total delivery</span>
            </div>
          </div>
          <div className="flex h-2/4 text-5xl px-4 pt-2" style={{ color: isHovered ? hoverBorderColor : borderColor }}>78</div>
        </div>
        <div className="flex items-center justify-center w-1/3">
          <Image
            loader={imageLoader}
            src="placeholder.png" // Dummy src value
            alt="placeholder image"
            width={75}
            height={75}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex h-1/5 text-center justify-center text-xs items-center w-full mx-auto">
        Updated on 2024/1/23
      </div>
    </div>
  );
};

SummaryCardSmall.propTypes = {
  borderColor: PropTypes.string.isRequired,
  hoverBorderColor: PropTypes.string.isRequired,
};

export default SummaryCardSmall;