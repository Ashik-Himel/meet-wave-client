"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';

const ReviewSlider = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const axiosPublic = useAxiosPublic();
    console.log(feedbacks);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axiosPublic('/feedbacks');
          setFeedbacks(res.data);
        } catch (error) {
          console.error('Error fetching feedbacks:', error);
        }
      };

      fetchData();
  
    }, []);

    return (
        <div>
        
        </div>
    );
};

export default ReviewSlider;
