import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import CardBio from "~/components/CardBio";
import { CarouselDefault } from "~/components/Carrousel";
import Footer from "~/components/Footer";
import MainContent from "~/components/MainContent";
import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const getProfile = api.example.getProfile.useQuery();

  return (
    <>
      <Head>
        <title>Dev - Diego França</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="flex flex-col items-center gap-2">
          {getProfile.data?.map(item => (
              <CardBio profile={item} />
          ))}
          {/* <AuthShowcase /> */}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <MainContent />
        </div>
          <Footer />
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
