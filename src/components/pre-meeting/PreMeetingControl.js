'use client';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import { FaVideo, FaVideoSlash } from 'react-icons/fa6';
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

export default function PreMeetingControl() {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);
  const [soundLevel, setSoundLevel] = useState(0);

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  const toggleMicrophone = () => {
    setIsMicrophoneMuted((prev) => !prev);
  };

  useEffect(() => {
    let audioContext;
    let analyser;

    const initializeAudioContext = async () => {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateAudioStatus = () => {
          analyser.getByteFrequencyData(dataArray);
          const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
          setSoundLevel(average);
        };

        const animationFrameId = requestAnimationFrame(function update() {
          updateAudioStatus();
          animationFrameId && requestAnimationFrame(update);
        });

        return () => {
          cancelAnimationFrame(animationFrameId);
          audioContext.close();
          stream.getTracks().forEach((track) => track.stop());
        };
      } catch (error) {
        console.error('Error initializing audio context:', error);
      }
    };

    initializeAudioContext();

  }, []);

  return (
    <div>
      <Webcam
        audio={!isMicrophoneMuted}
        mirrored={true}
        ref={webcamRef}
        className={`aspect-[4/3] rounded-lg ${isCameraOn ? 'block' : 'hidden'}`}
      />

      {/* sound checker bar */}
      {!isMicrophoneMuted && (
        <div className='absolute bottom-6 left-4'>
          <div className='border-2 border-slate-600 w-28 h-3 rounded-full overflow-hidden'>
            <div className='rounded-full bg-blue-600 h-[100%]' style={{ width: `${soundLevel }px` }}></div>
          </div>
        </div>
      )}
      <div className='flex justify-center items-center gap-2 text-xl absolute bottom-4 md:left-1/2 right-0 -translate-x-1/2'>
        <div className={`p-2 rounded-full cursor-pointer select-none ${!isMicrophoneMuted ? 'bg-primary' : 'bg-red-500'}`} onClick={toggleMicrophone}>
          {isMicrophoneMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
        </div>
        <div className={`p-2 rounded-full cursor-pointer select-none ${isCameraOn ? 'bg-primary' : 'bg-red-500'}`} onClick={toggleCamera}>
          {isCameraOn ? <FaVideo /> : <FaVideoSlash />}
        </div>
      </div>
    </div>
  );
}
