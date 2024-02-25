"use client";
import Image from "next/image";
import Link from "next/link";
import brandIcon from '@/app/icon.png';
import { IoGridOutline } from 'react-icons/io5';
import { useEffect, useRef, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import useAllContext from "@/hooks/useAllContext";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase.config";
import Sidebar from "./Sidebar";
import useAxiosSecure from "@/hooks/useAxiosSecure";

export default function Header() {
  const { user, userRole, userLoaded } = useAllContext();
  const params = useParams();
  const pathName = usePathname();
  const [drawerShow, setDrawerShow] = useState(false);
  const [profileCardShow, setProfileCardShow] = useState(false);
  const drawerRef = useRef(null);
  const barRef = useRef(null);
  const profileBoxRef = useRef(null);
  const navImgRef = useRef(null);
  const axiosSecure = useAxiosSecure();

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

    axiosSecure('/logout')
      .then(() => {
        signOut(auth)
          .then(() => {
            toast.success('Logout Successful !!!');
          })
          .catch(error => toast.error(error.code))
      })
      .catch(error => toast.error(error.code))
  }

  if (params?.link || pathName.startsWith('/room/')) return null;

  return (
    <header className="py-6">
      <div className="container">
        <nav className="flex justify-between items-center gap-6 relative">
          <Link href='/' className="flex justify-center items-center gap-2">
            <Image src={brandIcon} alt="Brand Icon" className="w-[30px]" />
            <span className="text-2xl font-medium">Meet<span className="text-primary">Wave.</span></span>
          </Link>

          <ul className="font-medium hidden lg:flex flex-row justify-center items-center gap-6">
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/create-meeting'>Create a Meeting</Link>
            </li>
            <li>
              <Link href='/join-meeting'>Join Meeting</Link>
            </li>
            <li>
              <Link href='/about-us'>About-Us</Link>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-2">
            {
              userLoaded ? user ? <>
                <div className="flex justify-center items-center gap-2 cursor-pointer select-none relative" onClick={() => setProfileCardShow(!profileCardShow)} ref={navImgRef}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={user?.photoURL} alt="User's Photo" className="w-[40px] h-[40px] object-cover object-center rounded-full" />
                  <span className="hidden sm:block">{user?.displayName && user?.displayName?.split(' ')[0]}</span>
                  <span className={`w-6 h-6 bg-secondary rotate-45 absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 ${profileCardShow ? 'block' : 'hidden'}`}></span>
                </div>

                {/* Profile Card */}
                <div className={`absolute top-[calc(100%+1rem)] right-0 bg-secondary p-6 rounded-lg w-full max-w-[350px] text-center z-10 ${profileCardShow ? 'block' : 'hidden'}`} ref={profileBoxRef}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={user?.photoURL} alt="User's Photo" className="w-[60px] h-[60px] object-cover object-center rounded-full block mx-auto mb-4" />
                  <span className="block text-[18px] font-medium">{user?.displayName}</span>
                  <span className="block mb-4">{user?.email}</span>
                  <div className="flex justify-center items-center gap-2">
                    {
                      userRole === "admin" && <Link href='/dashboard/home' className="btn btn-primary" onClick={() => setProfileCardShow(false)}>Dashboard</Link>
                    }
                    <button type="button" className="btn btn-warning" onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </> : <>
                <Link href='/login' className="btn btn-primary sm:from-secondary sm:to-secondary">Login</Link>
                <Link href='/sign-up' className="btn btn-primary hidden sm:inline-flex">Sign up</Link>
              </> : <span className="loading loading-spinner loading-md"></span>
            }

            <div className="text-2xl ml-2 cursor-pointer select-none lg:hidden" onClick={() => setDrawerShow(!drawerShow)} ref={barRef}>
              <IoGridOutline />
            </div>
          </div>
        </nav>
        <Sidebar drawerShow={drawerShow} setDrawerShow={setDrawerShow} drawerRef={drawerRef} user={user} userRole={userRole} handleLogout={handleLogout}  />
      </div>
    </header>
  );
};