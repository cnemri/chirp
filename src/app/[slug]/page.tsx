/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Metadata } from "next";
import React from "react";
import { api } from "~/trpc/server";
import Layout from "../_components/Layout";
import Image from "next/image";
import ProfileFeed from "../_components/ProfileFeed";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  // read route params
  const slug = params.slug;

  return {
    title: `${slug}'s profile page`,
  };
}

const ProfilePage = async ({ params }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const user = await api.profile.getUserByUsername.query({
    username: params.slug,
  });

  if (!user) return <div>User not found</div>;

  return (
    <Layout>
      <div className="relative h-36 border-b border-slate-400 bg-slate-600">
        <Image
          src={user.imageUrl}
          width={128}
          height={128}
          alt="Profile pic"
          className="absolute -bottom-16 left-4 rounded-full border-4 border-black"
        />
      </div>
      <div className="h-20"></div>
      <div className="p-4 text-2xl font-bold">@{user.username}</div>
      <div className="w-full border-b border-slate-400"></div>
      <ProfileFeed userId={user.id} />
    </Layout>
  );
};

export default ProfilePage;
