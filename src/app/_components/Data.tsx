"use client";

import React from "react";
import { api } from "~/trpc/react";
import PostView from "./PostView";
import LoadingContainer from "./LoadingContainer";

const Data = () => {
  const { data, isLoading: postsLoading } = api.post.getAll.useQuery();

  if (postsLoading) {
    return <LoadingContainer />;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="flex flex-col">
      {[...data].map((fullPost, index) => (
        <PostView key={index} {...fullPost} />
      ))}
    </div>
  );
};

export default Data;
