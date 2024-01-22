"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MeetingForm() {
  const router = useRouter();
  const [showDateTime, setShowDateTime] = useState(false);

  const onHandleSubmit = e => {
    e.preventDefault();
    const meetingCode = generateString(9);
    router.push(`${process.env.DOMAIN}/pre-meeting?code=${meetingCode}`);
  }
  const onTypeChange = e => {
    if (e.target.value === 'Scheduled') {
      setShowDateTime(true);
    } else {
      setShowDateTime(false);
    }
  }

  return (
    <form className="bg-secondary p-6 rounded-lg w-full max-w-[500px] [box-shadow:0px_-5px_75px_rgba(33,128,232,0.25)]" onSubmit={onHandleSubmit}>
      <label htmlFor="meeting-type" className="font-medium block mb-2">Meeting Type</label>
      <select name="meeting-type" id="meeting-type" className="w-full px-4 py-2 rounded-lg text-black mb-4 cursor-pointer" required onChange={onTypeChange}>
        <option value="Instant">Instant</option>
        <option value="Scheduled">Scheduled</option>
      </select>
 
      <label htmlFor="meeting-privacy" className="font-medium block mb-2">Meeting Privacy</label>
      <select name="meeting-privacy" id="meeting-privacy" className="w-full px-4 py-2 rounded-lg text-black mb-4 cursor-pointer" required>
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>

      <div className={showDateTime ? 'block' : 'hidden'}>
        <label htmlFor="meeting-date" className="font-medium block mb-2">Meeting Date</label>
        <input type="date" name="meeting-date" id="meeting-date" className="w-full px-4 py-2 rounded-lg text-black mb-4 cursor-pointer" required={showDateTime ? true : false} />

        <label htmlFor="meeting-time" className="font-medium block mb-2">Meeting Time</label>
        <input type="time" name="meeting-time" id="meeting-time" className="w-full px-4 py-2 rounded-lg text-black mb-4 cursor-pointer" required={showDateTime ? true : false} />
      </div>

      <button type="submit" className="btn btn-primary">Create Meeting</button>
    </form>
  );
};

function generateString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    if (i > 0 && i % 3 === 0 && i !== length - 1) {
      result += '-';
    }
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}