import MeetingBottomBar from "@/components/meeting-page/MeetingBottomBar";
import MeetingMiddleSection from "@/components/meeting-page/MeetingMiddleSection";
import MeetingTopBar from "@/components/meeting-page/MeetingTopBar";

export default function Page() {
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