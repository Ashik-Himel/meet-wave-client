'use client';
import { auth } from "@/configs/firebase.config";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AllContext = createContext(null);

export default function ContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setUserLoaded(true);
      console.log(user)
      if(user?.email){
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          status:true,
          role: 'user',
          photoURL: user?.photoURL
        }
        axios.post('https://meet-wave-server.vercel.app/all-users', userInfo)
          .then(res => {
            if (res.data?.insertedId) {
              toast.success("Successfully Registered");
              console.log(res.data);
            }
          })
      }
    })
    return ()=> unSubscribe();
  }, []);

  const value = {
    user,
    userLoaded
  };

  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  );
};