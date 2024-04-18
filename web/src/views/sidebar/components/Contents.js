import React, { useEffect, useState } from "react";

const Contents = ({ data, mobileView, onClickedItem  }) => {
  const [hash, setHash] = useState(null);

  useEffect(() => {
    window.addEventListener("hashchange", function () {
      setHash(window.location.hash);
    });
  }, [hash]);

  const onClickHandler = () => {
    if (mobileView) onClickedItem();
  }

  return (
    <div className="">
      <ul>
        {data.map((topic) => {
          if (topic.hasSubTopics) {
            return (
              <div key={topic.id} className="mt-2 space-y-2 text-xs">
                <span className="font-bold p-2">{topic.name}</span>
                <div className="">
                  <Contents
                    data={topic.subTopics}
                    mobileView={mobileView}
                    onClickedItem={onClickedItem}
                  />
                </div>
              </div>
            );
          } else
            return (
              <a key={topic.id} href={`#${topic.id}`} onClick={onClickHandler}>
                <li
                  className="outline-none hover:bg-gray-200 hover:bg-opacity-60 text-xs"
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
            );
        })}
      </ul>
    </div>
  );
};

export default Contents;
