import { AllContext } from "@/lib/ContextProvider";
import { useContext } from "react";

export default function useAllContext() {
  const context = useContext(AllContext);
  return context;
};