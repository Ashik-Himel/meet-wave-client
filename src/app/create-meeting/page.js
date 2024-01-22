import MeetingForm from "@/components/create-meeting/MeetingForm";
import {FaArrowRight} from 'react-icons/fa';

export default function Page() {
  return (
    <main>
      <section className="mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 justify-between md:items-center">
            <div className="w-full max-w-[415px]">
              <h2 className="text-3xl font-semibold mb-4 !leading-[1.4]">Create meeting easily by completing the form!</h2>
              <p className="mb-6">Create a meeting by felling up this form. Then just share the meeting link to get started.</p>
              <label htmlFor="meeting-type" className="btn btn-primary [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">Fill up now <FaArrowRight /></label>
            </div>
            <MeetingForm />
          </div>
        </div>
      </section>
    </main>
  );
};