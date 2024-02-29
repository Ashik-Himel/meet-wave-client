"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import Link from 'next/link';
import React from 'react';

const ReviewSection = () => {
  useEffect(()=>{
    AOS.init({})
  },[])
    return (
        <section className='mt-16'>
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <div className='w-full max-w-[650px] mx-auto text-center'>
              <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Here is our Valuable Review from User</h2>
              <Link href='/reviews' className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">See Reviews</Link>         
            </div>
          </div>
        </section>
    );
};

export default ReviewSection;