"use client"
import React, { FC } from "react";
import { CalendarIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import DatePicker from "react-datepicker";

interface DayPickerProps {
  day: number;
  setDay: (day: number) => void;
}

const DayPicker: FC<DayPickerProps> = ({ day, setDay }) => {

  return (
    <>
      <DatePicker
        selected={new Date(day)}
        minDate={new Date()}
        placeholderText="Select date(s)..."
        weekDayClassName={() => "data-picker-weekday"}
        className="rt-reset rt-TextFieldInput"
        customInput={
          <TextField.Root size={"3"} placeholder={"Select date(s)"}>
            <TextField.Slot>
              <CalendarIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Slot>
              <CaretDownIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        }
        onChange={(date: any) => {
          setDay(new Date(date).getTime());
        }}
      />
    </>
  );
};

export default DayPicker;
