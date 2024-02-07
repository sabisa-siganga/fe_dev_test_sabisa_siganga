import React from "react";
import styles from "./input.module.scss";

interface Props {
  placeholder?: string; // Optional placeholder text for the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change events
  value?: string; // Current value of the input field
  defaultValue?: string; // Default value of the input field
}

export default function Input(props: Props) {
  // Destructuring props
  const { placeholder, onChange, value, defaultValue } = props;

  return (
    <input
      type="text"
      className={`form-control ${styles.input}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
    />
  );
}
