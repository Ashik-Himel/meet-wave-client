'use client';
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
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
      // const res = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/`, formData, {
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
    <form onSubmit={handleSubmit}>
      <label className="font-medium block mb-2" htmlFor="name">Name</label>
      <input className="w-full px-4 py-2 rounded-lg mb-4" type="text" name="name" id="name" placeholder='Enter your name' required />

      <label className="font-medium block mb-2" htmlFor="photo">Photo</label>
      <input className="bg-white text-black w-full p-1.5 rounded-lg mb-4" type="file" name="photo" id="photo" accept='image/*' required />

      <label className="font-medium block mb-2" htmlFor="email">Email</label>
      <input className="w-full px-4 py-2 rounded-lg mb-4" type="email" name="email" id="email" placeholder="Enter your email" required />

      <label className="font-medium block mb-2" htmlFor="password">Password</label>
      <div className="relative mb-4 text-black">
        <input className="w-full px-4 py-2 rounded-lg" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Enter your password" required />
        <div className="text-xl cursor-pointer select-none absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEyeSlash /> : <FaEye />
          }
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>
    </form>
  );
};