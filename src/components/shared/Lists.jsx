import React from "react";

const Lists = ({ list = [] }) => {
  return (
    <React.Fragment>
      <ul class="space-y-1 list-disc list-inside pl-5">
        {list.map((el, index) => (
          <li className="text-lg" key={index}>{el}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Lists;
