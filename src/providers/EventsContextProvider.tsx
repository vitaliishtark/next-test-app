"use client";
import { FC,  useState } from "react";

import { EventsContext } from "@/context/EventsContext";
import { IEvent } from "@/interfaces/interfaces";

export type EventsProviderProps = {
  children: React.ReactNode;
};

export const EventsContextProvider: FC<EventsProviderProps> = ({
  children,
}) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [event, setEvent] = useState<IEvent>({} as IEvent);

  const handleEvent = (data: IEvent) => {
    setEvent(data);
    const newEvents: IEvent[] = [...events, event];
    setEvents(newEvents);
  };

  const handleEditEvent = (data: IEvent) => {
    const editedEvents = [...events];
    editedEvents.map((event: IEvent) => {
      if (event.name === data.name) {
        event.name = data.name;
        event.description = data.description;
        event.start_time = data.start_time;
        event.end_time = data.end_time;
        event.time_zone = data.time_zone;
        event.image = data.image;
        event.video = data.video;
      }
    });
    setEvents(editedEvents as IEvent[]);
  };

  return (
    <EventsContext.Provider value={{ events,  handleEvent, handleEditEvent }}>
      {children}
    </EventsContext.Provider>
  );
};
