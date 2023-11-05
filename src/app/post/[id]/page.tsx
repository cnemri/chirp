import type { Metadata } from "next";
import React from "react";
import Layout from "~/app/_components/Layout";
import PostView from "~/app/_components/PostView";
import { api } from "~/trpc/server";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  // read route params
  const id = params.id;

  return {
    title: `Post ${id}`,
  };
}

const PostPage = async ({ params }: Props) => {
  const post = await api.post.getById.query({ id: parseInt(params.id) });
  if (!post) return <div>Post not found</div>;
  return (
    <Layout>
      <PostView {...post} />
    </Layout>
  );
};

export default PostPage;
