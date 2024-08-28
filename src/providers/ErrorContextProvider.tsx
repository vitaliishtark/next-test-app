"use client";
import { ErrorContext } from "@/context/ErrorContext";
import { FC, useState } from "react";

export type EventsProviderProps = {
  children: React.ReactNode;
};

export const ErrorContextProvider: FC<EventsProviderProps> = ({ children }) => {
  const [errors, setErrors] = useState<string[]>([]);

  const handleError = (data: string) => {
    if(errors.findIndex((error) => error === data) === -1){
      setErrors([...errors, data]);
    }
  };
  const deleteError = (data: string) => {
    const errorsNew = errors.filter((error) => error !== data);
    setErrors([...errorsNew]);
  };

  return (
    <ErrorContext.Provider value={{ errors, handleError, deleteError }}>
      {children}
    </ErrorContext.Provider>
  );
};
