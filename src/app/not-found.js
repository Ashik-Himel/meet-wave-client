import Image from 'next/image';
import Link from 'next/link';
import errorImg from '@/assets/404-img.png';

const NotFoundPage = () => {
  return (
    <main>
      <section className="mt-16 pb-4">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row gap-12 justify-between md:items-center">
            <div className='text-center md:text-left'>
              <h1 className='text-primary text-[80px] leading-[1] mb-4 font-bold hidden md:block'>404</h1>
              <h2 className='text-3xl font-semibold mb-4'>Page Not Found!</h2>
              <p className='max-w-[500px] mx-auto md:mx-0 mb-6'>The page you are looking for is not exist or currently not available. Please return home by clicking the button below.</p>
              <Link href='/' className='btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]'>Return Home</Link>
            </div>
            <div>
              <Image src={errorImg} alt="Filter Section Image" className="w-4/5 md:w-full max-w-[400px] mx-auto block" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;