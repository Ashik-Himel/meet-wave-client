import Link from 'next/link';
import React from 'react';

const ReviewSection = () => {
    return (
        <section className='mt-16'>
        <div className="container">
          <div className='w-full max-w-[650px] mx-auto text-center'>
            <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Here is our Valueable Review from User</h2>
            <Link href='/review' className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">See All review here</Link>
          
  
           
          </div>
        </div>
      </section>
    );
};

export default ReviewSection;