'use client';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import UserRow from "./UserRow";

export default function Page() {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure('/users')
      .then(res => setUsers(res.data));
  }, []);

  return (
    <main className="overflow-x-hidden">
      <h2 className="text-2xl font-medium uppercase mb-4 lg:mb-6">Users</h2>

      <div className="overflow-auto border-x">
        <table className="border [&_tr]:border [&_th]:border [&_td]:border [&_th]:px-4 [&_td]:px-4 [&_th]:py-2 [&_td]:py-2 w-full min-w-[900px]">
          <thead>
            <tr className="bg-primary">
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users?.map(user => <UserRow key={user?._id} user={user} />)
            }
          </tbody>
        </table>
      </div>
    </main>
  );
};