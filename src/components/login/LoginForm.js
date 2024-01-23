'use client';
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="font-medium block mb-2" htmlFor="email">Email</label>
      <input className="text-black w-full px-4 py-2 rounded-lg mb-4" type="email" name="email" id="email" placeholder="Enter your email" required />
      <label className="font-medium block mb-2" htmlFor="password">Password</label>
      <div className="relative mb-4 text-black">
        <input className="w-full px-4 py-2 rounded-lg" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Enter your password" required />
        <div className="text-xl cursor-pointer select-none absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
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
        <Link className="text-sm" href='/'>Forgot Password?</Link>
      </div>
      <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
    </form>
  );
};