"use client";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";
import LoadingContainer from "./LoadingContainer";

const Auth = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <LoadingContainer />;
  }

  return (
    <div className="flex border-b border-slate-400 p-4">
      {!isSignedIn && (
        <div className="flex justify-center">
          <SignInButton />
        </div>
      )}
      {!!isSignedIn && <SignOutButton />}
    </div>
  );
};

export default Auth;
