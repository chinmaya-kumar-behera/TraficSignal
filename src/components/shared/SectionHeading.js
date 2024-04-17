import React from "react";
import { THEME_COLOR } from "../../constant/color.constant";

const SectionHeading = ({ heading }) => {
  return (
    <div className="flex flex-col items-start space-y-3 lg:space-y-5">
      <h1 className="font-playfair font-bold text-2xl lg:text-4xl">{heading}</h1>
      <div
        className="w-[50px] lg:w-[100px] h-[3px] lg:h-[5px] rounded-md"
        style={{ background: THEME_COLOR }}
      />
    </div>
  );
};

export default SectionHeading;
