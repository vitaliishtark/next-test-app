"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";
import styles from "./page.module.css";
import InputLabel from "@/components/global/InputLabel/InputLabel";
import DateTime from "@/components/Dashboard/DateTime/DateTime";
import { VideoImageSection } from "@/components/Dashboard/VideoImageSection/VideoImageSection";
import { useCallback, useEffect, useState } from "react";
import { useErrorContext } from "@/hooks/useErrorContext";
import { Cross1Icon, InfoCircledIcon } from "@radix-ui/react-icons";
import { IEvent } from "@/interfaces/interfaces";
import { useEventsContext } from "@/hooks/useEventsContext";
import { createPortal } from "react-dom";
import { formatDate } from "@/utils/general";
import Loader from "@/components/Dashboard/Loader/Loader";

export default function Home() {
  const { errors, handleError, deleteError } = useErrorContext();
  const { handleEvent, handleEditEvent } = useEventsContext();

  const [event, setEvent] = useState<IEvent>();

  const [eventName, setEventName] = useState<string>("");

  const [description, setDescription] = useState<string>("");

  const [startTimeEvent, setStartTimeEvent] = useState<number>(0);
  const [endTimeEvent, setEndTimeEvent] = useState<number>(0);

  const [timeZone, setTimeZone] = useState<string>("");

  const [image, setImage] = useState<File>({} as File);

  const [video, setVideo] = useState<string>("");

  const [toast, setToast] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(false);

  const handleEventValues = useCallback(() => {
    const newEvent: IEvent = {
      id: crypto.randomUUID(),
      name: eventName,
      created_at: new Date().getTime(),
      description: description,
      start_time: startTimeEvent,
      end_time: endTimeEvent,
      time_zone: timeZone,
      image: image,
      video: video,
    };

    setEvent(newEvent);
  }, [
    eventName,
    description,
    startTimeEvent,
    endTimeEvent,
    timeZone,
    image,
    video,
  ]);

  useEffect(() => {
    handleEventValues();
  }, [
    eventName,
    description,
    startTimeEvent,
    endTimeEvent,
    timeZone,
    image,
    video,
    handleEventValues,
  ]);

  useEffect(() => {
    if (eventName === "") {
      deleteError("Event name is required");
    }

    if (eventName.length < 2 && eventName !== "") {
      handleError("Event name length is too short (2 characters minimum)");
    } else {
      deleteError("Event name length is too short (2 characters minimum)");
    }
  }, [eventName]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <main className={styles.main}>
        {!isLoading ? (
          <Box maxWidth={"570px"} pr={"5"}>
            <Flex gap={"9"} direction={"column"}>
              <Flex gap={"2"} direction={"column"}>
                {errors &&
                  errors.map((error, index) => (
                    <Badge color="red" radius="medium" key={index}>
                      <Flex px={"3"} py={"2"} width={"100%"} gap={"2"}>
                        <InfoCircledIcon />
                        <Text>{error} </Text>
                      </Flex>
                    </Badge>
                  ))}
              </Flex>

              <Flex gap={"4"} direction={"column"}>
                <Heading as="h2" size={"8"}>
                  Create an event
                </Heading>
                <Text as="p" weight={"light"} size={"3"} color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Text>
              </Flex>
              <InputLabel
                label={"Event name"}
                placeholder={"Your event name"}
                value={eventName}
                setValue={setEventName}
                error={eventName.length < 2 && eventName !== ""}
              />
              <DateTime
                setStartTimeEvent={setStartTimeEvent}
                setEndTimeEvent={setEndTimeEvent}
                timeZone={timeZone}
                setTimeZone={setTimeZone}
              />
              <InputLabel
                label={"Description"}
                placeholder={"Add event description"}
                value={description}
                setValue={(data) => {
                  setDescription(data);
                }}
                area
              />

              <VideoImageSection
                video={video}
                setVideo={setVideo}
                image={image}
                setImage={setImage}
              />

              <Flex gap={"2"}>
                <Button
                  variant="soft"
                  disabled={
                    errors.length > 0 ||
                    !startTimeEvent ||
                    !endTimeEvent ||
                    !eventName ||
                    !timeZone
                  }
                  onClick={() => {
                    edit
                      ? handleEditEvent(event as IEvent)
                      : handleEvent(event as IEvent);
                    setToast(true);
                  }}
                >
                  {edit ? "Edit " : "Create "}Event
                </Button>
                <Button disabled>Cancel</Button>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <Loader />
        )}
      </main>
      {toast &&
        createPortal(
          <Box
            position={"absolute"}
            style={{
              top: "100px",
              right: "5%",
              background: "rgba(24, 25, 23, 1)",
              border: "1px solid rgba(244, 250, 237, 0.17)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ paddingRight: "20px" }}>
                <Text>
                  Event {edit ? "edited at" : "created on"}
                  {" " + formatDate(new Date(event?.created_at as number))}!
                </Text>
              </div>
              <Link
                style={{ cursor: "pointer", color: "rgba(137, 255, 159, 0.8)" }}
                onClick={() => {
                  setEdit(true);
                  setToast(false);
                }}
              >
                Edit event
              </Link>
              <IconButton
                onClick={() => {
                  setToast(false);
                  setDescription("");
                  setEventName("");
                  setStartTimeEvent(0);
                  setEndTimeEvent(0);
                  setTimeZone("");
                  setVideo("");
                  setImage({} as File);
                  setEdit(false);
                }}
              >
                <Cross1Icon />
              </IconButton>
            </div>
          </Box>,
          document.body
        )}
    </>
  );
}
