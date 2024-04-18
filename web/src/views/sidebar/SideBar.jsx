import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ProjectTopics, searchFields } from "../../json/Project";
import Contents from "./components/Contents";
import useDebounce from "../../hooks/useDebounce";
import SubContents from "./components/SubContents";
import nodataImage from "../../assets/images/nodata.png";

const SideBar = ({ onClickedItem , mobileView = false}) => {
  const [search, setSearch] = useState("");
  const [searchedValue, setSearchedValue] = useState();

  const searchHandler = (event) => {
    let { value } = event.target;
    handler(value);
  };

  const handler = useDebounce((value) => {
    console.log(value);
    setSearch(value);
    const res = searchFields.filter((item) =>
      item.name.toLowerCase().includes(value.trim().toLowerCase())
    );
    setSearchedValue(res);
  }, 1000);

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
                  onChange={searchHandler}
                  required
                />
              </div>
            </form>
          </div>

          {/* contents section */}

          {!search && (
            <div className="space-y-2">
              <h3 className="font-semibold p-2">Project Contents</h3>
              <Contents data={ProjectTopics} mobileView={mobileView} onClickedItem={onClickedItem} />
            </div>
          )}

          {search && (
            <div className="text-center">
              <h3 className="font-semibold p-2">Searched contents</h3>
              <div className="">
                {searchedValue.length > 0 ? (
                  <SubContents data={searchedValue} mobileView={mobileView} onClickedItem={onClickedItem} />
                ) : (
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <img
                      className="w-10 h-10 object-cover object-center"
                      src={nodataImage}
                      alt="no_data_found"
                    />
                    <h2 className=" text-sm">No data found</h2>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
