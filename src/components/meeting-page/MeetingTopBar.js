"use client";
import brandIcon from '@/app/icon.png';
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaCopy } from 'react-icons/fa6';

export default function MeetingTopBar() {
  const params = useParams();

  return (
    <div className="bg-secondary px-4 py-2 rounded-lg">
      <div className="flex items-center gap-2">
        <Image src={brandIcon} alt="Brand Icon" className="w-[30px]" />
        <span className="font-medium">{params?.link}</span>
        <FaCopy className="text-primary text-2xl ml-2 cursor-pointer select-none" onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DOMAIN}/meeting/${params.link}`)} />
      </div>
    </div>
  );
};