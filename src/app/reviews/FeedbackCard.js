'use client';
import { format } from "date-fns";
import { useEffect, useState } from "react";
import {FaStar, FaRegStar} from 'react-icons/fa6';

export default function FeedbackCard({feedback}) {
  const [ratingStars, setRatingStars] = useState([]);

  useEffect(() => {
    let ratingElements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= feedback?.rating) ratingElements.push(<FaStar key={i} />)
      else ratingElements.push(<FaRegStar key={i} />)
    }
    setRatingStars(ratingElements);
  }, []);

  return (
    <div className="bg-secondary p-6 rounded-lg">
      <div className='flex items-center gap-1 text-yellow-600 text-xl mb-4'>
        {
          ratingStars?.map(star => star)
        }
      </div>
      <p className="mb-6">{feedback?.feedback}</p>

      <div className="flex justify-start items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={feedback?.photo} alt="User's Photo" className="w-[50px] h-[50px] rounded-full object-cover object-center" />
        <div className="flex flex-col">
          <span className="text-[18px] font-medium mb-[2px]">{feedback?.name?.split(' ')[0]}</span>
          <span className="text-sm">{format(feedback?.time, "dd MMM, yyyy hh:mm aa")}</span>
        </div>
      </div>
    </div>
  );
};