import Image from "next/image";
import sectionImg from '@/assets/banner-img.png';
import JoinMeetingForm from "@/components/join-meeting/JoinMeetingForm";

export default function Page() {
  return (
    <main>
      <section className="mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 justify-between md:items-center">
            <div className="w-full max-w-[415px]">
              <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Paste your meeting link and join now!</h2>
              <p className="mb-6">Past the meeting link below and click on the &apos;Join Now&apos; button to join in the meeting.</p>
              <JoinMeetingForm />
            </div>
            <div>
              <Image src={sectionImg} alt="Filter Section Image" className="w-full max-w-[500px] mx-auto block [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};