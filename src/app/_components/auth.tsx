"use client";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";

const Auth = () => {
  const user = useUser();
  return (
    <div className="flex border-b border-slate-400 p-4">
      {!user.isSignedIn && (
        <div className="flex justify-center">
          <SignInButton />
        </div>
      )}
      {!!user.isSignedIn && <SignOutButton />}
    </div>
  );
};

export default Auth;
