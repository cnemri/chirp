import { useUser } from "@clerk/nextjs";
import Auth from "./_components/auth";
import Data from "./_components/Data";
import CreatePostWizard from "./_components/CreatePostWizard";

export default function Home() {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
        <CreatePostWizard />
        <Auth />
        <Data />
      </div>
    </main>
  );
}
