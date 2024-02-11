import {RiDeleteBinLine} from 'react-icons/ri';
import {FaUser, FaUserSlash} from 'react-icons/fa';
import { useState } from 'react';

export default function UserRow({user}) {
  const [userRole, setUserRole] = useState(user?.role);
  const [userStatus, setUserStatus] = useState(user?.status);

  return (
    <tr>
      <td>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={user?.photo} alt="User's Photo" className="w-[35px] h-[35px] rounded-full object-cover object-center" />
      </td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        {
          userRole === "admin" ? <span className="font-semibold text-primary">Admin</span> : userStatus === "active" ? <span>Active</span> : <span className="font-semibold text-error">Disabled</span>
        }
      </td>
      <td className='text-center'>
        {
          userRole === "admin" ? <button className="btn btn-error text-white min-h-[36px] px-3"><RiDeleteBinLine className='text-xl' /> Remove</button> : userStatus === "active" ? <button  className="btn btn-error text-white min-h-[36px] px-3"><FaUserSlash className='text-xl' /> Disable</button> : <button  className="btn btn-primary min-h-[36px] px-3"><FaUser className='text-xl' /> Enable</button>
        }
      </td>
    </tr>
  );
};