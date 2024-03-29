"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sectionImg from '@/assets/discussion-section-img.png';

export default function DiscussionSection() {
  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <section className="mt-12">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row gap-x-8 gap-y-4 justify-between md:items-center">
          <div data-aos="zoom-in-up" data-aos-duration="1500">
            <Image src={sectionImg} alt="Filter Section Image" className="w-full max-w-[500px] mx-auto block" />
          </div>
          <div className="w-full max-w-[450px]" data-aos="fade-down" data-aos-duration="1500">
            <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Communication with live discussions</h2>
            <p className="mb-6">Discuss directly with the team, you can send document files for the next level of collaboration.</p>
            <Link href='/create-meeting' className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};