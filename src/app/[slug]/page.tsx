import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <main className="flex h-screen justify-center">
      <div>@{params.slug}</div>
    </main>
  );
};

export default page;
