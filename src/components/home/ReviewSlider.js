"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import logo from '@/assets/banner-img.png';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

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
        <div className='mb-10'>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                {
                    feedbacks?.map(data => <SwiperSlide key={data._id}>
                        <div className='space-y-3 md:px-10'>
                            <div className='text-center'>
                                <Image src={logo} alt="user Image" width={60} height={60} className='rounded-full mx-auto ' />
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
