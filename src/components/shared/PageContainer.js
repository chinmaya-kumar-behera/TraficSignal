import React from "react";

const PageContainer = ({ id, children, className }) => {
  const style = `lg:max-w-6xl xl:max-w-7xl mx-auto ${className}`;
  return <div id={id} className={style}>{children}</div>;
};

export default PageContainer;
