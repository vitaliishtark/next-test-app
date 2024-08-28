import { ErrorContext } from "@/context/ErrorContext";
import { useContext } from "react";

export const useErrorContext = () => {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error(
      "useErrorContext must be used within a ErrorContextProvider"
    );
  }

  return context;
};
