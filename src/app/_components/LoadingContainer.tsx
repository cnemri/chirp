import React from "react";
import Spinner from "./spinner";

const LoadingContainer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default LoadingContainer;
