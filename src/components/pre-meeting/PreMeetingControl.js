'use client';
import { useState } from 'react';
import {FaMicrophone, FaMicrophoneSlash} from 'react-icons/fa';
import {FaVideo, FaVideoSlash} from 'react-icons/fa6';

export default function PreMeetingControl() {
  const [micOpen, setMicOpen] = useState(true);
  const [videoOpen, setVideoOpen] = useState(true);

  return (
    <div className='flex justify-center items-center gap-2 text-xl absolute bottom-4 left-1/2 -translate-x-1/2'>
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
    </div>
  );
};