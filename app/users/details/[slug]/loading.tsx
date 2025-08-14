import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-100 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-40"></div>
            <div className="skeleton h-4 w-80"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
