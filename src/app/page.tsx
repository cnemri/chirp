import Feed from "./_components/Feed";
import CreatePostWizard from "./_components/CreatePostWizard";
import Auth from "./_components/Auth";
import Layout from "./_components/Layout";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Layout>
      <CreatePostWizard />
      <Auth />
      <Feed />
    </Layout>
  );
}
