import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import errorImg from '../assets/404-error-page.gif';

const NotFoundPage = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-500 mt-5">
          404
          <br />
          Page not Found ...!!
        </h2>
        <Link href={"/"}>
          <button className="btn border border-black mt-5 text-3xl font-bold text-blue-500 mb-2">Go back Home</button>
        </Link>
        <Image src={errorImg} width={500} height={300} style={{
          margin: "auto",
        }} />
      </div>
    </div>
  );
};

export default NotFoundPage;