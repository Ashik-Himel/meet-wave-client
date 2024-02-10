'use client';
import LoadingPage from "@/app/loading";
import MeetingBottomBar from "./MeetingBottomBar";
import MeetingMiddleSection from "./MeetingMiddleSection";
import MeetingTopBar from "./MeetingTopBar";
import useAllContext from "@/hooks/useAllContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const {user, userLoaded} = useAllContext();

  if (!userLoaded) {
    return <LoadingPage />;
  }
  
  if (!user) {
    return router.push('/login');
  }

  return (
    <main>
      <section className="h-screen w-full max-w-[1536px] mx-auto">
        <MeetingTopBar />
        <MeetingMiddleSection />
        <MeetingBottomBar />
      </section>
    </main>
  );
};