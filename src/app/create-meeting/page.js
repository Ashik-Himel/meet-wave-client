'use client';
import MeetingForm from "./MeetingForm";
import useAllContext from "@/hooks/useAllContext";
import { useRouter } from "next/navigation";
import { FaArrowRight } from 'react-icons/fa';
import LoadingPage from "../loading";
import { useEffect } from "react";


import AOS from "aos"
import "aos/dist/aos.css"

export default function Page() {
  const router = useRouter();
  const { user, userLoaded } = useAllContext();

  useEffect(() => {
    AOS.init({})
  }, [])

  if (!userLoaded) return <LoadingPage />;
  if (!user) return router.push('/login');

  return (
    <main>
      <section className="my-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 justify-between md:items-center">
            <div data-aos="fade-right" data-aos-duration="2000" className="w-full max-w-[415px]">
              <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Create meeting easily by completing the form!</h2>
              <p className="mb-6">Create a meeting by felling up this form. Then just share the meeting link to get started.</p>
              <label htmlFor="meeting-type" className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Fill up now <FaArrowRight /></label>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" >
              <MeetingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};