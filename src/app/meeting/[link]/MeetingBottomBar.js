'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaRegHandPaper } from 'react-icons/fa';
import { FaGear, FaVideo, FaVideoSlash } from 'react-icons/fa6';
import { IoChatbubble } from 'react-icons/io5';
import { MdCallEnd, MdEmojiEmotions, MdOutlineScreenShare } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function MeetingBottomBar() {
  const router = useRouter();
  const params = useParams();
  const [micOpen, setMicOpen] = useState(true);
  const [videoOpen, setVideoOpen] = useState(true);
  const [screenShared, setScreenShared] = useState(false);
  const [handRaised, setHandRaised] = useState(false);

  const handleMeetingEnd = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/post-meeting?code=${params?.link}`);
  }

  return (
    <div className='bg-bgColor px-6 py-4 fixed bottom-0 left-0 right-0'>
      <div className="bg-secondary px-4 py-2 rounded-lg flex justify-between items-center gap-4">
        <div className='bg-primary p-2 rounded-md cursor-pointer select-none'>
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
          <div className={`p-2 rounded-full cursor-pointer select-none hidden sm:block ${screenShared ? 'bg-green-600' : 'bg-primary'}`} onClick={() => setScreenShared(!screenShared)}>
            <MdOutlineScreenShare />
          </div>
          <div className={`p-2 rounded-full cursor-pointer select-none hidden sm:block ${handRaised ? 'bg-green-600' : 'bg-primary'}`} onClick={() => setHandRaised(!handRaised)}>
            <FaRegHandPaper />
          </div>
          <div className='bg-primary p-2 rounded-full cursor-pointer select-none hidden sm:block'>
            <MdEmojiEmotions />
          </div>
          <div className='cursor-pointer select-none sm:hidden'>
            <BsThreeDotsVertical />
          </div>
          <div className='bg-red-500 p-2 rounded-full cursor-pointer select-none' onClick={handleMeetingEnd}>
            <MdCallEnd />
          </div>
        </div>
        <div className='bg-primary p-2 rounded-md cursor-pointer select-none'>
          <IoChatbubble />
        </div>
      </div>
    </div>
  );
};