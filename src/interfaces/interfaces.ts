import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconProps } from "@radix-ui/themes";
import { THEME_ENUM } from "@/enums/enums";
import { StaticImageData } from "next/image";
export type ThemeContextData = {
  theme: THEME_ENUM;
  toggleTheme: () => void;
};
export type EventsContextData = {
  events: IEvent[];
  handleEvent: (event: IEvent) => void;
  handleEditEvent: (event: IEvent) => void;
};
export type ErrorContextData = {
  errors: string[];
  handleError: (error: string) => void;
  deleteError: (error: string) => void;
};

export interface navBarDataProps {
  id: number;
  title: string;
  icon:
    | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
    | any;
  link: string;
}

export interface TimeSlot {
  id?: number;
  value?: number;
  minutes?: number;
  displayValue?: string;
  period?: "AM" | "PM";
}

export interface IEvent {
  id: string;
  created_at: number;
  name: string;
  description?: string;
  image?: File | null | string | StaticImageData;
  video?: string;
  start_time: number;
  end_time: number;
  time_zone: string;
}
