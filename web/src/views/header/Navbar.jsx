import React from 'react'
import { PageContainer } from '../../components/shared'
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import NavigationHandler from '../../handlers/NavigationHandler';
import UserHandler from '../../handlers/UserHandler';

const ProfileIconsDetails = ({ user }) => {
  return (
    <Menu>
      <MenuHandler>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer ">
            <div className="flex items-center justify-center bg-white  rounded-full">
              <FaUserCircle className="text-4xl" />
            </div>
            <div className="flex flex-col truncate max-w-[150px]">
              <span className="text-xs font-semibold">{user?.name}</span>
              <span className="text-xs w-full truncate">
                {user?.email} hellosrij EHGOAH ohl
              </span>
            </div>
          </div>
        </div>
      </MenuHandler>
      <MenuList className="p-0 m-0 w-[200px] mt-3" placement="bottom-end">
        <a href="dashboard">
          <MenuItem className="px-4 py-2">Profile</MenuItem>
        </a>
      </MenuList>
    </Menu>
  );
};

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const { logoutHandler } = UserHandler();

  return (
    <nav className="bg-indigo-300 z-10 sticky top-0 px-2">
      <PageContainer>
        <div className="h-[50px] flex items-center justify-between">
          <div className="">hello</div>
          <div className="">
            {user?._id ? (
              <div className="flex items-center gap-3" title="logout">
                <ProfileIconsDetails user={user} />
                <div className="flex" onClick={logoutHandler}>
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
    </nav>
  );
}

export default Navbar