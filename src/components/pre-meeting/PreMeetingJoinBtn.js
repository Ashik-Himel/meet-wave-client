'use client';
import { useRouter, useSearchParams } from "next/navigation";

export default function PreMeetingJoinBtn() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePreMeetingBtn = () => {
    router.push(`${process.env.DOMAIN}/meeting/${searchParams.get('code')}`)
  }

  return (
    <button type="button" className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]" onClick={handlePreMeetingBtn}>Join Now</button>
  );
};