import React from "react";
import Spinner from "./Spinner";

const LoadingContainer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default LoadingContainer;
