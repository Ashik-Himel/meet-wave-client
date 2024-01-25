import Image from 'next/image';
import loadingImg from '../assets/loading.gif';

const LoadingPage = () => {
  return (
    <Image src={loadingImg} alt='Loading Image' width={500} height={500} className='block mx-auto' />
  );
};

export default LoadingPage;