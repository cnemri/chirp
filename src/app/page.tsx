import Auth from "./_components/Auth";
import Feed from "./_components/Feed";
import CreatePostWizard from "./_components/CreatePostWizard";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
        <CreatePostWizard />
        <Auth />
        <Feed />
      </div>
    </main>
  );
}
