import useAllContext from '@/hooks/useAllContext';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {FaStar, FaRegStar} from 'react-icons/fa6';

export default function FeedbackModal({modalActive, setModalActive}) {
  const {user} = useAllContext();
  const [rating, setRating] = useState(0);
  const [ratingStars, setRatingStars] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    let ratingElements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) ratingElements.push(<FaStar key={i} onClick={() => setRating(i)} />)
      else ratingElements.push(<FaRegStar key={i} onClick={() => setRating(i)} />)
    }
    setRatingStars(ratingElements);
  }, [rating]);

  const handleFeedbackSubmit = e => {
    e.preventDefault();

    const rating = parseInt(e.target.rating.value);
    const feedback = e.target.feedback.value;

    if (rating === 0) return toast.error('Please give the star rating !!!');
    
    const feedbackObject = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      rating,
      feedback,
      time: new Date(),
      featured: false
    }

    axiosSecure.post('/feedbacks', feedbackObject)
      .then(() => toast.success("Thank you for your feedback !!!"))
      .catch(error => toast.error(error.code))

    e.target.feedback.value = '';
    setRating(0);
    setModalActive(false);
  }

  return (
    <div className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] transition-[top] duration-300 z-50" style={modalActive ? {top: '50%'} : {top: '-100%'}}>
      <div className='mx-6 px-6 py-8 bg-secondary rounded-lg [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)] border border-primary'>
        <h3 className='text-primary text-center text-2xl font-medium mb-6'>Send Feedback</h3>
        <div className='flex justify-center items-center gap-1 text-yellow-600 text-xl mb-4 [&>*]:cursor-pointer [&>*]:select-none'>
          {
            ratingStars?.map(star => star)
          }
        </div>

        <form onSubmit={handleFeedbackSubmit}>
          <input type="number" name="rating" id="rating" value={rating} readOnly hidden />
          <textarea name="feedback" id="feedback" placeholder='Write your feedback here' className='textarea w-full h-[100px] bg-inherit border-2 border-primary focus:border-primary resize-none' required></textarea>

          <div className='flex justify-center items-center gap-2 mt-4'>
            <button type="submit" className='btn btn-primary'>Send</button>
            <button type="button" className='btn btn-error text-white' onClick={() => setModalActive(false)}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};