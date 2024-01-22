'use client';
import { useRouter } from "next/navigation";

export default function JoinMeetingForm() {
  const router = useRouter();

  const onHandleSubmit = e => {
    e.preventDefault();

    let linkCode;
    if (!e.target['meeting-link'].value.startsWith(`${process.env.DOMAIN}/meeting/`)) {
      return alert('Please enter a valid meeting link.');
    } else {
      linkCode = e.target['meeting-link'].value.replace(`${process.env.DOMAIN}/meeting/`, '');
    }
    router.push(`${process.env.DOMAIN}/pre-meeting?code=${linkCode}`);
  }

  return (
    <form className="w-full max-w-[350px] flex justify-center gap-2" onSubmit={onHandleSubmit}>
      <input type="url" name="meeting-link" id="meeting-link" className="w-full px-4 py-2 rounded-lg text-black" placeholder="Enter the meeting link" required />
      <button type="submit" className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Join Now</button>
    </form>
  );
};