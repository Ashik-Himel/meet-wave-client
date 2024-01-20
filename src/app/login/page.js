import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";


export const metadata = {
  title: 'Login',
  description: 'MeetWave is an online meeting platform which is containing video conference, audio conference, screen sharing, chat and messaging, meeting controlling and others feature to arrange a meeting online.',
}

export default function Page() {
  return (
    <main className="container">
      <div className="max-w-[470px] mx-auto mt-10 bg-secondary p-5 md:p-10 rounded-xl">
        <h2 className="text-3xl text-center">Sign In</h2>
        <form className="flex flex-col mt-5 gap-5">
          <div className="flex flex-col ">
            <label className="mb-2 ">Email</label>
            <input className="rounded py-[6px] px-3 text-black" type="email" name="email" placeholder="Type Your Email" />
          </div>
          <div className="flex flex-col ">
            <label className="mb-2 ">Password</label>
            <input className="rounded py-[6px] px-3 text-black" type="password" name="password" placeholder="Type Your Password" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" className="text-sm" />
              <p className="text-sm">Remember me</p>
            </div>
            <Link className="text-sm " href={'/'}>Forgot Password?</Link>
          </div>
          <input className="btn btn-primary " type="Submit" />
        </form>
        <p className="text-sm mt-4">New Here? <Link href={'/sign-up'} className="text-blue-300 underline">Create an Account</Link></p>

        <div class="flex justify-center">
          <div className="border-b-2 w-full h-7"> </div>
          <div class="divider border-cyan-600">OR</div>
          <div className="border-b-2 w-full h-7"> </div>
        </div>

        <div className="flex justify-between">
          <button className="flex gap-4 items-center bg-[#3b5998] px-4 py-2 rounded-sm font-semibold">
            <FaFacebookF className="text-xl"/>
            Facebook
          </button>
          <button className="flex gap-4 items-center bg-[#d34836] px-4 py-2 rounded-sm font-semibold">
            <FaGooglePlusG className="text-3xl " />
            Google
          </button>
        </div>

      </div>
    </main>
  );
};