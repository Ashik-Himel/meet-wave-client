'use client';
import { createContext, useEffect, useState } from "react";
import { auth } from "@/configs/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export const AllContext = createContext(null);

export default function ContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      if(user?.email){
        axiosPublic(`/user-role?email=${user?.email}`, {withCredentials: true})
          .then(res => {
            setUserRole(res.data?.role);
          })
      }
      setUserLoaded(true);
    })
    return ()=> unSubscribe();
  }, [axiosPublic]);

  const value = {
    user,
    userRole,
    userLoaded
  };

  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  );
};