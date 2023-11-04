"use client";

import React from "react";
import { api } from "~/trpc/react";
import PostView from "./PostView";

const Data = () => {
  const { data, isLoading } = api.post.getAll.useQuery();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="flex flex-col">
      {[...data, ...data].map((fullPost, index) => (
        <PostView key={index} {...fullPost} />
      ))}
    </div>
  );
};

export default Data;
