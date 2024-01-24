import React from 'react';
import loadingImg from '../assets/loading.gif';
import Image from 'next/image';

const LoadingPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-blue-500 text-center'>Loading....!</h1>
      <Image src={loadingImg} width={500} height={300} style={{
        margin: "auto",
      }} />
    </div>
  );
};

export default LoadingPage;