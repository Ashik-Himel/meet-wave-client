import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import register from '@/assets/signUp.jpg';
export const metadata = {
  title: 'Sign up',
  description: 'MeetWave is an online meeting platform which is containing video conference, audio conference, screen sharing, chat and messaging, meeting controlling and others feature to arrange a meeting online.',
}

export default function Page() {
  return (
    <main className="container md:flex flex-row-reverse justify-between  ">
      <div className="flex justify-center mx-auto md:w-1/2 ">
        <Image src={register} alt="Brand Icon" className="" />
      </div>
      <div className="max-w-[470px] mx-auto mt-10 bg-secondary p-5 md:p-10 rounded-xl md:w-1/2 ">
        <h2 className="text-3xl text-center">Sign Up Now</h2>
        <form className="flex flex-col mt-5 gap-5">
          <div className="flex flex-col ">
            <label className="mb-2 ">Name</label>
            <input className="rounded py-[6px] px-3 text-black" type="name" name="name" placeholder="Type Your Name" />
          </div>
          <div className="flex flex-col ">
            <label className="mb-2 ">Email</label>
            <input className="rounded py-[6px] px-3 text-black" type="email" name="email" placeholder="Type Your Email" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 ">Photo</label>
            <input className="   border bg-white     rounded py-[3px] px-3 text-black" type="file" name="photo" />
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
        <p className="text-sm mt-4">Already have an account? <Link href={'/login'} className="text-blue-300 underline">Sign in</Link></p>

        <div class="flex justify-center">
          <div className="border-b-2 w-full h-7"> </div>
          <div class="divider border-cyan-600">OR</div>
          <div className="border-b-2 w-full h-7"> </div>
        </div>

        <div className="flex justify-between">
          <button className="flex gap-4 items-center bg-[#3b5998] px-4 py-2 rounded-sm font-semibold">
            <FaFacebookF className="text-xl" />
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

