import HeroSection from "@/components/others/HeroSection";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}
export default async function Home() {
  // const session = await getUser();
  // console.log(session)
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* {JSON.stringify(session)} */}

      <HeroSection />
    </main>
  );
}
