"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sectionImg from '@/assets/filter-section-img.png';

export default function FilterSection() {
  useEffect(() => {
    AOS.init({})
  }, [])
  
  return (
    <section className="mt-0 md:mt-4">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 justify-between md:items-center" data-aos="fade-down" data-aos-duration="2000">
          <div className="w-full max-w-[415px]">
            <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">More expressive with cute and fun filters</h2>
            <p className="mb-6">Use filters when collaborating with your team, make the atmosphere less tense and colder.</p>
            <Link href='/create-meeting' className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Explore Filter</Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Image src={sectionImg} alt="Filter Section Image" className="w-full max-w-[500px] mx-auto block" />
          </div>
        </div>
      </div>
    </section>
  );
};