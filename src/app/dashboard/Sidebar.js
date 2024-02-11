import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdDashboard, MdMeetingRoom } from "react-icons/md";
import { TbArrowsJoin } from "react-icons/tb";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block py-8 px-6 bg-secondary rounded-lg h-[calc(100vh-147px)]">
      <h4 className="text-[18px] uppercase font-medium mb-4">Dashboard</h4>
      <div className="space-y-1">
        <Link href='/dashboard/home' className="flex justify-between items-center py-2 rounded-lg">
          <div className="flex items-center gap-4">
            <MdDashboard className="text-xl" /> Dashboard
          </div>
          <FaArrowRight />
        </Link>
        <Link href='/dashboard/users' className="flex justify-between items-center py-2 rounded-lg">
          <div className="flex items-center gap-4">
            <FaUsers className="text-xl" /> Users
          </div>
          <FaArrowRight />
        </Link>
      </div>

      <h4 className="text-[18px] uppercase font-medium mb-4 mt-8">Menu</h4>
      <div className="space-y-1">
        <Link href='/' className="flex justify-between items-center py-2 rounded-lg">
          <div className="flex items-center gap-4">
            <IoHome className="text-xl" /> Home
          </div>
          <FaArrowRight />
        </Link>
        <Link href='/create-meeting' className="flex justify-between items-center py-2 rounded-lg">
          <div className="flex items-center gap-4">
            <MdMeetingRoom className="text-xl" /> Create Meeting
          </div>
          <FaArrowRight />
        </Link>
        <Link href='/join-meeting' className="flex justify-between items-center py-2 rounded-lg">
          <div className="flex items-center gap-4">
            <TbArrowsJoin className="text-xl" /> Join Meeting
          </div>
          <FaArrowRight />
        </Link>
      </div>
    </aside>
  );
};