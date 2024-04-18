import React from "react";
import collegeLogo from "../../src/assets/images/college-logo.png";

const Intro = ({ id }) => {
  const textStyle = "text-xl lg:text-2xl text-gray-800";
  return (
    <div
      id="intro"
      className="bg-gradient-to-br from-indigo-400 to-white text-center py-10"
    >
      <div className="min-h-[100%] flex flex-col items-center justify-center gap-10">
        <div className="space-y-3">
          <span className="text-lg">A project report on</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-black">
            Intelligent Traffic Control System using Artificial Intelligence
          </h1>
        </div>
        <div className="px-4 lg:px-0">
          <p className={textStyle}>
            Submitted in partial fulfillment for the award of
            <br className="hidden lg:block" />
            Degree for
            <br className="hidden lg:block" />
            Master Of Computer Application
          </p>
        </div>

        <div className="flex flex-col-reverse justify-center gap-10 mt-4">
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Submitted By</p>
            <p className="text-base font-semibold text-black">
              Digbijayalaxmi Swain
            </p>
            <p className="text-sm text-gray-600">Roll-No-2270129</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Under the Guidance Of</p>
            <p className="text-base font-semibold text-black">
              Dr. Chinmaya Misra
            </p>
            <p className="text-sm text-gray-600">Associate Professor, SCA</p>
            <p className="text-sm text-gray-600">KIIT, Bhubaneswar</p>
            <p className="text-sm text-gray-600">
              School of Computer Application
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[200px]">
            <img
              src={collegeLogo}
              className="object-cover object-center h-full"
              alt="college_logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
