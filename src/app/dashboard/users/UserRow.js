import {LuSettings2} from 'react-icons/lu';
import { useState } from 'react';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAllContext from '@/hooks/useAllContext';

export default function UserRow({user}) {
  const [modalActive, setModalActive] = useState(false);
  const [userRole, setUserRole] = useState(user?.role);
  const [userStatus, setUserStatus] = useState(user?.status);
  const [popupRole, setPopupRole] = useState(user?.role);
  const [popupStatus, setPopupStatus] = useState(user?.status);
  const axiosSecure = useAxiosSecure();
  const {user:firebaseUser} = useAllContext();

  const handleUserConfig = () => {
    setUserRole(popupRole);
    setUserStatus(popupStatus);
    setModalActive(false);
    console.log(popupStatus)
    const document = {
      role: popupRole,
      status: popupStatus
    }
      console.log(popupStatus)
    axiosSecure.put(`/users?email=${user?.email}`, document)
      .then(res => {
        if (res.data?.modifiedCount === 1) {
          toast.success("User Updated !!!");
        }
      })
      .catch(err => {
        toast.error(err.code);
        setUserRole(user?.role);
        setUserStatus(user?.status);
        setPopupRole(user?.role);
        setPopupStatus(user?.status);
      })
        const uid={
           firebaseUID:firebaseUser.uid
        }

        if(popupStatus=='disabled'){
          axiosSecure.post(`/users-disable?email=${user?.email}`,uid)
          .then(res => {
           console.log(res)
         })
         .catch(err => {
           toast.error(err.code);
           setUserRole(user?.role);
           setUserStatus(user?.status);
           setPopupRole(user?.role);
           setPopupStatus(user?.status);
         })
        }
       

      
  }

  return (
    <tr>
      <td>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={user?.photo} alt="User's Photo" className="w-[35px] h-[35px] rounded-full object-cover object-center" />
      </td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td className={`text-center ${userRole === 'admin' ? 'font-medium text-primary' : ''}`}>
        {
          userRole[0].toUpperCase() + userRole.slice(1)
        }
      </td>
      <td className={`text-center ${userStatus === 'disabled' ? 'font-medium text-error' : ''}`}>
        {
          userStatus[0].toUpperCase() + userStatus.slice(1)
        }
      </td>
      <td className='text-center'>
        <LuSettings2 className='text-xl mx-auto text-primary cursor-pointer select-none' onClick={() => setModalActive(!modalActive)} />
      </td>

      <div className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] transition-[top] duration-300 z-50" style={modalActive ? {top: '50%'} : {top: '-100%'}}>
        <div className='mx-6 px-6 py-8 bg-secondary rounded-lg [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)] border border-primary'>
          <div className='flex justify-center items-center gap-4 mb-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={user?.photo} alt="User's Photo" className="w-[60px] h-[60px] rounded-full object-cover object-center" />
            <div className='flex flex-col'>
              <span className='text-[18px] font-medium'>{user?.name}</span>
              <span className='text-sm'>{user?.email}</span>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 mb-4'>
            <span>Set Role :</span>
            <div className='border-2 border-primary rounded-md flex justify-start items-center'>
              <div className={`py-1 px-4 border-r-2 border-primary cursor-pointer select-none ${popupRole === 'user' ? 'bg-primary' : ''}`} onClick={() => setPopupRole('user')}>User</div>
              <div className={`py-1 px-4 cursor-pointer select-none ${popupRole === 'admin' ? 'bg-primary' : ''}`} onClick={() => setPopupRole('admin')}>Admin</div>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 mb-8'>
            <span>Set Status :</span>
            <div className='border-2 border-primary rounded-md flex justify-start items-center'>
              <div className={`py-1 px-4 border-r-2 border-primary cursor-pointer select-none ${popupStatus === 'active' ? 'bg-primary' : ''}`} onClick={() => setPopupStatus('active')}>Active</div>
              <div className={`py-1 px-4 cursor-pointer select-none ${popupStatus === 'disabled' ? 'bg-primary' : ''}`} onClick={() => setPopupStatus('disabled')}>Disable</div>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <button className='btn btn-primary' onClick={handleUserConfig}>Save</button>
            <button className='btn btn-error text-white' onClick={() => {setModalActive(false); setPopupRole(user?.role); setPopupStatus(user?.status)}}>Close</button>
          </div>
        </div>
      </div>
    </tr>
  );
};