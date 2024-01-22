"use client"
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_SECRET_KEY}`

import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaEye, FaEyeSlash } from "react-icons/fa";
import register from '@/assets/signUp.jpg';
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export default function Page() {
  const [show, setShow] = useState(true)
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // const inputFile = document.querySelector('input[type="file"]');
    // const photo = inputFile.files[0];
    // const formData = new FormData();
    // formData.append('image', photo);

    // try {
    //   const res = await axios.post('http://localhost:3000/', formData, {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   });

    //   console.log(res.data.data);
    //   // Handle the response data as needed
    // } catch (error) {
    //   console.error('Error during image upload:', error.message);
    //   // Handle the error appropriately, e.g., show an error message to the user
    // }

    // Call the NextAuth.js sign-in method
    const result = await signIn("credentials", {
      redirect: false,
      name,
      email,
      password,
    });

    if (!result.error) {
      // User signed in success and user redirect
      console.log("Sign-in successful");
    } else {
      console.error("Sign-in error:", result.error);
    }
  };

  return (
    <main className="container md:flex flex-row-reverse justify-between  ">
      <div className="flex justify-center mx-auto md:w-1/2 ">
        <Image src={register} alt="Brand Icon" className="" />
      </div>
      <div className="max-w-[470px] mx-auto mt-10 bg-secondary p-5 md:p-10 rounded-xl md:w-1/2 ">
        <h2 className="text-3xl text-center">Sign Up staging </h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-5">
          <div className="flex flex-col ">
            <label className="mb-2 ">Name</label>
            <input className="rounded py-[6px] px-3 text-black" type="name" name="name" placeholder="Type Your Name" />
          </div>
          <div className="flex flex-col ">
            <label className="mb-2 ">Email</label>
            <input className="rounded py-[6px] px-3 text-black" type="email" name="email" required placeholder="Type Your Email" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 ">Photo</label>
            <input className="   border bg-white     rounded py-[3px] px-3 text-black" type="file" name="photo" />
          </div>

          <div className="flex flex-col relative ">
            <label className="mb-2 ">Password</label>
            <span
              onClick={() => setShow(!show)}
              className="absolute right-5 top-6 cursor-pointer w-6"
            >
              {show ? <p><FaEyeSlash /></p> : <p><FaEye /></p>}
            </span>
            <input className="rounded py-[6px] px-3 text-black"
              type={show ? "password" : "text"}
              name="password"
              required
              placeholder="Type Your Password"
            />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" className="text-sm" />
            <p className="text-sm">Remember me</p>
          </div>
          <input className="btn btn-primary " type="Submit" />
        </form>
        <p className="text-sm mt-4">Already have an account? <Link href={'/login'} className="text-blue-300 underline">Sign in</Link></p>

        <div className="flex justify-center">
          <div className="border-b-2 w-full h-7"> </div>
          <div className="divider border-cyan-600">OR</div>
          <div className="border-b-2 w-full h-7"> </div>
        </div>

        <div className="flex justify-between">
          <button className="flex gap-4 items-center bg-[#3b5998] px-4 py-2 rounded-sm font-semibold">
            <FaFacebookF className="text-xl" />
            Facebook
          </button>
          <button onClick={() => signIn("google")} className="flex gap-4 items-center bg-[#d34836] px-4 py-2 rounded-sm font-semibold">
            <FaGooglePlusG className="text-3xl " />
            Google
          </button>
        </div>
      </div>
    </main>
  );
};