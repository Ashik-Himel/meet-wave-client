import Image from "next/image";
import Link from "next/link";
import brandIcon from '@/app/icon.png';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pt-8 pb-6">
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
                <Link href='/create'>Create Meeting</Link>
              </li>
              <li>
                <Link href='/join'>Join Now</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex justify-center lg:justify-end items-center gap-4">
              <a href="https://www.facebook.com/" target="_blank" className="inline-block bg-secondary p-2 text-xl rounded-lg">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="inline-block bg-secondary p-2 text-xl rounded-lg">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com/" target="_blank" className="inline-block bg-secondary p-2 text-xl rounded-lg">
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