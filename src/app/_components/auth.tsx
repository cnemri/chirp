"use client";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";

const Auth = () => {
  const user = useUser();
  return (
    <div>
      {!user.isSignedIn && <SignInButton />}
      {!!user.isSignedIn && <SignOutButton />}
    </div>
  );
};

export default Auth;
