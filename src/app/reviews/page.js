'use client';
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";

export default function ReviewPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic('/feedbacks')
      .then(data => {
        setFeedbacks(data.data);
      })
  }, [axiosPublic]);

  return (
    <main>
      <section className="mt-12">
        <div className="container">
          <h1 className="text-3xl text-center font-semibold mb-8 !leading-[1.4]">
            Client <span className="text-primary">Review</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              feedbacks?.map((feedback) => <FeedbackCard key={feedback?._id} feedback={feedback} />)
            }
          </div>
        </div>
      </section>
    </main>
  );
}
