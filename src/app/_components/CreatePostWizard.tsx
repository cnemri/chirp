"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import { api } from "~/trpc/react";

const CreatePostWizard = () => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const ctx = api.useUtils();
  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onSuccess: async () => {
      setInput("");
      await ctx.post.getAll.invalidate();
    },
  });

  if (!user) return null;

  return (
    <div className="flex w-full gap-3 p-3">
      <Image
        src={user.imageUrl}
        alt="Profile image"
        width={56}
        height={56}
        className="h-14 w-14 rounded-full"
      />
      <input
        placeholder="Type some emojis"
        className="grow bg-transparent px-3 outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        disabled={isPosting}
      />
      <button
        onClick={() => {
          mutate({ content: input });
        }}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePostWizard;
