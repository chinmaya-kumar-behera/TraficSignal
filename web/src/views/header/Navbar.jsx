import React from 'react'
import { PageContainer } from '../../components/shared'
import { useSelector } from 'react-redux';
import { FaUser, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);

  return (
    <nav className="bg-indigo-300 z-10 sticky top-0 px-2">
      <PageContainer>
        <div className="h-[50px] flex items-center justify-between">
          <div className="">hello</div>
          <div className="flex items-center gap-2">
            {!user?._id ? (
              <>
                <div className="flex items-center justify-center bg-white  rounded-full">
                  <FaUserCircle className="text-4xl" />
                </div>
                <div className="flex flex-col cursor-pointer ">
                  <span className="text-xs font-semibold">{user?.name}</span>
                  <span className="text-xs">{user?.email}</span>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <a
                  href="register"
                  className="font-medium text-primary-600 dark:text-primary-500"
                >
                  <button className="text-white flex items-center px-4 py-1 border rounded-lg backdrop-filter hover:bg-blur">
                    <span>Login</span>
                  </button>
                </a>
                <a
                  href="register"
                  className="font-medium text-primary-600 dark:text-primary-500"
                >
                  <button className="text-white px-x py-1.5">signup</button>
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