'use client';
import Image from "next/image";
import sectionImg from '@/assets/banner-img.png';
import JoinMeetingForm from "./JoinMeetingForm";
import { useRouter } from "next/navigation";
import useAllContext from "@/hooks/useAllContext";
import LoadingPage from "../loading";
import { useEffect, useState } from "react";

import AOS from "aos"
import "aos/dist/aos.css"

export default function Page() {
  const router = useRouter();
  const { user, userLoaded } = useAllContext();
  // const [roomID, setRoomID] = useState('');

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const newRoomID = generateRandomString(10);
    // setRoomID(newRoomID);
    console.log(newRoomID);
    router.push(`/room/${newRoomID}`);
  };
  useEffect(() => {
    AOS.init({})
}, [])

  if (!userLoaded) {
    return <LoadingPage />;
  }

  if (!user) {
    return router.push('/login');
  }

  return (
    <main>
      <section className="my-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 justify-between md:items-center">
            <div data-aos="fade-right" data-aos-duration="2000"  className="w-full max-w-[415px]">
              <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Paste your meeting link and join now!</h2>
              <p className="mb-6">Past the meeting link below and click on the &apos;Join Now&apos; button to join in the meeting.</p>
              {/* <JoinMeetingForm /> */}
              <form onSubmit={handleInputSubmit} className="w-full max-w-[350px] flex justify-start gap-2">
                {/* <input type="text" value={roomID} onChange={e => setRoomID(e.target.value)} className="w-full px-4 py-2 rounded-lg text-black" placeholder="Enter the room code" required /> */}
                <button type="submit" className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Create Meeting</button>
              </form>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" >
              <Image src={sectionImg} alt="Filter Section Image" className="w-full max-w-[500px] mx-auto block [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};