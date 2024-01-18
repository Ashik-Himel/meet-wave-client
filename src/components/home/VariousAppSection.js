import Image from 'next/image';
import playStore from '@/assets/icons/play-store.png';
import appStore from '@/assets/icons/app-store.png';
import microsoftStore from '@/assets/icons/microsoft-store.png';

export default function VariousAppSection() {
  return (
    <section className='mt-16'>
      <div className="container">
        <div className='w-full max-w-[650px] mx-auto text-center'>
          <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Download for free in various app stores</h2>
          <p className='mb-6'>We are providing our application in various types of platform. Download our application, install it and get started easily.</p>

          <div className='flex justify-center items-center gap-6'>
            <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className='inline-block bg-secondary p-3 rounded-lg'>
              <Image src={playStore} alt='Google Play Icon' className='w-[25px]' />
            </a>
            <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer" className='inline-block bg-secondary p-3 rounded-lg'>
              <Image src={appStore} alt='App Store Icon' className='w-[25px]' />
            </a>
            <a href="https://apps.microsoft.com/" target="_blank" rel="noopener noreferrer" className='inline-block bg-secondary p-3 rounded-lg'>
              <Image src={microsoftStore} alt='Microsoft Icon' className='w-[25px]' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};