import type { Metadata } from "next";
import React from "react";

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

const PostPage = ({ params }: Props) => {
  return (
    <main className="flex h-screen justify-center">
      <div>{params.id}</div>
    </main>
  );
};

export default PostPage;
