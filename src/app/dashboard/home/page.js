'use client';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";

export default function Page() {
  const [totalUsers, setTotalUsers] = useState({
    totalUsers: 0, blockedUsers: 0
  });
  const [totalFeedbacks, setTotalFeedbacks] = useState({totalFeedbacks: 0});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure('/users-count')
      .then(res => setTotalUsers(res.data));

    axiosSecure('/feedbacks-count')
      .then(res => setTotalFeedbacks(res.data));
  }, []);

  return (
    <main>
      <h2 className="text-2xl font-medium uppercase mb-4 lg:mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center items-start">
        <div className="bg-primary p-4 rounded-lg">
          <h4 className="text-xl font-medium text-center mb-1">Total Users</h4>
          <div className="flex justify-center items-center gap-3">
            <span className="text-3xl font-semibold">{totalUsers?.totalUsers}</span>
            <span>Users</span>
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg">
          <h4 className="text-xl font-medium text-center mb-1">Blocked Users</h4>
          <div className="flex justify-center items-center gap-3">
            <span className="text-3xl font-semibold">{totalUsers?.blockedUsers}</span>
            <span>Users</span>
          </div>
        </div>

        <div className="bg-primary p-4 rounded-lg">
          <h4 className="text-xl font-medium text-center mb-1">Total Reviews</h4>
          <div className="flex justify-center items-center gap-3">
            <span className="text-3xl font-semibold">{totalFeedbacks?.totalFeedbacks}</span>
            <span>Reviews</span>
          </div>
        </div>
      </div>
    </main>
  );
};