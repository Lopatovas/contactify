import React from "react";

type onChangeCallback = (value: React.ChangeEvent<HTMLInputElement>) => void;

interface IInputProps {
  id: string;
  type: "text" | "email" | "password" | "date" | "tel" | "number" | "time";
  placeholder?: string;
  onChange: onChangeCallback;
  value?: string;
}

export default IInputProps;
