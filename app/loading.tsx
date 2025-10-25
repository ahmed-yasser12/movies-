import React from "react";

function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold animate-pulse text-blue-500">
          Loading  ........
        </p>
      </div>
    </>
  );
}

export default Loading;
