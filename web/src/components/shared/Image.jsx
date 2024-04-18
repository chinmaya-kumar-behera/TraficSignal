import React from 'react'

const Image = ({ image, className }) => {
    return (
      <div className={className}>
        <img
          className="w-full h-full object-cover object-center"
          src={Image}
          alt="hello_Image"
        />
      </div>
    );
};

export default Image