import axios from "axios";

export default function useAxiosPublic() {
  const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
  })

  return axiosPublic;
};