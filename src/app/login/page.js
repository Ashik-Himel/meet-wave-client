'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import loginImg from '@/assets/login.png';
import { FaGithub, FaGooglePlusG, FaEye, FaEyeSlash } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "@/configs/firebase.config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAllContext from "@/hooks/useAllContext";
import LoadingPage from "../loading";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function Page() {
  const router = useRouter();
  const { user, userLoaded } = useAllContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const axiosPublic = useAxiosPublic();
  const emailRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    axiosPublic(`user-status?email=${email}`)
      .then(res => {
        if (res.data?.status === 'disabled') {
          toast.error("Your account is disabled !!!");
        } else {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              axiosPublic.post('/users', { email }, { withCredentials: true })
                .then(() => toast.success('Login Successful !!!'))
                .catch(error => toast.error(error.message))
            })
            .catch((error) => toast.error(error.message))
        }
      })
  };

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        axiosPublic.post('/users', { name: userCredential.user?.displayName, email: userCredential.user?.email, photo: userCredential?.user?.photoURL }, { withCredentials: true })
          .then(() => toast.success("Login Successful!"))
          .catch(error => toast.error(error.message))
      })
      .catch(error => toast.error(error.message));
  }
  const githubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((userCredential) => {
        axiosPublic.post('/users', { name: userCredential.user?.displayName, email: userCredential.user?.email, photo: userCredential?.user?.photoURL }, { withCredentials: true })
          .then(() => toast.success("Login Successful!"))
          .catch(error => toast.error(error.message))
      })
      .catch(error => toast.error(error.message));
  }
  const handlePassOnChange = e => {
    const password = e.target.value;
    if (password) setShowEye(true);
    else setShowEye(false);
  }

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      return toast.error("Please provide an email")
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast.error("Please Provide a valid email")
      // return toast.error("Please Provide a valid email")
    }

    // send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => Swal.fire({
        title: "Please check your email",
        icon: "success"
      }))
      .catch(error => toast.error(error.message))


  }

  if (!userLoaded) {
    return <LoadingPage />;
  } else if (user) {
    return router.push('/');
  }

  return (
    <main>
      <section className="my-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 w-full md:w-auto">
              <div className="bg-secondary p-6 w-full max-w-[500px] mx-auto rounded-lg [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]">
                <h2 className="text-2xl font-medium text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                  <label className="font-medium block mb-2" htmlFor="email">Email</label>
                  <input
                    className="text-black w-full px-4 py-2 rounded-lg mb-4"
                    type="email" name="email" id="email"
                    placeholder="Enter your email"
                    ref={emailRef}
                    required />
                  <label className="font-medium block mb-2" htmlFor="password">Password</label>
                  <div className="relative mb-4 text-black">
                    <input className="w-full px-4 py-2 rounded-lg" onChange={handlePassOnChange} type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Enter your password" required />
                    <div className={`text-xl cursor-pointer select-none absolute right-4 top-1/2 -translate-y-1/2 ${showEye ? 'block' : 'hidden'}`} onClick={() => setShowPassword(!showPassword)}>
                      {
                        showPassword ? <FaEyeSlash /> : <FaEye />
                      }
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-2 mb-4">
                    <label className="text-sm flex gap-1 sm:gap-2 items-center cursor-pointer" htmlFor="remember">
                      <input type="checkbox" name="remember" id="remember" />
                      Remember me
                    </label>
                    <p onClick={handleResetPassword} className="text-sm cursor-pointer" >Forgot Password?</p>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                </form>

                <p className="text-sm">New here? <Link href='/sign-up' className="text-blue-400 font-medium">Create an account</Link></p>

                <div className="divider before:bg-white after:bg-white">OR</div>

                <div className="flex justify-evenly items-center gap-2">
                  <button className="flex justify-center items-center gap-2 bg-white text-black px-4 py-2 rounded-sm font-medium" onClick={githubLogin}>
                    <FaGithub className="text-xl" />
                    GitHub
                  </button>
                  <button className="flex justify-center items-center gap-2 bg-[#d34836] px-4 py-2 rounded-sm font-medium" onClick={googleLogin}>
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