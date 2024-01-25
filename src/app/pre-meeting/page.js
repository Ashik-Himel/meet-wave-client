"use client"

import PreMeetingControl from '@/components/pre-meeting/PreMeetingControl';
import PreMeetingJoinBtn from '@/components/pre-meeting/PreMeetingJoinBtn';
import { useEffect, useState } from 'react';

const PreMeetingPage = () => {

  const [selectedCamera, setSelectedCamera] = useState(null);
  const [selectedMicrophone, setSelectedMicrophone] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const [cameraDevices, setCameraDevices] = useState([]);
  const [microphoneDevices, setMicrophoneDevices] = useState([]);
  const [speakerDevices, setSpeakerDevices] = useState([]);


  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter((device) => device.kind === 'videoinput');
        const microphones = devices.filter((device) => device.kind === 'audioinput');
        const speakers = devices.filter((device) => device.kind === 'audiooutput');

        setCameraDevices(cameras);
        setMicrophoneDevices(microphones);
        setSpeakerDevices(speakers);

        if (cameras.length > 0) setSelectedCamera(cameras[0].deviceId);
        if (microphones.length > 0) setSelectedMicrophone(microphones[0].deviceId);
        if (speakers.length > 0) setSelectedSpeaker(speakers[0].deviceId);
      } catch (error) {
        console.error('Error enumerating devices:', error);
      }
    };

    getMediaDevices();
  }, []);



  return (
    <main>
      <section className='mt-12'>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className='flex-1 w-full md:w-auto'>
              <div className='relative'>
                <div className="bg-secondary w-full  aspect-video rounded-lg">
                  <PreMeetingControl />
                </div>
                    
              </div>

              <form className='flex justify-center items-center gap-4 mt-6 '>
                <select
                  name="camera"
                  id="camera"
                  className='w-full bg-transparent text-white text-sm border-2 rounded-full px-4 py-px cursor-pointer'
                  value={selectedCamera}
                  onChange={(e) => setSelectedCamera(e.target.value)}
                >
                  {cameraDevices.map((camera) => (
                    <option className='bg-black' key={camera.deviceId} value={camera.deviceId}>
                      {camera.label}
                    </option>
                  ))}
                </select>
                <select
                  name="microphone"
                  id="microphone"
                  className='w-full bg-transparent text-white text-sm border-2 rounded-full px-4 py-px cursor-pointer'
                  value={selectedMicrophone}
                  onChange={(e) => setSelectedMicrophone(e.target.value)}
                >
                  {microphoneDevices.map((microphone) => (
                    <option  className='bg-black'  key={microphone.deviceId} value={microphone.deviceId}>
                      {microphone.label}
                    </option>
                  ))}
                </select>
                <select
                  name="speaker"
                  id="speaker"
                  className='w-full bg-transparent text-white text-sm border-2 rounded-full px-4 py-px cursor-pointer'
                  value={selectedSpeaker}
                  onChange={(e) => setSelectedSpeaker(e.target.value)}
                >
                  {speakerDevices.map((speaker) => (
                    <option className='bg-black'  key={speaker.deviceId} value={speaker.deviceId}>
                      {speaker.label}
                    </option>
                  ))}
                </select>
              </form>

            </div>
            <div className='flex-1 w-full md:w-auto text-center'>
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