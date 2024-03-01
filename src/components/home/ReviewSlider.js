"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// import logo from '@/assets/banner-img.png';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
// import Image from 'next/image';
import AOS from "aos"
import "aos/dist/aos.css"

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

    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div data-aos="fade-right" data-aos-duration="2000" className='mb-10 '>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                {
                    feedbacks?.map(data => <SwiperSlide key={data._id}>
                        <div className='space-y-3 px-7 md:px-10  py-5 rounded-xl bg-secondary text-sm md:text-base'>
                            <div className='text-center'>
                                {/* <img src={data?.photo} alt="user Image" width={60} height={60} className='rounded-full mx-auto ' /> */}
                                <h1 className='font-bold text-lg'>{data?.name}</h1>
                            </div>

                            <div className='text-center'>
                                <p className=' text-2xl font-semibold'>{data?.campName}</p>
                                <div className='text-center mx-auto flex justify-center'>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={data?.rating}
                                        readOnly
                                    />
                                </div>
                                <h1 className=''>{data?.feedback}</h1>
                                <h1 className=''>{data?.time}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default ReviewSlider;
