import React from 'react'

const Heading = ({children}) => {
  return (
    <div className="w-full font-bold text-lg lg:text-2xl">
      {children}
    </div>
  );
}

export default Heading