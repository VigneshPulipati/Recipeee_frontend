import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-300">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-cyellow"></div>
      </div>
    </div>
  );
};

export default Spinner;
