import facebookLogo from '@/assets/brand-logo/facebook.png';
import microsoftLogo from '@/assets/brand-logo/microsoft.png';
import netflixLogo from '@/assets/brand-logo/netflix.png';
import amazonLogo from '@/assets/brand-logo/amazon-light.png';
import Image from 'next/image';

export default function TrustCard() {
  return (
    <section className='bg-bgColor py-10 -translate-y-[20px]'>
      <div className="container">
        <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-6'>
          <span className='block w-full max-w-[300px] text-2xl font-semibold'>Trusted by 100+ companies in the world!</span>
          <div className='grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] gap-8'>
            <div>
              <Image src={facebookLogo} alt='Facebook Logo' className='w-[100px]' />
            </div>
            <div>
              <Image src={microsoftLogo} alt='Microsoft Logo' className='w-[100px]' />
            </div>
            <div>
              <Image src={netflixLogo} alt='Netflix Logo' className='w-[80px]' />
            </div>
            <div>
              <Image src={amazonLogo} alt='Amazon Logo' className='w-[90px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};