"use client"
import LoadingPage from '@/app/loading';
import useAllContext from '@/hooks/useAllContext';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const Page = () => {
    const router = useRouter();
    const { user, userLoaded } = useAllContext();
    const pathName = usePathname();
    const roomID = pathName.replace('/room/','');
    console.log(roomID);
    const meetingContainerRef = useRef(null);

    useEffect(() => {
        const initializeMeeting = async () => {
            try {
                const appID = 371559998;
                const serverSecret = "7820f5499b898f6ad4a49f7a2e56c174";
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomID,
                    Date.now().toString(),
                    user?.displayName
                );
                const zCloud = ZegoUIKitPrebuilt.create(kitToken);
                if (zCloud && typeof zCloud.joinRoom === 'function') {
                    zCloud.joinRoom({
                        container: meetingContainerRef.current,
                        scenario: {
                            mode: ZegoUIKitPrebuilt.VideoConference,
                        },
                
                        success: () => {
                            console.log('Successfully joined the room.');
                        },
                        fail: (error) => {
                            console.error('Failed to join the room:', error);
                        }
                    });
                } else {
                    console.error('ZegoUIKitPrebuilt.create did not return a valid object.');
                }
            } catch (error) {
                console.error('Error initializing meeting:', error);
            }
        };

        initializeMeeting();
    }, [roomID, user]);


    if (!userLoaded) return <LoadingPage />;
    if (!user) return router.push('/login');

    return (
        <div className='h-full max-h-screen' >
            <div  className='h-[100vh]'  ref={meetingContainerRef} />
        </div>
    );
};

export default Page;