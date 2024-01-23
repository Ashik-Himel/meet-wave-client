import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import loginImg from '@/assets/login.png';
import LoginForm from "@/components/login/LoginForm";

export default function Page() {
  return (
    <main>
      <section className="mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 w-full md:w-auto">
              <div className="bg-secondary p-6 w-full max-w-[500px] mx-auto rounded-lg [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]">
                <h2 className="text-2xl font-medium text-center mb-4">Login</h2>
                <LoginForm />

                <p className="text-sm">New here? <Link href='/sign-up' className="text-blue-400 font-medium">Create an account</Link></p>

                <div className="divider before:bg-white after:bg-white">OR</div>

                <div className="flex justify-evenly items-center gap-2">
                  <button className="flex justify-center items-center gap-0.5 bg-[#3b5998] px-4 py-2 rounded-sm font-medium">
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
            <div className="hidden md:block w-full md:w-auto flex-1">
              <Image src={loginImg} alt="Login Image" className="w-full max-w-[500px] mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};