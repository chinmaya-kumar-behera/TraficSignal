import React, { useEffect, useState } from 'react'

const SubContents = ({ data, mobileView = false, onClickedItem }) => {
  const [hash, setHash] = useState(null);

  useEffect(() => {
    window.addEventListener("hashchange", function () {
      setHash(window.location.hash);
    });
  }, [hash]);

  const onClickHandler = () => {
    if (mobileView) onClickedItem();
  };

  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-1">
        {data.map((topic) => (
          <a key={topic.id} href={`#${topic.id}`} onClick={onClickHandler}>
            <li
              className="outline-none bg-blue-100 hover:bg-blue-100 hover:bg-opacity-60 text-xs rounded"
              title={topic.name}
            >
              <div
                className={`flex gap-2 p-2 ${
                  hash?.slice(1) === topic.id
                    ? "text-indigo-500 font-semibold bg-gray-200 "
                    : ""
                }`}
              >
                <span className={`truncate`}>{topic.name}</span>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SubContents