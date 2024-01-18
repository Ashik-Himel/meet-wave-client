"use client";
import Image from "next/image";
import Link from "next/link";
import brandIcon from '@/app/icon.png';
import {FaBars} from 'react-icons/fa';
import {FaXmark} from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [drawerShow, setDrawerShow] = useState(false);
  const drawerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = e => {
      if (barRef.current && !barRef.current?.contains(e.target)) {
        if (drawerRef.current && !drawerRef.current?.contains(e.target)) {
          setDrawerShow(false);
        }
      }
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  }, []);

  return (
    <header className="pt-6 pb-6">
      <div className="container">
        <nav className="flex justify-between items-center gap-6">
          <Link href='/' className="flex justify-center items-center gap-2">
            <Image src={brandIcon} alt="Brand Icon" className="w-[30px]" />
            <span className="text-2xl font-medium">Meet<span className="text-primary">Wave.</span></span>
          </Link>

          <ul className="font-medium flex flex-col lg:flex-row justify-center items-center gap-6 fixed lg:static top-0 bottom-0 w-4/5 max-w-[300px] lg:w-auto lg:max-w-none bg-secondary lg:bg-transparent text-xl lg:text-base transition-[right] duration-300 lg:transition-none z-50" style={drawerShow ? {right: '0'} : {right: '-350px'}} ref={drawerRef}>
            <FaXmark className="text-3xl text-primary absolute top-6 left-6 cursor-pointer select-none lg:hidden" onClick={() => setDrawerShow(false)} />
            <li>
              <Link href='/' onClick={() => setDrawerShow(false)}>Home</Link>
            </li>
            <li>
              <Link href='/create-meeting' onClick={() => setDrawerShow(false)}>Create a Meeting</Link>
            </li>
            <li>
              <Link href='/join-meeting' onClick={() => setDrawerShow(false)}>Join Meeting</Link>
            </li>

            <div className="flex justify-center items-center gap-4 lg:hidden">
              <Link href='/login' className="btn" onClick={() => setDrawerShow(false)}>Login</Link>
              <Link href='/sign-up' className="btn btn-primary" onClick={() => setDrawerShow(false)}>Sign up</Link>
            </div>
          </ul>

          <div className="flex justify-center items-center gap-2">
            <Link href='/login' className="btn btn-primary sm:from-secondary sm:to-secondary">Login</Link>
            <Link href='/sign-up' className="btn btn-primary hidden sm:inline-flex">Sign up</Link>
            <div className="text-2xl ml-2 cursor-pointer select-none lg:hidden" onClick={() => setDrawerShow(true)} ref={barRef}>
              <FaBars />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};