import dayjs from "dayjs";
import Image from "next/image";
import type { RouterOutputs } from "~/trpc/shared";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

type PostWithUser = RouterOutputs["post"]["getAll"][number];

dayjs.extend(relativeTime);

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div className="flex gap-3 border-b border-slate-400 p-8">
      <Image
        src={author.imageUrl}
        alt="Profile picture"
        width={56}
        height={56}
        className="h-14 w-14 rounded-full"
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-300">
          <Link href={`/${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span>{dayjs(post.createdAt).fromNow()}</span>
          </Link>
        </div>
        <span className="text-xl">{post.content}</span>
      </div>
    </div>
  );
};

export default PostView;
