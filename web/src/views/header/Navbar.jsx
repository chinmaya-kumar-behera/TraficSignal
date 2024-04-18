import React, { useState } from 'react'
import { PageContainer } from '../../components/shared'
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import UserHandler from '../../handlers/UserHandler';
import NavigationHandler from '../../handlers/NavigationHandler';
import { MdOutlineEventNote, MdOutlineSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import SideBar from '../sidebar/SideBar';


const ProfileIconsDetails = ({ user }) => {
  const { navigateToDashBoard } = NavigationHandler();
  const { logoutHandler } = UserHandler();

  return (
    <Menu>
      <MenuHandler>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer ">
            <div className="flex flex-col truncate max-w-[150px] text-gray-700 font-semibold text-right">
              <span className="text-xs font-bold">{user?.name}</span>
              <span className="text-xs w-full truncate">
                {user?.email}
              </span>
            </div>
            <div className="flex items-center justify-center bg-white  rounded-full">
              <FaUserCircle className="text-4xl" />
            </div>
          </div>
        </div>
      </MenuHandler>
      <MenuList
        className="p-2 m-0 w-[200px] mt-3 font-semibold text-gray-700 space-y-2"
        placement="bottom-end"
      >
        <MenuItem
          className="flex items-center gap-3 px-4 py-2 text-left bg-gray-50 hover:bg-gray-100"
          onClick={navigateToDashBoard}
        >
          <MdOutlineEventNote className="text-xl" /> <span>Dashboard</span>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-3 px-4 py-2 text-left bg-red-500 text-white hover:bg-red-400"
          onClick={logoutHandler}
        >
          <AiOutlineLogout className="text-xl text-white" />
          <span>Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const { logoutHandler } = UserHandler();

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
      setSideBarOpen((prev) => !prev);
    };

  return (
    <nav className="w-full bg-indigo-300 z-20 sticky top-0 px-2">
      <PageContainer>
        <div className="h-[50px] flex items-center justify-between">
          <div className="">
            <div className="lg:hidden">
              <MdOutlineSegment className="text-3xl" onClick={toggleSideBar} />
            </div>
            <div className="hidden lg:block">
              <h2 className="text-xl font-bold text-white">
                Project On Traffic Managenent
              </h2>
            </div>
          </div>
          <div className="">
            {user?._id ? (
              <div className="flex items-center gap-3">
                <ProfileIconsDetails user={user} />
                <div
                  className="hidden lg:flex"
                  onClick={logoutHandler}
                  title="logout"
                >
                  <button className="p-1.5 bg-gray-200 bg-opacity-50 hover:bg-opacity-70 rounded-full group">
                    <AiOutlineLogout className="text-xl text-red-500 group-hover:text-red-400" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 text-gray-100">
                <a
                  href="register"
                  className="font-medium text-primary-600 dark:text-primary-500"
                >
                  <button
                    className=" flex items-center px-4 py-1 border rounded-lg backdrop-filter hover:bg-blur"
                    title="login"
                  >
                    <span>Login</span>
                  </button>
                </a>
                <a
                  href="register"
                  className="font-medium text-primary-600 dark:text-primary-500"
                >
                  <button className=" px-x py-1.5" title="signup">
                    signup
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </PageContainer>

      {/* overlay for side drawer */}
      {sideBarOpen && (
        <div
          className="absolute top-0 left-0 min-h-screen w-full bg-gray-900 bg-opacity-80 transition-all duration-500"
          onClick={toggleSideBar}
        />
      )}
      {/* side drawer for mobile screen */}
      <aside
        className={`${
          sideBarOpen ? "left-1/3" : "left-[100%]"
        } fixed top-0 w-2/3 transition-all duration-500 h-full bg-gradient-to-br from-blue-200 to-blue-100 z-20 p-3`}
      >
        <div className="relative">
          <div className="absolute -top-3 -left-2">
            <button className="p-1" onClick={toggleSideBar}>
              <RxCross2 className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mt-3">
              {/* <button
                className="text-blue-600"
                onClick={() => {
                  toggleSideBar();
                }}
              >
                Home
              </button> */}
              <SideBar mobileView={true} onClickedItem={toggleSideBar} />
            </div>
          </div>
        </div>
      </aside>
    </nav>
  );
}

export default Navbar