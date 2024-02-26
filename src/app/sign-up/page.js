'use client';
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_SECRET_KEY}`;
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import signUpImg from '@/assets/sign-up.png';
import { FaGooglePlusG, FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "@/configs/firebase.config";
import toast from "react-hot-toast";
import axios from "axios";
import useAllContext from "@/hooks/useAllContext";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export default function Page() {
  const router = useRouter();
  const { user, userLoaded } = useAllContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const img = form.photo?.files[0];
    let formData = new FormData();
    formData.append('image', img);

    const res = await axios.post(image_hoisting_api, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (res.data?.success) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         
          updateProfile(auth.currentUser, { displayName, photoURL: res.data?.data?.url,  })
            .then(() => {
      
              axiosPublic.post('/users', {name: displayName, email, photo: res?.data?.data?.url , uid:userCredential.user.uid }, {withCredentials: true})
                .then(() => toast.success("Sign Up Successful !!!"))
                .catch(error => toast.error(error.code))
            })
            .catch((error) => toast.error(error.message))
        })
        .catch((error) => toast.error(error.message))
    }
  }

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
       
        axiosPublic.post('/users', {name: userCredential.user?.displayName, email: userCredential.user?.email, photo: userCredential?.user?.photoURL, uid:userCredential.user.uid }, {withCredentials: true})
          .then(() => toast.success("Login Successful!"))
          .catch(error => toast.error(error.message))
      })
      .catch(error => toast.error(error.message));
  }
  const githubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((userCredential) => {
        axiosPublic.post('/users', {name: userCredential.user?.displayName, email: userCredential.user?.email, photo: userCredential?.user?.photoURL, uid:userCredential.user.uid }, {withCredentials: true})
          .then(() => toast.success("Login Successful!"))
          .catch(error => toast.error(error.message))
      })
      .catch(error => toast.error(error.message));
  }
  const onPasswordChange = e => {
    const password = e.target.value;

    if (password) {
      setIsActive(false);
      setErrorMsg("");
      if (password) setShowEye(true)
      else setShowEye(false)

      if (password.length < 8) {
        setErrorMsg("Password must be at least 8 characters!");
        return;
      }
      else if (!/[A-Z]/.test(password)) {
        setErrorMsg("At least one uppercase character required!");
        return;
      }
      else if (!/[0-9]/.test(password)) {
        setErrorMsg("At least one number required!");
        return;
      }
      else if (!/[^A-Za-z0-9]/.test(password)) {
        return setErrorMsg("At least one special character required!");
      }
      setIsActive(true);
    }
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
            <div className="hidden md:block w-full md:w-auto flex-1">
              <Image src={signUpImg} alt="Sign Up Image" className="w-full max-w-[500px] mx-auto" />
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="bg-secondary p-6 w-full max-w-[500px] mx-auto rounded-lg [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]">
                <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                  <label className="font-medium block mb-2" htmlFor="name">Name</label>
                  <input className="text-black w-full px-4 py-2 rounded-lg mb-4" type="text" name="name" id="name" placeholder='Enter your name' required />

                  <label className="font-medium block mb-2" htmlFor="photo">Photo</label>
                  <input className="bg-white text-black w-full p-1.5 rounded-lg mb-4" type="file" name="photo" id="photo" accept='image/*' required />

                  <label className="font-medium block mb-2" htmlFor="email">Email</label>
                  <input className="text-black w-full px-4 py-2 rounded-lg mb-4" type="email" name="email" id="email" placeholder="Enter your email" required />

                  <label className="font-medium block mb-2" htmlFor="password">Password</label>
                  <div className="relative mb-4 text-black">
                    <input className="text-black w-full px-4 py-2 rounded-lg" onChange={onPasswordChange} type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Enter your password" required />
                    <div className={`text-xl cursor-pointer select-none absolute right-4 top-1/2 -translate-y-1/2 ${showEye ? 'block' : 'hidden'}`} onClick={() => setShowPassword(!showPassword)}>
                      {
                        showPassword ? <FaEyeSlash /> : <FaEye />
                      }
                    </div>
                  </div>
                  <p className="text-red-600 font-medium mb-4">{errorMsg}</p>

                  <button type="submit" className="btn btn-primary btn-block mb-4 disabled:bg-red-500 disabled:bg-opacity-40" disabled={!isActive}>Sign Up</button>
                </form>

                <p className="text-sm">Already have an account? <Link href='/login' className="text-blue-400 font-medium">Login now</Link></p>

                <div className="divider before:bg-white after:bg-white">OR</div>

                <div className="flex justify-evenly items-center gap-4">
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
          </div>
        </div>
      </section>
    </main>
  );
};