"use client";
import Image from "next/image";
import Link from "next/link";
import brandIcon from '@/app/icon.png';
import {FaBars} from 'react-icons/fa';
import {FaXmark} from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import useAllContext from "@/hooks/useAllContext";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase.config";

export default function Header() {
  const {user, userLoaded} = useAllContext();
  const params = useParams();
  const [drawerShow, setDrawerShow] = useState(false);
  const [profileCardShow, setProfileCardShow] = useState(false);
  const drawerRef = useRef(null);
  const barRef = useRef(null);
  const profileBoxRef = useRef(null);
  const navImgRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = e => {
      if (barRef.current && !barRef.current?.contains(e.target)) {
        if (drawerRef.current && !drawerRef.current?.contains(e.target)) {
          setDrawerShow(false);
        }
      }
      if (navImgRef.current && !navImgRef.current?.contains(e.target)) {
        if (profileBoxRef.current && !profileBoxRef.current?.contains(e.target)) {
          setProfileCardShow(false);
        }
      }
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  }, []);

  const handleLogout = () => {
    setProfileCardShow(false);

    signOut(auth)
      .then(() => {
        toast.success('Logout Successful !!!');
      })
      .catch(error => {
        toast.error(error.code);
      })
  }

  if (params?.link) return null;

  return (
    <header className="pt-6 pb-6">
      <div className="container">
        <nav className="flex justify-between items-center gap-6 relative">
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

            {
              !user && <div className="flex justify-center items-center gap-4 lg:hidden">
                <Link href='/login' className="btn" onClick={() => setDrawerShow(false)}>Login</Link>
                <Link href='/sign-up' className="btn btn-primary" onClick={() => setDrawerShow(false)}>Sign up</Link>
              </div>
            }
          </ul>

          <div className="flex justify-center items-center gap-2">
            {
              userLoaded ? user ? <>
                <div className="flex justify-center items-center gap-2 cursor-pointer select-none relative" onClick={() => setProfileCardShow(!profileCardShow)} ref={navImgRef}>
                  <Image src={user?.photoURL} alt="User's Photo" width={35} height={35} className="rounded-full" />
                  <span className="hidden sm:block">{user?.displayName.split(' ')[0]}</span>
                  <span className={`w-6 h-6 bg-secondary rotate-45 absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 ${profileCardShow ? 'block' : 'hidden'}`}></span>
                </div>
                <div className={`absolute top-[calc(100%+1rem)] right-0 bg-secondary p-6 rounded-lg w-full max-w-[350px] text-center ${profileCardShow ? 'block' : 'hidden'}`} ref={profileBoxRef}>
                  <Image src={user?.photoURL} alt="User's Photo" width={60} height={60} className="rounded-full block mx-auto mb-4" />
                  <span className="block text-[18px] font-medium">{user?.displayName}</span>
                  <span className="block mb-4">{user?.email}</span>
                  <button type="button" className="btn btn-warning" onClick={handleLogout}>Logout</button>
                </div>
              </> : <>
                <Link href='/login' className="btn btn-primary sm:from-secondary sm:to-secondary">Login</Link>
                <Link href='/sign-up' className="btn btn-primary hidden sm:inline-flex">Sign up</Link>
              </> : <span className="loading loading-spinner loading-md"></span>
            }

            <div className="text-2xl ml-2 cursor-pointer select-none lg:hidden" onClick={() => setDrawerShow(true)} ref={barRef}>
              <FaBars />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};