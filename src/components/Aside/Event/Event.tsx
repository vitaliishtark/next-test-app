"use client";
import { IEvent } from "@/interfaces/interfaces";
import { Flex, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface EventProps {
  event: IEvent;
}

const Event: FC<EventProps> = ({ event }) => {
  return (
    <Flex gap={"2"}>
      <Image
        src={
          (typeof (event?.image as File)?.name === "string"
            ? URL.createObjectURL(event.image as File)
            : event.image) as StaticImageData
        }
        alt={event.name}
        width={40}
        height={40}
        style={{ borderRadius: "4px" }}
      />
      <Flex direction={"column"} align={"start"} gap={"0"}>
        <Text size={"3"} weight={"light"} style={{whiteSpace: "nowrap"}}>{event.name}</Text>
        <Text size={"3"}  weight={"medium"} style={{whiteSpace: "nowrap"}}>{event.description}</Text>
      </Flex>
    </Flex>
  );
};

export default Event;
