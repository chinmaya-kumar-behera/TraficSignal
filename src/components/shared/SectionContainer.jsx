import React from "react";
import SectionHeading from "./SectionHeading";

const SectionContainer = ({ heading, children }) => {
  return (
    <section className="px-2 lg:px-0 space-y-5 lg:space-y-10 py-10 lg:py-20">
      <SectionHeading heading={heading} />
      <div className="space-y-5">{children}</div>
    </section>
  );
};

export default SectionContainer;
