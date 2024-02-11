'use client';
import thankPic from "@/assets/thank-you.png";
import useAllContext from "@/hooks/useAllContext";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingPage from "../loading";
import Link from "next/link";
import FeedbackModal from "./FeedbackModal";
import { useState } from "react";

const PostMeeting = () => {
  const router = useRouter();
  const [modalActive, setModalActive] = useState(false);
  const searchParams = useSearchParams();
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
            <div className="flex justify-center items-center gap-4">
              <Link href={`/pre-meeting?code=${searchParams.get('code')}`} className="btn btn-primary">Rejoin</Link>
              <Link href='/' className="btn btn-secondary">Return Home</Link>
            </div>
            <div className="text-center mt-4">
              <button type="button" className="text-primary font-medium" onClick={() => setModalActive(true)}>Send Feedback</button>
            </div>
          </div>
        </div>
        <FeedbackModal modalActive={modalActive} setModalActive={setModalActive} />
      </section>
    </main>
    );
};

export default PostMeeting;