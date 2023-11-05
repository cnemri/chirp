"use client";

import React from "react";
import { api } from "~/trpc/react";
import LoadingContainer from "./LoadingContainer";
import PostView from "./PostView";

type Props = {
  userId: string;
};

const ProfileFeed = ({ userId }: Props) => {
  const { data: posts, isLoading } = api.post.getPostsByUserId.useQuery({
    userId: userId,
  });
  if (isLoading) return <LoadingContainer />;
  if (!posts || posts.length === 0) return <div>No posts found</div>;

  return (
    <div className="flex flex-col">
      {posts.map((fullPost) => {
        return <PostView key={fullPost.post.id} {...fullPost} />;
      })}
    </div>
  );
};

export default ProfileFeed;
