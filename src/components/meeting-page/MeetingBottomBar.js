import {FaMicrophone, FaRegHandPaper} from 'react-icons/fa';
import {FaVideo, FaGear} from 'react-icons/fa6';
import {MdCallEnd, MdOutlineScreenShare, MdEmojiEmotions} from 'react-icons/md';
import {IoPeople} from 'react-icons/io5';

export default function MeetingBottomBar() {
  return (
    <div className="bg-secondary px-4 py-2 rounded-lg flex justify-center sm:justify-between items-center gap-4">
      <div className='bg-primary p-2 rounded-md cursor-pointer select-none hidden sm:block'>
        <FaGear />
      </div>
      <div className='flex justify-center items-center gap-2 text-xl'>
        <div className='bg-primary p-2 rounded-full cursor-pointer select-none'>
          <FaMicrophone />
        </div>
        <div className='bg-primary p-2 rounded-full cursor-pointer select-none'>
          <FaVideo />
        </div>
        <div className='bg-primary p-2 rounded-full cursor-pointer select-none'>
          <MdOutlineScreenShare />
        </div>
        <div className='bg-primary p-2 rounded-full cursor-pointer select-none'>
          <FaRegHandPaper />
        </div>
        <div className='bg-primary p-2 rounded-full cursor-pointer select-none'>
          <MdEmojiEmotions />
        </div>
        <div className='bg-red-500 p-2 rounded-full cursor-pointer select-none'>
          <MdCallEnd />
        </div>
      </div>
      <div className='bg-primary p-2 rounded-md cursor-pointer select-none hidden sm:block'>
        <IoPeople />
      </div>
    </div>
  );
};