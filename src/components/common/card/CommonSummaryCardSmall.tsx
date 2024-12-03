"use client";
import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const imageLoader = () => {
  return `https://placehold.co/400x400`;
};
const CommonSummaryCardSmall = ({
  borderColor,
  hoverBorderColor,
  Title,
  Subtitle,
  UpdatedDate,
  Quantity,
  Icon,
}) => {
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
            <div className="h-1/2">{Title}</div>
            <div className="">
              <span className="text-[12px] pb-2 block">{Subtitle}</span>
            </div>
          </div>
          <div
            className="flex h-2/4 text-5xl px-4 pt-2"
            style={{ color: isHovered ? hoverBorderColor : borderColor }}
          >
            {Quantity}
          </div>
        </div>
        <div className="flex items-center justify-center w-1/3">
          {/* Render the passed icon */}
          {Icon && (
            <Icon
              style={{
                fontSize: 70,
                color: isHovered ? hoverBorderColor : borderColor,
              }}
            />
          )}
        </div>
      </div>
      <div className="flex h-1/5 text-center justify-center text-xs items-center w-full mx-auto">
        Updated on {UpdatedDate}
      </div>
    </div>
  );
};

CommonSummaryCardSmall.propTypes = {
  borderColor: PropTypes.string.isRequired,
  hoverBorderColor: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Subtitle: PropTypes.string.isRequired,
  UpdatedDate: PropTypes.string.isRequired,
  Quantity: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default CommonSummaryCardSmall;
