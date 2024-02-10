import axios from "axios";
import useAllContext from "./useAllContext";

export default function useAxiosSecure() {
  const {user} = useAllContext();

  const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER,
    withCredentials: true,
    headers: {
      Authorization: user?.email
    }
  })

  return axiosSecure;
};