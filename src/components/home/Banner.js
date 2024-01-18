import Image from "next/image";
import Link from "next/link";
import bannerImg from '@/assets/banner-img.png';

export default function Banner() {
  return (
    <section>
      <div className="container">
        <div className="mt-10 sm:mt-16 w-full max-w-[700px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold !leading-[1.25] mb-4">Free Online Meeting Platform For <span className="text-primary">Everyone</span></h1>
          <p className="mb-6">Nowadays you can collaborate with people all over the world, use our product for a feature-rich collaboration experience and it&apos;s also free!</p>
          <Link href='/create-meeting' className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)] mb-14">Try it for free!</Link>
          <Image src={bannerImg} alt="Banner Image" className="[box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]" />
        </div>
      </div>
    </section>
  );
};