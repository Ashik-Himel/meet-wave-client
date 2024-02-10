"use client";
import brandIcon from '@/app/icon.png';
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa6';

export default function MeetingTopBar() {
  const params = useParams();
  const [showCopied, setShowCopied] = useState(false);

  const handleOnCopy = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DOMAIN}/meeting/${params.link}`);

    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false)
    }, 2000)
  }

  return (
    <div className='bg-bgColor px-6 py-4 fixed top-0 left-0 right-0'>
      <div className="bg-secondary px-4 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Image src={brandIcon} alt="Brand Icon" className="w-[30px]" />
          <span className="font-medium cursor-pointer select-none" onClick={handleOnCopy}>{params?.link}</span>
          <div>
            {
              showCopied ? <div className={`aspect-square bg-green-600 p-1 rounded-full flex justify-center items-center transition-opacity duration-300`}>
                <FaCheck />
              </div> : <FaCopy className={`text-primary text-2xl cursor-pointer select-none transition- duration-300`} onClick={handleOnCopy} />
            }
          </div>
          <span className={`bg-green-600 px-2 rounded-full text-sm ${showCopied ? 'block' : 'hidden'}`}>Copied!</span>
        </div>
      </div>
    </div>
  );
};