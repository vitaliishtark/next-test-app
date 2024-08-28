"use client";

import { ErrorContextData } from "@/interfaces/interfaces";
import { createContext } from "react";

const DEFAULT_VALUE: ErrorContextData = {
  errors: [""],
  handleError: () => {},
  deleteError: () => {},
};

export const ErrorContext = createContext<ErrorContextData>(DEFAULT_VALUE);