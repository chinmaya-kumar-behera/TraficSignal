import React from "react";
import { THEME_COLOR } from "../../constant/color.constant";

const SectionHeading = ({ heading , showLevel = false }) => {
  return (
    <div className="flex flex-col items-center space-y-3 lg:space-y-5">
      <h1 className="font-playfair font-bold text-2xl lg:text-3xl">
        {heading}
      </h1>
      {showLevel && (
        <div
          className="w-[50px] lg:w-[100px] h-[3px] lg:h-[5px] rounded-md"
          style={{ background: THEME_COLOR }}
        />
      )}
    </div>
  );
};

export default SectionHeading;
