"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import Link from 'next/link';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Image from "next/image";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import FeedbackCard from "@/app/reviews/FeedbackCard";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic('/feedbacks')
      .then(res => {
        setReviews(res.data);
      })
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  useEffect(()=>{
    AOS.init({})
  },[])
    return (
        <section className='mt-16'>
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <div className='w-full max-w-[650px] mx-auto text-center'>
              <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Here is our Valuable Review from User</h2>
              <div className="slider-container">
      <Slider {...settings}>
      
      {reviews.map(review => (
          <div key={review._id}>
            <div className="text-white">
            <Image src={review?.photo} alt="User's Photo" className="w-[50px] h-[50px] rounded-full object-cover object-center" />
              <h3>Rating: {review.name}</h3>
              <p>{review.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
              

              <Link href='/reviews' className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">See Reviews</Link>         
            </div>
          </div>
        </section>
    );
};

export default ReviewSection;