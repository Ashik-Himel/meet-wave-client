import React from 'react';
import Image from "next/image";
import blankPage from '../../assets/blank-page.png'
import mic from '../../assets/mic.png'

const PreMeetingPage = () => {
  return (
    <section className='flex px-20 my-10 gap-28 items-center'>
      <div className='relative'>
        <Image src={blankPage} width={500}
          height={500} alt="Filter Section Image"  />
        <Image src={mic} width={100}
          height={100} alt="" className='absolute bottom-5 left-[200px]' />
      </div>
      <div className=' text-center flex flex-col items-center'>
        <h1 className='text-3xl font-normal mb-4'>Ready to Join Meeting?</h1>
        <button type="submit" className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Join Now</button>
      </div>
    </section>
  );
};

export default PreMeetingPage;