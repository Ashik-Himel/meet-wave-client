"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


export default function Page() {
    const [users, setAllUser] = useState([])

    useEffect(() => {
        fetch('https://meet-wave-server.vercel.app/all-users')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [])
    console.log(users);

    const handleClick = (email) => {
        axios.patch(`https://meet-wave-server.vercel.app/user-status/${email}`)
            .then(res => {
                if (res.status === 200) { // Check if the response status is successful
                    console.log(res.data);
                    toast.success("Mission Success");
                }
            })
            .catch(error => {
                console.error('Error updating user status:', error);
            });
    }


    return (
        <div className='container flex' >
            {/* Sidebar */}
            <div className='w-3/12 bg-secondary p-2 h-[90vh]'>
                <button className=' btn-block text-xl mt-2 mb-4'>Dashboard</button>
                <button className='btn btn-block text-xl'>Manage Users</button>
            </div>

            {/* main content */}
            <div className='w-9/12 h-[80vh]'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-white    '>
                                <th>Serial</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Status</th>
                            </tr >
                        </thead>
                        <tbody>
                            {users?.map((user, idx) => <tr key={idx} className='border-b'>
                                <th>{idx + 1}</th>
                                <th>
                                    <Image
                                        className='w-20 h-20 rounded-3xl'
                                        src={user?.photoURL}
                                        alt="user img"
                                        width={80}
                                        height={80}
                                    />
                                </th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td><button className='btn' onClick={() => handleClick(user?.email)} >{user?.status ? 'Active' : 'Disabled'}</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

