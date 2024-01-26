'use client';
import thankPic from "@/assets/thank-you.png";
import PostMeetingBtns from "@/components/post-meeting/PostMeetingBtns";
import useAllContext from "@/hooks/useAllContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";

const PostMeeting = () => {
  const router = useRouter();
  const {user, userLoaded} = useAllContext();

  if (!userLoaded) {
    return <LoadingPage />;
  }
  
  if (!user) {
    return router.push('/login');
  }

  return (
    <main className="mt-12" >
      <section className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto flex-1">
            <Image className="block w-full max-w-[500px] mx-auto" src={thankPic} alt="thankPic" ></Image>
          </div>
          <div className="w-full md:w-auto flex-1">
            <h1 className="text-2xl font-semibold text-center mb-4">The meeting is  closed</h1>
            <PostMeetingBtns />
          </div>
        </div>
      </section>
    </main>
    );
};

export default PostMeeting;