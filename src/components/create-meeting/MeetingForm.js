"use client";
import { useState } from "react";

export default function MeetingForm() {
  const [showDateTime, setShowDateTime] = useState(false);

  const onHandleSubmit = e => {
    e.preventDefault();
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
        <input type="date" name="meeting-date" id="meeting-date" className="w-full px-4 py-2 rounded-lg text-black mb-4 cursor-pointer" required />

        <label htmlFor="meeting-time" className="font-medium block mb-2">Meeting Time</label>
        <input type="time" name="meeting-time" id="meeting-time" className="w-full px-4 py-2 rounded-lg text-black mb-4 cursor-pointer" required />
      </div>

      <button type="submit" className="btn btn-primary">Create Meeting</button>
    </form>
  );
};