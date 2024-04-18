import React from "react";
import { CiSearch } from "react-icons/ci";
import { ProjectTopics } from "../../json/Project";
import Contents from "./components/Contents";

const SideBar = () => {
  return (
    <div className="min-w-[250px]">
      <div className="fixed w-[250px] h-[calc(100vh-60px)] top-30 border-r-2 pr-7 overflow-y-scroll no-scrollbar">
        <div className="w-full h-full py-3 space-y-3">
          {/* search input   */}
          <div className="sticky top-0">
            <form class="flex items-center max-w-lg mx-auto">
              <label for="voice-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="text-gray-700" />
                </div>
                <input
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 text-sm block w-full ps-10 p-2 outline-none shadow-sm "
                  placeholder="Quick Search"
                  required
                />
              </div>
            </form>
          </div>

          {/* contents section */}

          <div className="space-y-2">
            <h3 className="font-semibold p-2" >
              Project Contents
            </h3>
            <Contents data={ProjectTopics} />
          </div>
          {/* hello */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
