"use client"
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  const toggleMicrophone = () => {
    setIsMicrophoneMuted((prev) => !prev);
  };

  return (
    <div>
      <Webcam
        audio={!isMicrophoneMuted}
        mirrored={true}
        ref={webcamRef}
        style={{
          display: isCameraOn ? 'block' : 'none',
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
        }}
      />
      <button onClick={toggleCamera}>
        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
      <button onClick={toggleMicrophone}>
        {isMicrophoneMuted ? 'Unmute Microphone' : 'Mute Microphone'}
      </button>
    </div>
  );
};

export default WebcamComponent;

