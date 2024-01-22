'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaRegHandPaper } from 'react-icons/fa';
import { FaGear, FaVideo, FaVideoSlash } from 'react-icons/fa6';
import { IoPeople } from 'react-icons/io5';
import { MdCallEnd, MdEmojiEmotions, MdOutlineScreenShare } from 'react-icons/md';

export default function MeetingBottomBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [micOpen, setMicOpen] = useState(true);
  const [videoOpen, setVideoOpen] = useState(true);
  const [screenShared, setScreenShared] = useState(false);
  const [handRaised, setHandRaised] = useState(false);

  const handleMeetingEnd = () => {
    router.push(`https://meet-wave.vercel.app/post-meeting?code=${searchParams.get('code')}`);
  }

  return (
    <div className="bg-secondary px-4 py-2 rounded-lg flex justify-center sm:justify-between items-center gap-4">
      <div className='bg-primary p-2 rounded-md cursor-pointer select-none hidden sm:block'>
        <FaGear />
      </div>
      <div className='flex justify-center items-center gap-2 text-xl'>
        <div className={`p-2 rounded-full cursor-pointer select-none ${micOpen ? 'bg-primary' : 'bg-red-500'}`} onClick={() => setMicOpen(!micOpen)}>
          {
            micOpen ? <FaMicrophone /> : <FaMicrophoneSlash />
          }
        </div>
        <div className={`p-2 rounded-full cursor-pointer select-none ${videoOpen ? 'bg-primary' : 'bg-red-500'}`} onClick={() => setVideoOpen(!videoOpen)}>
          {
            videoOpen ? <FaVideo /> : <FaVideoSlash />
          }
        </div>
        <div className={`p-2 rounded-full cursor-pointer select-none ${screenShared ? 'bg-green-600' : 'bg-primary'}`} onClick={() => setScreenShared(!screenShared)}>
          <MdOutlineScreenShare />
        </div>
        <div className={`p-2 rounded-full cursor-pointer select-none ${handRaised ? 'bg-green-600' : 'bg-primary'}`} onClick={() => setHandRaised(!handRaised)}>
          <FaRegHandPaper />
        </div>
        <div className='bg-primary p-2 rounded-full cursor-pointer select-none'>
          <MdEmojiEmotions />
        </div>
        <div className='bg-red-500 p-2 rounded-full cursor-pointer select-none' onClick={handleMeetingEnd}>
          <MdCallEnd />
        </div>
      </div>
      <div className='bg-primary p-2 rounded-md cursor-pointer select-none hidden sm:block'>
        <IoPeople />
      </div>
    </div>
  );
};