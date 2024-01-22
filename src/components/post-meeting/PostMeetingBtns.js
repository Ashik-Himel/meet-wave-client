'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostMeetingBtns() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleRejoin = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/pre-meeting?code=${searchParams.get('code')}`);
  }

  return (
    <div className="flex justify-center items-center gap-4">
      <button type="button" className="btn btn-primary " onClick={handleRejoin}>Rejoin</button>
      <Link href='/' className="btn btn-secondary">Return Home</Link>
    </div>
  );
};