import React from 'react'

const SubContents = ({ data }) => {
  return (
    <div className="">
      {data.map((topic) => (
        <a key={topic.id} href={`#${topic.id}`}>
          <li
            className="outline-none hover:bg-gray-200 hover:bg-opacity-60 text-xs"
            title={topic.name}
          >
            <div className="flex gap-2 p-2">
              <span className="text-semibold">{topic.key}.</span>
              <span className="truncate">{topic.name}</span>
            </div>
          </li>
        </a>
      ))}
    </div>
  );
};

export default SubContents