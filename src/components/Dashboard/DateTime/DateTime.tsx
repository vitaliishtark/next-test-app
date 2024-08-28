"use client";
import React, { FC, useEffect, useState } from "react";
import { GlobeIcon, ClockIcon, CaretDownIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Popover,
  ScrollArea,
  Text,
  TextField,
} from "@radix-ui/themes";

import "react-datepicker/dist/react-datepicker.css";
import DayPicker from "@/components/global/DayPicker/DayPicker";
import { hours, timeZones } from "@/mock/time.data";
import { TimeSlot } from "@/interfaces/interfaces";

interface DateTimeProps {
  setStartTimeEvent: (data: number) => void;
  setEndTimeEvent: (data: number) => void;
  timeZone: string;
  setTimeZone: (data: string) => void;
}

const DateTime: FC<DateTimeProps> = ({
  setEndTimeEvent,
  setStartTimeEvent,
  timeZone,
  setTimeZone,
}) => {
  const [startTime, setStartTime] = useState<TimeSlot>({ displayValue: "" });
  const [endTime, setEndTime] = useState<TimeSlot>({ displayValue: "" });
  const [date, setDate] = useState<number>(new Date().getTime());

  useEffect(() => {
    const newStartTime = new Date(date);
    newStartTime.setHours(startTime.value || 0);
    newStartTime.setMinutes(startTime.minutes || 0);

    const newEndTime = new Date(date);
    newEndTime.setHours(endTime.value || 0);
    newEndTime.setMinutes(endTime.minutes || 0);

    setEndTimeEvent(newEndTime.getTime());
    setStartTimeEvent(newStartTime.getTime());
  }, [setEndTimeEvent, setStartTimeEvent, startTime, endTime, date]);

  return (
    <Flex gap={"2"} direction={"column"}>
      <Text as="p" weight={"medium"} size={"3"}>
        Date&Time
      </Text>
      <Grid
        columns="2"
        gap="2"
        rows="2"
        width="auto"
        style={{ flexWrap: "nowrap" }}
        className="date-time-container-grid"
      >
        <Box>
          <DayPicker day={date} setDay={setDate} />
        </Box>

        <Popover.Root>
          <Popover.Trigger>
            <Box>
              <TextField.Root
                size={"3"}
                placeholder={"Time zone"}
                value={timeZone}
                onChange={() => {}}
              >
                <TextField.Slot>
                  <GlobeIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Slot>
                  <CaretDownIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Popover.Trigger>
          <Popover.Content width="200px">
            <Flex gap={"2"} direction={"column"}>
              {timeZones.map((timeZone, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  style={{ textAlign: "left", justifyContent: "left" }}
                  onClick={() => setTimeZone(timeZone)}
                >
                  {timeZone}
                </Button>
              ))}
            </Flex>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>
            <Box>
              <TextField.Root
                size={"3"}
                placeholder={"Start time"}
                value={startTime.displayValue}
                onChange={() => {}}
              >
                <TextField.Slot>
                  <ClockIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Slot>
                  <CaretDownIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Popover.Trigger>
          <Popover.Content width="200px">
            <Box height={"300px"}>
              <ScrollArea scrollbars={"vertical"}>
                <Flex gap={"2"} direction={"column"}>
                  {hours.map((hour: TimeSlot) => {
                    if (
                      new Date(date).getUTCDate() !== new Date().getUTCDate() ||
                      (hour?.value && hour.value > new Date().getHours()) ||
                      (hour.value === new Date().getHours() &&
                        (hour?.minutes || 0) > new Date().getMinutes())
                    ) {
                      return (
                        <Button
                          key={hour.id}
                          variant="ghost"
                          style={{ textAlign: "left", justifyContent: "left" }}
                          onClick={() => setStartTime(hour)}
                        >
                          {hour.displayValue}
                        </Button>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Flex>
              </ScrollArea>
            </Box>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>
            <Box>
              <TextField.Root
                size={"3"}
                placeholder={"End time"}
                value={endTime.displayValue}
                onChange={() => {}}
              >
                <TextField.Slot>
                  <ClockIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Slot>
                  <CaretDownIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Popover.Trigger>
          <Popover.Content width="200px">
            <Box height={"300px"}>
              <ScrollArea scrollbars={"vertical"}>
                <Flex gap={"2"} direction={"column"}>
                  {hours.map((hour) => {
                    if (
                      (hour?.value || 0) > (startTime?.value || 0) ||
                      ((hour?.value || 0) === (startTime?.value || 0) &&
                        (hour?.minutes || 0) > (startTime?.minutes || 0)) ||
                      (!startTime &&
                        hour?.value &&
                        hour.value > new Date().getHours()) ||
                      (hour.value === new Date().getHours() &&
                        (hour?.minutes || 0) > new Date().getMinutes())
                    ) {
                      return (
                        <Button
                          key={hour.id}
                          variant="ghost"
                          style={{ textAlign: "left", justifyContent: "left" }}
                          onClick={() => setEndTime(hour)}
                          disabled={
                            hour.value === startTime?.value &&
                            hour.minutes === startTime?.minutes
                          }
                        >
                          {hour.displayValue}
                        </Button>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Flex>
              </ScrollArea>
            </Box>
          </Popover.Content>
        </Popover.Root>
      </Grid>
    </Flex>
  );
};

export default DateTime;
