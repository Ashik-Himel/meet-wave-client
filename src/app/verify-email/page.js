"use client"
import React, { useState } from 'react';
import useAllContext from '@/hooks/useAllContext';
import { useRouter } from 'next/navigation';
import { auth } from "@/configs/firebase.config";
import { sendEmailVerification } from 'firebase/auth';
import toast from 'react-hot-toast';
import LoadingPage from '../loading';

const Page = () => {
  const router = useRouter();
  const { user, userLoaded } = useAllContext();
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  const handleVerifyEmail = () => {
    if(!auth.currentUser)  toast.error('Please register before send verification email');
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          toast.success('Please check email');
          setVerificationEmailSent(true);
          setInterval(() => {
            window.location.reload();
        }, 19000);
        })
        .catch((error) => toast.error(error.message));
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!userLoaded) {
    return <LoadingPage />;
  } else if (user?.emailVerified || !user ) {
    return router.push('/');
  }

  return (
    <div className='gap-5 justify-center items-center flex '>
      <button onClick={handleVerifyEmail} className='btn btn-primary text-lg'>Send verification email</button>
      {verificationEmailSent && (
        <button onClick={handleRefresh} className='btn btn-secondary border-neutral text-lg'>Refresh</button>
      )}
    </div>
  );
};

export default Page;
