"use client"
import { useEventsContext } from "@/hooks/useEventsContext";
import { Box, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Event from "../Event/Event";
import { eventsStaticData } from "@/mock/events.data";

export const Events = () => {
  const { events } = useEventsContext();

  return (
    <Box>
      <Flex direction={"column"} gap={"2"}>
        <Text weight={"medium"} size={"3"} color="gray">Today&apos;s Events</Text>
        <Flex gap={"2"} direction={"column"} width={"100%"}>
          {eventsStaticData.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

