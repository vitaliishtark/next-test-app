"use client";

import { EventsContextData } from "@/interfaces/interfaces";
import { eventsStaticData } from "@/mock/events.data";
import { createContext } from "react";

const DEFAULT_VALUE: EventsContextData = {
  events: eventsStaticData,
  handleEvent: () => {},
  handleEditEvent: () => {},
};

export const EventsContext = createContext<EventsContextData>(DEFAULT_VALUE);
