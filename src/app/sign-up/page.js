const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_SECRET_KEY}`

import signUpImg from '@/assets/sign-up.png';
import SignUpForm from '@/components/sign-up/SignUpForm';
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

export default function Page() {
  return (
    <main>
      <section className="mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="hidden md:block w-full md:w-auto flex-1">
              <Image src={signUpImg} alt="Sign Up Image" className="w-full max-w-[400px] mx-auto" />
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="bg-secondary p-6 w-full max-w-[400px] mx-auto rounded-lg [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]">
                <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
                <SignUpForm />

                <p className="text-sm">Already have an account? <Link href='/login' className="text-blue-400 underline font-medium">Login now</Link></p>

                <div className="divider before:bg-white after:bg-white">OR</div>

                <div className="flex justify-evenly items-center gap-4">
                  <button className="flex justify-center items-center gap-2 bg-[#3b5998] px-4 py-2 rounded-sm font-medium">
                    <FaFacebookF className="text-xl" />
                    Facebook
                  </button>
                  <button className="flex justify-center items-center gap-2 bg-[#d34836] px-4 py-2 rounded-sm font-medium">
                    <FaGooglePlusG className="text-2xl" />
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};