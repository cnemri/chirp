import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="flex h-screen min-h-screen justify-center">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
        {children}
      </div>
    </main>
  );
};

export default Layout;
