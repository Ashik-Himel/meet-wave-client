'use client';
import useAllContext from "@/hooks/useAllContext";
import Sidebar from "./Sidebar";
import LoadingPage from "../loading";
import { useRouter } from "next/navigation";

export default function Layout({children}) {
  const router = useRouter();
  const {user, userRole, userLoaded} = useAllContext();

  if (!userLoaded) return <LoadingPage />;
  if (!user) return router.push('/login');
  if (!userRole) return <LoadingPage />;
  if (userRole !== 'admin') return router.push('/');

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_auto] gap-6">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};