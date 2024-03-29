"use client";
import Image from "next/image";
import Link from "next/link";
import brandIcon from '@/app/icon.png';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import { useParams, usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (!(pathname === '/' || pathname === '/reviews')) return null;
  
  return (
    <footer className="pt-20 pb-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <Link href='/' className="flex justify-center lg:justify-start items-center gap-2">
              <Image src={brandIcon} alt="Brand Icon" className="w-[30px]" />
              <span className="text-2xl font-medium">Meet<span className="text-primary">Wave.</span></span>
            </Link>

            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/create-meeting'>Create a Meeting</Link>
              </li>
              <li>
                <Link href='/join-meeting'>Join Meeting</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex justify-center lg:justify-end items-center gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary p-2 text-xl rounded-lg">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary p-2 text-xl rounded-lg">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary p-2 text-xl rounded-lg">
                <FaTwitter />
              </a>
            </div>
            <p className="text-sm opacity-60 text-center">Copyright &copy; {new Date().getFullYear()} - MeetWave. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};