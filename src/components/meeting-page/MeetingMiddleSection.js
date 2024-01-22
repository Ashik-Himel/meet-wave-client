import Image from "next/image";
import manIcon from '@/assets/man-icon.png';

export default function MeetingMiddleSection() {
  return (
    <div className="h-[calc(100%-130px)] overflow-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 relative">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
};

function ProfileCard() {
  return (
    <div className="bg-secondary rounded-lg p-4">
      <Image src={manIcon} alt="Profile Picture" className="w-full max-w-[60%] mx-auto mb-6" />
      <span className="block w-full font-medium text-center whitespace-nowrap overflow-ellipsis overflow-hidden">Ibrahim Khalil</span>
    </div>
  );
}