import React from 'react'

const Image = ({ image, className, alt }) => {
    return (
      <div className={className}>
        <img
          className="w-full h-full object-cover object-center mt-10"
          src={image}
          alt={alt}
        />
      </div>
    );
};

export default Image