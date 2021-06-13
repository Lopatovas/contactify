import React from "react";
import IInputProps from "./types";
import styles from "./styles.module.css";

const Input = (props: IInputProps) => {
  const { id, type, placeholder, onChange, value } = props;

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
};

export { Input };
