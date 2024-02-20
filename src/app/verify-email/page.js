"use client"
import React from 'react';
import useAllContext from '@/hooks/useAllContext';
import { useRouter } from 'next/navigation';
import { auth } from "@/configs/firebase.config";
import { sendEmailVerification } from 'firebase/auth';
import toast from 'react-hot-toast';

const page = () => {


    return (
        <div className='justify-center items-center flex '>
            <button onClick={handleVerifyEmail} className='btn btn-primary text-lg'>Send verification email</button>
        </div>
    );
};

export default page;