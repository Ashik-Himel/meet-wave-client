"use client"
import React from 'react';
import useAllContext from '@/hooks/useAllContext';
import { useRouter } from 'next/navigation';
import { auth } from "@/configs/firebase.config";
import { sendEmailVerification } from 'firebase/auth';
import toast from 'react-hot-toast';
import LoadingPage from '../loading';

const page = () => {
    const router = useRouter();
    const { user, userLoaded } = useAllContext();
console.log(user?.emailVerified);

    const handleVerifyEmail = () => {
        if (auth.currentUser) {
             sendEmailVerification(auth.currentUser)
             .then(()=>{
                toast.success('Please check email')
                setInterval(() => {
                    window.location.reload(); // Reload the page every second
                }, 5000);
                setInterval(() => {
                    window.location.reload(); // Reload the page every second
                }, 10000);
                setInterval(() => {
                    window.location.reload(); // Reload the page every second
                }, 15000);
                setInterval(() => {
                    window.location.reload(); // Reload the page every second
                }, 20000);
                setInterval(() => {
                    window.location.reload(); // Reload the page every second
                }, 25000);
                setInterval(() => {
                    window.location.reload(); // Reload the page every second
                }, 30000);

             })
             .catch((error)=> toast.error(error.message))
           
        }

    }
    
  if (!userLoaded) {
    return <LoadingPage />;
  } else if (user.emailVerified) {
    return router.push('/');
  }


    return (
        <div className='justify-center items-center flex '>
            <button onClick={handleVerifyEmail} className='btn btn-primary text-lg'>Send verification email</button>
        </div>
    );
};

export default page;