"use client";
import { EventsContext } from "@/context/EventsContext";
import { useContext } from "react";

export const useEventsContext = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error(
      "useEventsContext must be used within a EventsContextProvider"
    );
  }

  return context;
};
