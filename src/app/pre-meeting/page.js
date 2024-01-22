import PreMeetingControl from '@/components/pre-meeting/PreMeetingControl';
import PreMeetingJoinBtn from '@/components/pre-meeting/PreMeetingJoinBtn';

const PreMeetingPage = () => {
  return (
    <main>
      <section className='mt-12'>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className='flex-1 w-full md:w-auto'>
              <div className='relative'>
                <div className="bg-secondary w-full aspect-video rounded-lg"></div>
                <PreMeetingControl />
              </div>
              <form className='flex justify-center items-center gap-4 px-4 mt-6'>
                <select name="camera" id="camera" className='w-full bg-transparent text-white border-2 rounded-full px-4 py-px cursor-pointer'>
                  <option value="Camera">Camera</option>
                </select>
                <select name="microphone" id="microphone" className='w-full bg-transparent text-white border-2 rounded-full px-4 py-px cursor-pointer'>
                  <option value="Microphone">Microphone</option>
                </select>
                <select name="speaker" id="speaker" className='w-full bg-transparent text-white border-2 rounded-full px-4 py-px cursor-pointer'>
                  <option value="Speaker">Speaker</option>
                </select>
              </form>
            </div>
            <div  className='flex-1 w-full md:w-auto text-center'>
              <h1 className='text-2xl font-semibold mb-4'>Ready to Join Meeting?</h1>
              <PreMeetingJoinBtn />
            </div>
          </div>
        </div>
    </section>
    </main>
  );
};

export default PreMeetingPage;