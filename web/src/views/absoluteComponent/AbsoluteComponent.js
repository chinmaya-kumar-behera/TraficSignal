import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AbsoluteComponent = () => {
  const [author, setAuthor] = useState(true);
  return (
    <React.Fragment>
      {author && (
        <div
          className="fixed flex justify-end bottom-5 right-2 h-fit w-[200px] cursor-pointer"
          title="author"
        >
          <div className="flex gap-1">
            <div className="backdrop-blur-md bg-gray-200 rounded-[30px] w-fit pr-2">
              <div className="flex gap-3 items-center p-2">
                <div className="min-h-10 w-10 min-w-10 h-10">
                  <img
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt="profile_image"
                    className="h-full w-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="w-fit flex flex-col max-w-[150px]">
                  <span className="text-sm font-semibold truncate">
                    Digbijayalaxmi Swain
                  </span>
                  <span className="text-xs truncate">
                    MCA Graduate, kiit bbsr
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-end">
                <button
                  onClick={() => setAuthor(false)}
                  className="p-1 bg-gray-200 rounded-full"
                >
                  <RxCross2 className="text-lg text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AbsoluteComponent;
