import React from 'react'
import { PageContainer } from '../../components/shared'

const Navbar = () => {
  return (
    <nav className="bg-indigo-300 z-10 sticky top-0">
      <PageContainer>
        <div className="h-[50px] flex items-center justify-between">
          <div className="">hello</div>
          <div className="flex items-center gap-2">
            <div className="h-[35px] w-[35px] bg-gray-300 rounded-full"></div>
            <div className="flex flex-col">
              <span className='text-xs font-semibold'>Chinmaya Kumar</span>
              <span className='text-xs'>chinu@gmail.com</span>
            </div>
          </div>
        </div>  
      </PageContainer>
    </nav>
  );
}

export default Navbar