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
                // if(auth?.currentUser?.emailVerified){
                //     console.log('ok');
                //    return router.push('/')
                // }

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