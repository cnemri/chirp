import type { GetStaticProps, Metadata } from "next";
import React from "react";
import { api } from "~/trpc/server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { db } from "~/server/db";
import superjson from "superjson";

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

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { db, currentUserId: null, headers: null },
    transformer: superjson,
  });

  const slug = context.params?.slug;
  if (typeof slug !== "string") {
    throw new Error("Expected username to be string");
  }

  await ssg.profile.getUserByUsername.prefetch({ username: slug });

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
};

const ProfilePage = async ({ params }: Props) => {
  const user = await api.profile.getUserByUsername.query({
    username: params.slug,
  });

  if (!user) return <div>User not found</div>;

  return (
    <main className="flex h-screen justify-center">
      <div>@{user.username}</div>
    </main>
  );
};

export default ProfilePage;
