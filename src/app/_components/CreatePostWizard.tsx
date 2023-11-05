"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/trpc/react";
import LoadingContainer from "./LoadingContainer";

const CreatePostWizard = () => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const ctx = api.useUtils();
  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onSuccess: async () => {
      await ctx.post.getAll.invalidate();
      toast.success("Created post successfully!");
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error("Failed to create post. Try again later.");
      }
    },
    onSettled: () => {
      setInput("");
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (input !== "") {
              mutate({ content: input });
            }
          }
        }}
      />
      {input !== "" && !isPosting && (
        <button
          onClick={() => {
            mutate({ content: input });
          }}
          disabled={isPosting}
        >
          Post
        </button>
      )}
      {isPosting && (
        <div className="flex items-center justify-center text-white">
          <LoadingContainer />
        </div>
      )}
    </div>
  );
};

export default CreatePostWizard;
