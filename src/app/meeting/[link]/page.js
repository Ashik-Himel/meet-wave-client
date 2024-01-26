'use client';
import LoadingPage from "@/app/loading";
import MeetingBottomBar from "@/components/meeting-page/MeetingBottomBar";
import MeetingMiddleSection from "@/components/meeting-page/MeetingMiddleSection";
import MeetingTopBar from "@/components/meeting-page/MeetingTopBar";
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