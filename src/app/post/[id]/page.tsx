import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <main className="flex h-screen justify-center">
      <div>{params.id}</div>
    </main>
  );
};

export default page;
