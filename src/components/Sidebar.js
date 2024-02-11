import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers } from "react-icons/fa";
import { FaXmark, FaArrowRight, FaPlus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdMeetingRoom, MdLogin, MdDashboard } from "react-icons/md";
import { TbArrowsJoin } from "react-icons/tb";

export default function Sidebar({drawerShow, setDrawerShow, drawerRef, user, userRole, handleLogout}) {
  const pathname = usePathname();

  return (
    <aside className={`pt-8 px-6 lg:hidden fixed top-0 bottom-0 w-4/5 max-w-[300px] bg-secondary transition-[left] duration-300 z-50 ${drawerShow ? 'left-0' : '-left-[350px]'}`} ref={drawerRef}>
      {
        pathname.startsWith('/dashboard/') && <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[18px] uppercase font-medium">Dashboard</h4>
            <FaXmark className="text-2xl cursor-pointer select-none" onClick={() => setDrawerShow(false)} />
          </div>
          <div className="space-y-2">
            <Link href='/dashboard/home' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
              <div className="flex items-center gap-4">
                <MdDashboard className="text-xl" /> Dashboard
              </div>
              <FaArrowRight />
            </Link>
            <Link href='/dashboard/users' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
              <div className="flex items-center gap-4">
                <FaUsers className="text-xl" /> Users
              </div>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      }

      <div className="flex justify-between items-center mb-4">
        <h4 className="text-[18px] uppercase font-medium">Menu</h4>
        <FaXmark className="text-2xl cursor-pointer select-none" style={pathname.startsWith('/dashboard/') && {display: "none"}} onClick={() => setDrawerShow(false)} />
      </div>

      <div className="space-y-2">
        <Link href='/' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
          <div className="flex items-center gap-4">
            <IoHome className="text-xl" /> Home
          </div>
          <FaArrowRight />
        </Link>
        <Link href='/create-meeting' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
          <div className="flex items-center gap-4">
            <MdMeetingRoom className="text-xl" /> Create Meeting
          </div>
          <FaArrowRight />
        </Link>
        <Link href='/join-meeting' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
          <div className="flex items-center gap-4">
            <TbArrowsJoin className="text-xl" /> Join Meeting
          </div>
          <FaArrowRight />
        </Link>
      </div>

      <div className={pathname.startsWith('/dashboard/') ? 'hidden' : ''}>
        {
          user ? <div className="mt-8">
            <h4 className="text-[18px] uppercase font-medium mb-4">Account</h4>
            <div className="space-y-2">
              {
                userRole === "admin" && <Link href='/dashboard/home' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
                  <div className="flex items-center gap-4">
                    <MdDashboard className="text-xl" /> Dashboard
                  </div>
                  <FaArrowRight />
                </Link>
              }
              <button className="flex justify-center items-center gap-4 py-2 rounded-lg" onClick={handleLogout}>
                <MdLogin className="text-xl" /> Logout
              </button>
            </div>
          </div> : <div className="mt-8">
            <h4 className="text-[18px] uppercase font-medium mb-4">Login</h4>
            <div className="space-y-2">
              <Link href='/login' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
                <div className="flex items-center gap-4">
                  <MdLogin className="text-xl" /> Login
                </div>
                <FaArrowRight />
              </Link>
              <Link href='/sign-up' className="flex justify-between items-center py-2 rounded-lg" onClick={() => setDrawerShow(false)}>
                <div className="flex items-center gap-4">
                  <FaPlus className="text-xl" /> Sign up
                </div>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        }
      </div>
    </aside>
  );
};