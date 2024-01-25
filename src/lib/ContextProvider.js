'use client';
import { auth } from "@/configs/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AllContext = createContext(null);

export default function ContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setUserLoaded(true);
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